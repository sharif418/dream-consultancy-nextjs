import urllib.request
import re

url = 'https://dreamconsultancy.org/team/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        # Oxygen builder stores stuff in specific containers. Let's look for images and names.
        # We can extract text chunks or image src.
        # Since bs4 is not available, we'll use regex.
        # Typical Oxygen structure for team or testimonials might vary.
        # Let's find all names which we know: Ashfia, Muhibul, Nasrulla etc.
        names = ["Ashfia Nisha Bristy", "Muhibul Munim", "Nasrulla Fahad", "Md Habibur Rahman", "Mahadi Hasan Sohag", "Md Jewel Hawlader", "Md Shaifulla Khalid"]
        
        for name in names:
            # try to find the block containing this name, and an image near it
            # this is a bit hacky, so let's just print surrounding html for the first name to see structure.
            idx = html.find(name)
            if idx != -1:
                start = max(0, idx - 800)
                end = min(len(html), idx + 800)
                # find img src in this block
                imgs = re.findall(r'<img[^>]+src="([^"]+)"', html[start:end])
                img_src = imgs[0] if imgs else 'None'
                print(f"Name: {name} | Img: {img_src}")
except Exception as e:
    print(e)
