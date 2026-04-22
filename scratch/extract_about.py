import urllib.request
from bs4 import BeautifulSoup
import sys

# Just write a simpler way since bs4 isn't there, we use html.parser
from html.parser import HTMLParser

class AboutParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.in_content = False
        
    def handle_data(self, data):
        t = data.strip().replace('\n', ' ')
        if t and len(t) > 20 and "{" not in t and "function(" not in t:
            if "Dream Consultancy" in t or "social sectors" in t or "Welcome to" in t:
                self.texts.append(t)

req = urllib.request.Request('https://dreamconsultancy.org/about/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        parser = AboutParser()
        parser.feed(html)
        for t in parser.texts:
            print(t)
except Exception as e:
    print(f"Error: {e}")
