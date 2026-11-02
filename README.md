# WEDE5020_P3_ST10520371_04
POE Project
# Kemo Citrus Website — Part 3: Functionality and SEO

## Project overview
A responsive, static multi-page website concept for Kemo Citrus. The site uses HTML5, one shared CSS stylesheet, and plain JavaScript so it can be edited in NetBeans without requiring a framework or build step.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `products.html` — Product listings with live search/filter
- `services.html` — Services
- `gallery.html` — Click-to-enlarge lightbox gallery
- `news.html` — News and updates
- `contact.html` — General contact form
- `inquiry.html` — Product, bulk-order, partnership, sponsorship and volunteer enquiry form
- `success.html` — Form success page
- `404.html` — Custom not-found page

## Folder structure
```text
Kemo_Citrus_Website/
├── index.html, about.html, products.html, services.html
├── gallery.html, news.html, contact.html, inquiry.html
├── success.html, 404.html, robots.txt, sitemap.xml
├── css/style.css
├── js/main.js
└── images/ (JPG illustrations)
```

## Implemented Part 3 features
1. Unique page titles, meta descriptions, keywords, viewport metadata, canonical URL placeholders and heading hierarchy.
2. Descriptive image alternative text, lazy-loaded gallery/product images and descriptive filenames.
3. JavaScript product search/filtering without a page reload.
4. Accessible gallery lightbox using the HTML `<dialog>` element.
5. HTML5 required fields, email type, input lengths, phone pattern and additional JavaScript phone checks.
6. AJAX form submission configured for Netlify Forms; includes a honeypot field and live status messages.
7. CSS transitions/animations with reduced-motion support.
8. `robots.txt`, `sitemap.xml`, a success page and custom 404 page.
9. Navigation, section and functionality comments in the source code.

## Open and edit in NetBeans
1. Extract the ZIP into a folder.
2. In NetBeans choose **File → Open Project** or open the folder as a web project, depending on your installed NetBeans version.
3. Edit HTML files, `css/style.css`, and `js/main.js`.
4. Test locally in a browser. Forms will not be delivered from a local `file://` preview.

## Publish free with Netlify
1. Create/sign in to a Netlify account.
2. Push this folder to a GitHub repository, then select **Add new site → Import an existing project** in Netlify and connect the repository; alternatively use Netlify's manual deploy by uploading the extracted site folder.
3. No build command is needed for this static site. Set the publish directory to the project root (the folder containing `index.html`).
4. After deployment, update `https://YOUR-SITE-NAME.netlify.app` in all canonical URLs and in `sitemap.xml` and `robots.txt` to the actual Netlify domain.
5. In Netlify, enable form detection and redeploy. Submit test forms and configure **Form notifications** to a real, monitored recipient email address. Email notifications must be configured in Netlify; HTML/JavaScript alone cannot send email directly.
6. Add the sitemap URL to Google Search Console after the domain is final. Confirm the robots file and sitemap are reachable.

## Important placeholders / limitations
- Replace the canonical URL placeholder with the real published domain.
- Contact phone and email are deliberately not invented; enter verified organisation contact details.
- The Google Maps link is a generic search for citrus farms in South Africa, not a verified farm pin. Replace it with the exact farm location if available.
- The image assets are simple SVG illustrations/placeholders. Replace with owned/licensed farm photographs and retain accurate alt text.
- Keyword metadata is included for coursework demonstration, but search engines primarily evaluate useful visible content, page titles, links, performance and relevance; the `keywords` meta tag has little or no ranking value in major search engines.
- Client-side validation is not a security boundary. Netlify/server-side validation and spam controls are still required.
- Backlinks/social promotion and publishing to GitHub require access to the user's accounts; this package does not claim that a remote repository or live site has already been created.

## Changelog
See `CHANGELOG.md` for Part 2/Part 3 notes.

## References (official documentation)
- MDN Web Docs. HTML forms and validation: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- MDN Web Docs. Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- Google Search Central. SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central. Image SEO: https://developers.google.com/search/docs/appearance/google-images
- Google Search Central. Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Netlify Docs. Forms setup: https://docs.netlify.com/manage/forms/setup/
- Netlify Docs. Submitting forms with AJAX: https://docs.netlify.com/manage/forms/setup/#submit-forms-with-ajax
- Netlify Docs. Deploy manually: https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-drag-and-drop
- W3C. Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/
- Leaflet. Interactive maps documentation: https://leafletjs.com/ (not included because the actual farm coordinates are not yet known; add a map once verified coordinates are supplied).
