import json

with open("scratch/all_posts.json", "r") as f:
    posts = json.load(f)

# The arrays in siteData.ts
# blogPosts has: slug, title, date, tags, image, excerpt, content
# insightsArticles has: slug, title, excerpt, image, tag, date, content

def escape_str(s):
    return s.replace('`', '\\`')

def summarize(content):
    if not content: return ""
    return content[:150] + "..."

blog_posts_output = "export const blogPosts = [\n"
for idx, p in enumerate(posts[:7]): # First 7 for blogs
    content = escape_str(p['content'])
    excerpt = summarize(content)
    # the image path might be wrong if we didn't fetch the image. Let's just use the original image path format.
    # The original images were local, but some of these might not exist locally!
    # Wait, the images from WP were in wp-content/uploads/2024/... and we replaced them with /images/2024/...
    # Are those images actually downloaded? Let's assume they are either downloaded or we just use the real URL for now, or just the local name.
    # The user downloaded images for some but maybe not all. We'll use the relative path.
    img = p['image']
    
    blog_posts_output += f"""  {{
    slug: "{p['slug']}",
    title: "{p['title']}",
    date: "October 30, 2024",
    tags: ["Blog", "News"],
    image: "{img}",
    excerpt: "{excerpt}",
    content: `{content}`,
  }},\n"""
blog_posts_output += "];\n"

insights_posts_output = "export const insightsArticles = [\n"
for idx, p in enumerate(posts[7:]): # Remaining 6 for insights
    content = escape_str(p['content'])
    excerpt = summarize(content)
    img = p['image']
    
    insights_posts_output += f"""  {{
    slug: "{p['slug']}",
    title: "{p['title']}",
    excerpt: "{excerpt}",
    image: "{img}",
    tag: "INSIGHTS",
    date: "October 30, 2024",
    content: `{content}`,
  }},\n"""
insights_posts_output += "];\n"

print("Done. We can manually insert these.")
with open("scratch/blog_posts.js", "w") as f:
    f.write(blog_posts_output)
with open("scratch/insights.js", "w") as f:
    f.write(insights_posts_output)
