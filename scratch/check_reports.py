import urllib.request
import re
import json

def fetch_and_extract(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Look for the relevant cards. Typically they have <a> tags with hrefs and titles.
        # We can just extract all links under the main section, but looking at raw text is easier.
        matches = re.split(r'<(?:/)?\w+[^>]*>', html)
        texts = [m.strip() for m in matches if m.strip()]
        
        return texts
    except Exception as e:
        return [f"Error fetching {url}: {e}"]

print("\n--- REPORTS PAGE ---")
reps = fetch_and_extract('https://dreamconsultancy.org/reports/')
in_content = False
for t in reps:
    if "Reports" in t or "DREAM Consultancy Limited" in t or "Assessment" in t or "Study" in t:
        print(t)

print("\n--- PUBLICATIONS PAGE ---")
pubs = fetch_and_extract('https://dreamconsultancy.org/publications/')
for t in pubs:
    if "Publications" in t or "DREAM Consultancy Limited" in t:
        print(t)

print("\n--- EVENTS PAGE ---")
evts = fetch_and_extract('https://dreamconsultancy.org/events/')
for t in evts:
    if "Events" in t or "DREAM Consultancy Limited" in t:
        print(t)

