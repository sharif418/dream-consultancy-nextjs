import json

with open("scratch/all_posts_updated.json", "r") as f:
    posts = json.load(f)

def escape_str(s):
    return s.replace('`', '\\`')

def summarize(content):
    if not content: return ""
    return content[:150] + "..."

blog_posts_output = "export const blogPosts = [\n"
for p in posts[:7]: # First 7 for blogs
    content = escape_str(p['content'])
    excerpt = escape_str(summarize(content))
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
    content = escape_str(p['content'])
    excerpt = escape_str(summarize(content))
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
