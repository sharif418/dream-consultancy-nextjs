import urllib.request
import re

urls = [
    "environment-climate-change-and-disaster",
    "green-growth-agriculture-food",
    "water-sanitation-and-public-health",
    "policy-and-governance",
    "urban-development-pollution-and-management",
    "clean-energy-and-justice"
]

for url in urls:
    full_url = "https://dreamconsultancy.org/" + url + "/"
    try:
        req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # look for any significant text content inside ct-text-block
        matches = re.findall(r'<div[^>]*class="ct-text-block"[^>]*>(.*?)</div>', html, re.IGNORECASE | re.DOTALL)
        
        # Clean tags and print text longer than 20 chars
        texts = []
        for match in matches:
            text = re.sub(r'<[^>]+>', '', match).strip()
            if len(text) > 20 and "collaborate with us" not in text and "Solve your unique challenges" not in text and "Subscribe" not in text and "rights reserved" not in text:
                texts.append(text)
        
        print(f"--- {url} ---")
        if texts:
            print(f"Found {len(texts)} text blocks.")
            for t in texts[:3]:
                 print("- " + t[:100] + "...")
        else:
            print("NO TEXT CONTENT.")
    except Exception as e:
        print(f"Error fetching {url}: {e}")

