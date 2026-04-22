import urllib.request
from bs4 import BeautifulSoup

def get_text(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read()
            soup = BeautifulSoup(html, 'html.parser')
            # Extract main content - guess it's usually inside body, let's just extract all h1,h2,h3,p, and team member names if there's any.
            texts = []
            for tag in soup.find_all(['h1', 'h2', 'h3', 'p', 'div']):
                cl = tag.get('class', [])
                # If oxygen builder, there might be specific classes
                if tag.name in ['h1', 'h2', 'h3'] or 'title' in ' '.join(cl) or 'name' in ' '.join(cl):
                    t = tag.get_text(strip=True)
                    if t and t not in texts:
                        texts.append(t)
            for t in texts[:50]:
                print(t)
    except Exception as e:
        print(f"Error: {e}")

get_text('https://dreamconsultancy.org/team/')
