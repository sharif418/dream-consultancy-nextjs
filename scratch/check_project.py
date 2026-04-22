import urllib.request
import re

url = "https://dreamconsultancy.org/project/income-generation-of-entrepreneurs-through-safe-fish-production-and-marketing/"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Just grab all text from the body to see what is there
    # Look closely at the project detail section
    matches = re.split(r'<(?:/)?\w+[^>]*>', html)
    texts = [m.strip() for m in matches if m.strip()]
    
    in_content = False
    for t in texts:
        if "Income Generation" in t or "Client:" in t:
            in_content = True
        
        if in_content:
            print(t)
        
        if "Want to collaborate" in t:
            break
            
except Exception as e:
    print(f"Error fetching {url}: {e}")
