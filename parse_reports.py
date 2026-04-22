import json
from html.parser import HTMLParser

class ReportParser(HTMLParser):
    def __init__(self):
        super().__init__()
        # We know titles are in links inside headers usually. Let's look for tags containing specific text to identify structure.
        self.articles = []
        self.current_a = None
        
    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if tag == "a":
            self.current_a = attr_dict.get("href", "")
            
    def handle_endtag(self, tag):
        if tag == "a":
            self.current_a = None

    def handle_data(self, data):
        data = data.strip()
        if data and self.current_a and "dreamconsultancy.org" in self.current_a:
            print(f"Found link: {self.current_a} Text: {data[:50]}...")

parser = ReportParser()
with open("scratch/reports.html", "r", encoding="utf-8") as f:
    parser.feed(f.read())
