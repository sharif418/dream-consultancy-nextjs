import re

with open("src/data/siteData.ts", "r") as f:
    ts_data = f.read()

with open("scratch/blog_posts.js", "r") as f:
    blogs_code = f.read()

with open("scratch/insights.js", "r") as f:
    insights_code = f.read()

# Replace export const blogPosts
ts_data = re.sub(r'export const blogPosts = \[.*?\];', blogs_code.strip(), ts_data, flags=re.DOTALL)

# Replace export const insightsArticles
ts_data = re.sub(r'export const insightsArticles = \[.*?\];', insights_code.strip(), ts_data, flags=re.DOTALL)

with open("src/data/siteData.ts", "w") as f:
    f.write(ts_data)
print("siteData.ts updated successfully with 13 real articles!")
