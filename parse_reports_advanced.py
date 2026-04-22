import json
from html.parser import HTMLParser

class ReportParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reports = []
        self.current_report = {}
        self.capture_text = None
        self.last_tag = None
        self.in_title = False
        
    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        self.last_tag = tag
        
        # New report block starting
        if tag == "a" and "href" in attr_dict and "dreamconsultancy.org" in attr_dict["href"] and not attr_dict["href"].endswith("/"):
            href = attr_dict["href"]
            if href.split("/")[-2] in ["production-and-marketing-of-safe-fish", "income-generation", "increasing-marginalized-household", "climate-resilience-sustainable-livelihood", "sunflower-production-and-homestead-vegetable-farming", "consultancy-for-innovative", "promoting-disaster-ready"]:
                # If we were capturing a report and found a new title link
                if "ct-link" in attr_dict.get("class", "") and "oxy-post" in attr_dict.get("class", ""):
                   # Not useful
                   pass
                else:
                   self.in_title = True
                   if self.current_report.get("url") != href:
                       if self.current_report.get("title"):
                           self.reports.append(dict(self.current_report))
                       self.current_report = {"url": href, "desc": ""}
                
        # Image is typically an img tag with src
        if tag == "img" and "src" in attr_dict and "wp-content/uploads" in attr_dict["src"]:
             # Often there are multiple <img>, but the report image might be before the title
             if self.current_report.get("url"):
                  self.current_report["image_candidate"] = attr_dict["src"]

        # Date and Description
        if tag == "div" and "oxy-post-meta" in attr_dict.get("class", ""):
            self.capture_text = "date"
        elif tag == "div" and "oxy-post-content" in attr_dict.get("class", ""):
            self.capture_text = "desc"

    def handle_endtag(self, tag):
        if tag == "a":
            self.in_title = False
        if tag == "div" and self.capture_text in ["date", "desc"]:
             # Assuming single level
             self.capture_text = None

    def handle_data(self, data):
        data = data.strip().replace('\u00a0', ' ')
        if not data:
            return
            
        if self.in_title and self.current_report.get("url"):
             if data != "Continue Reading...":
                 self.current_report["title"] = data
                 # The image for this post is usually the one seen just before the title or just after.
                 
        if self.capture_text == "date":
             self.current_report["date"] = data
        elif self.capture_text == "desc":
             self.current_report["desc"] += data + " "

parser = ReportParser()
with open("scratch/reports.html", "r", encoding="utf-8") as f:
    parser.feed(f.read())
if parser.current_report.get("title"):
   parser.reports.append(dict(parser.current_report))

print(json.dumps(parser.reports, indent=2))
