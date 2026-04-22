import urllib.request
import re
import json

urls = [
    "a-moment-of-peace",
    "battling-the-storm",
    "biodiversity-loss",
    "climate-change-in-bangladesh-2",
    "climate-change-in-bangladesh",
    "community-resilience",
    "disaster-risk",
    "green-growth-for-bangladesh-a-path-to-sustainable-development",
    "natures-canvas",
    "natures-embrace",
    "natures-resilience",
    "small-green-businesses",
    "traditional-fish-harvesting-tools"
]

results = []

for slug in urls:
    url = f"https://dreamconsultancy.org/{slug}/"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Extract title
        title_match = re.search(r'<title>(.*?) - Dream Consultancy Limited</title>', html)
        title = title_match.group(1) if title_match else slug.replace("-", " ").title()
        
        # Extract paragraphs
        p_matches = re.findall(r'<p[^>]*>(.*?)</p>', html, re.DOTALL)
        content = []
        for p in p_matches:
            # clean p
            clean_p = re.sub(r'<[^>]+>', '', p).strip()
            clean_p = clean_p.replace("&nbsp;", " ").replace("&#8217;", "'").replace("&#8220;", '"').replace("&#8221;", '"')
            if clean_p:
                content.append(clean_p)
        
        # Find image
        img_match = re.search(r'thumbnailUrl":"([^"]+)"', html)
        image = ""
        if img_match:
            # get the relative path
            image = img_match.group(1).replace("https://dreamconsultancy.org/wp-content", "/images")
            
        results.append({
            "slug": slug,
            "title": title,
            "image": image,
            "content": "\n\n".join(content)
        })
        print(f"Scraped {slug}...")
    except Exception as e:
        print(f"Failed {slug}: {e}")

with open("scratch/all_posts.json", "w") as f:
    json.dump(results, f, indent=2)

