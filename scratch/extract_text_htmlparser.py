import urllib.request
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.capturing = False
        self.current_text = ""

    def handle_starttag(self, tag, attrs):
        if tag in ['h1', 'h2', 'h3', 'h4', 'p', 'div', 'span']:
            self.capturing = True
            self.current_text = ""

    def handle_endtag(self, tag):
        if tag in ['h1', 'h2', 'h3', 'h4', 'p', 'div', 'span']:
            self.capturing = False
            text = self.current_text.strip().replace('\n', ' ').replace('\t', '')
            if text and len(text) > 2 and text not in self.texts:
                self.texts.append(text)
            self.current_text = ""

    def handle_data(self, data):
        if self.capturing:
            self.current_text += data

def get_text(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            parser = TextExtractor()
            parser.feed(html)
            # Print unique useful-looking strings
            for t in parser.texts:
                if "Dream Consultancy" not in t and "Menu" not in t:
                    print(t)
    except Exception as e:
        print(f"Error: {e}")

# Try the team page
print("--- TEAM ---")
get_text('https://dreamconsultancy.org/team/')
print("--- ABOUT ---")
get_text('https://dreamconsultancy.org/about/')
