import json
import re

with open("scratch/all_posts_updated.json", "r") as f:
    posts = json.load(f)

def clean_footer(s):
    idx = s.find('facebookarrow-circle-right')
    if idx != -1:
        s = s[:idx]
    return s.strip()

def escape_str(s):
    return s.replace('`', '\\`')

def summarize(content):
    if not content: return ""
    content_no_newlines = re.sub(r'\s+', ' ', content).strip()
    # Handle if it's less than 150 chars
    return content_no_newlines[:150] + ("..." if len(content_no_newlines) > 150 else "")

blog_posts_output = "export const blogPosts = [\n"
for p in posts[:7]: # First 7 for blogs
    raw_content = clean_footer(p['content'])
    content = escape_str(raw_content)
    excerpt = escape_str(summarize(raw_content)).replace('"', '\\"')
    img = p.get('local_image', '')
    
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
for p in posts[7:]: # Remaining 6 for insights
    raw_content = clean_footer(p['content'])
    content = escape_str(raw_content)
    excerpt = escape_str(summarize(raw_content)).replace('"', '\\"')
    img = p.get('local_image', '')
    
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

with open("scratch/blog_posts.js", "w") as f:
    f.write(blog_posts_output)
with open("scratch/insights.js", "w") as f:
    f.write(insights_posts_output)
