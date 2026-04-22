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
        
        icons = re.findall(r'<use xlink:href="#(.*?)"></use>', html)
        print(f"--- {url} ---")
        if icons:
            # Count them to see what is prominent
            from collections import Counter
            c = Counter(icons)
            print(c)
        else:
            print("NO ICONS.")
    except Exception as e:
        print(f"Error fetching {url}: {e}")

