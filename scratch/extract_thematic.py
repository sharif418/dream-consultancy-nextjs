import urllib.request
from html.parser import HTMLParser

class ThematicParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.capturing = False
        self.data = []

    def handle_starttag(self, tag, attrs):
        if tag in ['h1', 'h2', 'h3', 'p', 'li']:
            self.capturing = True
            self.data = []

    def handle_endtag(self, tag):
        if tag in ['h1', 'h2', 'h3', 'p', 'li']:
            self.capturing = False
            text = "".join(self.data).strip().replace('\n', ' ').replace('\t', '')
            if text and len(text) > 5:
                # filter out navigation
                bad_words = ["About Us", "Thematic Areas", "Search for", "With our team of 50+", "Subscribe to our newsletter", "Submit", "If you are human"]
                valid = True
                for b in bad_words:
                    if b in text:
                        valid = False
                if valid and text not in self.texts:
                    self.texts.append(text)

    def handle_data(self, data):
        if self.capturing:
            self.data.append(data)

def scrape(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            parser = ThematicParser()
            parser.feed(html)
            print(f"\n--- {url} ---")
            for t in parser.texts:
                if len(t) > 10:
                    print(t)
    except Exception as e:
        print(f"Error: {e}")

urls = [
    "https://dreamconsultancy.org/environment-climate-change-and-disaster/",
    "https://dreamconsultancy.org/green-growth-agriculture-food/",
    "https://dreamconsultancy.org/water-sanitation-and-public-health/",
    "https://dreamconsultancy.org/policy-and-governance/",
    "https://dreamconsultancy.org/urban-development-pollution-and-management/",
    "https://dreamconsultancy.org/clean-energy-and-justice/"
]
for u in urls:
    scrape(u)
