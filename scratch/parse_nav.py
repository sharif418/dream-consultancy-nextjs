import urllib.request
from html.parser import HTMLParser

class NavParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_nav = False
        self.links = []
        self.current_href = None
        self.current_text = ""
        self.nav_depth = 0

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        
        # In Oxygen Builder, nav is usually a div with class 'oxy-nav-menu' or similar, or an actual <nav>
        # Let's just look for any tag with class containing 'menu' or id containing 'menu'
        classes = attr_dict.get('class', '')
        if tag == 'nav' or 'menu' in classes.lower():
            self.in_nav = True
            self.nav_depth += 1
            
        if self.in_nav and tag == 'a':
            self.current_href = attr_dict.get('href', '')
            self.current_text = ""

    def handle_endtag(self, tag):
        if self.in_nav and tag == 'a' and self.current_href:
            text = self.current_text.strip()
            if text and 'dreamconsultancy.org' in self.current_href:
                self.links.append((text, self.current_href))
            self.current_href = None
            
        # Simplistic nav scope ending
        classes = ""
        if tag == 'nav' or 'menu' in classes.lower():  
            # This logic is flawed, but let's just grab ALL links on the home page instead and filter unique internal links.
            pass

class AllLinksParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.current_href = None
        self.current_text = ""

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if tag == 'a':
            self.current_href = attr_dict.get('href', '')
            self.current_text = ""

    def handle_endtag(self, tag):
        if tag == 'a' and self.current_href:
            text = self.current_text.strip().replace('\n', ' ').replace('\t', '')
            if text and self.current_href.startswith('https://dreamconsultancy.org/'):
                self.links.append((text, self.current_href))
            self.current_href = None

    def handle_data(self, data):
        if self.current_href is not None:
            self.current_text += data

req = urllib.request.Request('https://dreamconsultancy.org/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        parser = AllLinksParser()
        parser.feed(html)
        
        seen = set()
        for text, href in parser.links:
            if href not in seen:
                print(f"{text} -> {href}")
                seen.add(href)
except Exception as e:
    print(f"Error: {e}")
