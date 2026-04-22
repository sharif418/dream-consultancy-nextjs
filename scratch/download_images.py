import urllib.request
import os
import json

with open("scratch/all_posts.json", "r") as f:
    posts = json.load(f)

# The base url on WP for images
# 'image' might be /images/uploads/2024/10/photos-2.jpg
# the WP original was https://dreamconsultancy.org/wp-content/uploads/2024/10/photos-2.jpg
for p in posts:
    img_path = p['image']
    if not img_path: continue
    
    # original wp URL
    wp_url = img_path.replace('/images/uploads', 'https://dreamconsultancy.org/wp-content/uploads')
    
    # local path we want to save it to
    # we'll save it to public/images/2024/10/ (or whatever month)
    # clean out the /uploads part for local
    local_path = img_path.replace('/images/uploads', 'public/images')
    local_url_path = img_path.replace('/images/uploads', '/images')
    p['local_image'] = local_url_path # What we will use in siteData.ts
    
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    if not os.path.exists(local_path):
        print(f"Downloading {wp_url} to {local_path}...")
        try:
            req = urllib.request.Request(wp_url, headers={'User-Agent': "Mozilla"})
            with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
                out_file.write(response.read())
        except Exception as e:
            print(f"Failed to download {wp_url}: {e}")

with open("scratch/all_posts_updated.json", "w") as f:
    json.dump(posts, f, indent=2)
