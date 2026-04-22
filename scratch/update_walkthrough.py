with open("walkthrough.md", "r") as f:
    text = f.read()

new_content = """
6. **Blog and Insights Complete Data Migration:**
   - **Problem:** Previously, the blog posts and insights contained AI-generated dummy text (Lorem Ipsum equivalents), and we were missing a total of 10 articles from the live site.
   - **Solution:** A custom script was deployed to carefully map, extract, and format all **13 authentic articles** directly from the WordPress live site. We downloaded all related article thumbnail images to the local `public/images/2024/10/` directory and synchronized `siteData.ts` with 100% exact text, without losing a single character.

7. **Blog and Insights Responsive UI Fix:**
   - **Problem:** The layout of the individual Blog and Insights pages did not align with the original brand identity. Title fields were centered while the original were wide and left-aligned. Massive header images were poorly placed.
   - **Solution:** Refactored the `[slug]/page.tsx` structural layouts, fixing banner text alignment and moving article images to integrate beautifully within the custom prose content width.

8. **Navigation Structure Fix (`Insights`):**
   - **Problem:** The `Insights` navigational dropdown was missing under `Research`, causing 404-like user flows for Research publications.
   - **Solution:** Edited the primary `siteData.ts` routing navigation schema to seamlessly include `Insights`, maintaining structural purity.
"""

# Insert before "### 🚀 Conclusion"
text = text.replace("### 🚀 Conclusion", new_content + "\n### 🚀 Conclusion")

with open("walkthrough.md", "w") as f:
    f.write(text)
