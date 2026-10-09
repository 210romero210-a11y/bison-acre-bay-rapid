# Southern Auto Detailers — five-article batch (staged)

Not published. These files were not added to the site router, `pages.ts`, or `sitemap.xml`.

Batch date: 9 October 2026. Uniqueness was checked against the live site source in this workspace, one live URL fetch, and the earlier folder `deliverables/five-article-batch/`. It was not checked against any run outside those.

## Capabilities used

| Capability | Status |
| --- | --- |
| Browse public pages | Used |
| Inspect this site’s source | Used |
| Fetch one live URL | Used: `/ceramic-coating` returned H1 “Ceramic coating services in San Antonio” |
| Generate images | Used. Ten kept, three earlier diagrams rejected after inspection |
| Inspect images | Used |
| Resize and convert to WebP | Used. 1600w and 800w variants |
| Write files and zip | Used |
| Validate JSON | Used (`json.loads` on every baseline graph) |
| CMS or hosting deploy | Not used. Not authorized |

## Sources read

- DetailingWiki, “What is a coating,” https://www.detailingwiki.org/detailing-miscellaneous/what-is-a-coating/ (also resolves from `/protection/what-is-a-coating/`). No date on the page. Coatings do not fill swirls or hide defects.
- DetailingWiki, “What is a polish,” https://www.detailingwiki.org/correction/what-is-a-polish/. No date on the page.
- DetailingWiki, “Minimum paint thickness,” https://www.detailingwiki.org/correction/minimum-paint-thickness/. Search index date 2017-11-15. Strike-through and burn-through. Numeric “how many polishes” example was not copied into the article.
- DetailingWiki, “Removing swirls – basic,” https://www.detailingwiki.org/correction/removing-swirls-basic/. Search index date 2016-02-17. Nail-catch remark used as an old rule of thumb. Wet-sanding advice was not adopted.
- DetailingWiki, “What is paint repair,” https://www.detailingwiki.org/detailing-miscellaneous/what-is-paint-repair/. Search index date 2017-01-03.
- DetailingWiki, “What is a fallout remover,” https://www.detailingwiki.org/decontaminating/what-is-a-fallout-remover/. Page fetch showed no date. Search index listed 2016-03-17. The “98%” sentence was not reused.
- DetailingWiki, “How to prepare paintwork before polishing,” https://www.detailingwiki.org/guides/prepare-paintwork-polishing/. Search index date 2016-05-16. Used from the indexed excerpt for iron scratching paint during work.
- DetailingWiki, “How to clean interior,” https://www.detailingwiki.org/guides/how-to-clean-interior/. Page fetch showed no date. Search index listed 2017-05-31.
- A request for `/interior/cleaning-plastic-interior-parts/` returned 404. That URL is not cited.
- Google Search Central, Article structured data, updated 2026-09-08. No required properties. Rich results are not guaranteed. Recommended: headline, image, dates, author.
- Google Search Central, image metadata / Licensable badge, updated 2025-12-10. Needs `contentUrl` plus license (and a creator, credit, copyright notice, or license). Not claimed here.
- Google Search Central, image SEO, updated 2026-03-02. Descriptive filenames and alt text. Images should be crawlable HTML, which these are not until upload.
- Google Search Central, Breadcrumb, updated 2026-09-08.
- Google Search Central, Local business, updated 2026-09-08. Required: name and address. Mark up only visible, accurate facts.
- Google Search Central updates log: FAQ rich results were limited to government and health sites and then removed from Search (notice that the feature would no longer appear starting 7 May 2026). No `FAQPage` in this batch.
- Schema.org types used: WebPage, BlogPosting, BreadcrumbList, ImageObject, WebSite, AutomotiveBusiness, Service, PostalAddress, City, ListItem.

## Website audit

Canonical host in the site source: `https://southernautodetailers.com` (non-www, no trailing slash).

Verified live in this run: `/ceramic-coating` only. Other URLs below are verified in the site source that matches that live page’s wording. They are not all re-fetched over HTTP.

| Role | URL in use | Proposed fallback that does not match |
| --- | --- | --- |
| Ceramic coating | /ceramic-coating | /ceramic-coating/ and /services/ceramic-coating/ |
| Paint correction | /paint-correction | /paint-correction/ |
| Exterior | /exterior-detailing | /exterior-detailing/ |
| Interior | /interior-detailing | /interior-detailing/ |
| Full detail | /full-detailing | /full-detailing/ |
| Blog index | /blog | /blog/ |
| Contact | /contact | /contact/ |
| Studio ZIP | /san-antonio-78233 | /locations/san-antonio/ |
| Converse | /converse | /locations/converse/ |
| Schertz | /schertz | /locations/schertz/ |

Business node already used on the site: `https://southernautodetailers.com/#business`. Service node pattern: `{service URL}#service`.

Existing blog inventory checked so these five topics were not repeats. Already live, among others: coating versus wax, coating versus PPF, how a coating works, how long a coating lasts, warranties explained, products to avoid, washing a coated car (two URLs), decontamination before coating, correction before coating, what paint correction is, swirl marks from washes, water spots (two URLs), clay, wheels, bird droppings, bugs and tar, tree sap, leather, pet hair, floor mats, sun-damaged dash, what a full detail includes, how to prepare, how long a detail takes, how often to detail. A previous staged batch in `deliverables/five-article-batch/` covered coated surfaces, orange peel versus swirls, interior versus exterior versus full, cloth versus leather versus vinyl, and tire dressing. Those were not reused.

## Discrepancy

The live interior service copy in `src/lib/content/pages.ts` says carpets are extracted when soil is ground in, and that steam is used on some trim and cup holders. It also says the owner is an IDA-certified detailer. This assignment said not to assume extraction, steam, disinfection, or odor treatment, and not to invent certifications. The new articles do not add those claims. They point at the existing interior wording instead of quietly rewriting the service page. IDA was not re-checked against a directory in this run. Hours, the 20% deposit, the Junior Achievement pledge, the phone, and the address are repeated only where an article attributes them to the published site.

## Topics not selected

From a pool wider than five: traffic film as its own article (too close to fallout), polishing holograms, headlight haze (already live), coating cure times (would invent a number), PPF (already live), door jambs (already live), and the five topics in the previous staged batch.

## Word counts

Body words from the article H1 through the closing CTA, including FAQs and captions, excluding metadata, sources, and implementation notes:

See the manifest for the count taken when the zip was built.

## Images

Ten WebP files, each at 1600w and 800w. Heroes are 1600×900. Supporting images are 1600×1067. All are AI illustrations. Captions say so. Rejected after inspection: a coating diagram with no separate film, a shattered-paint chip that did not show a primer center, and two paint-layer diagrams whose grooves did not match the requested depths. The kept depth diagram is captioned to match what it actually shows: both defects pass the clear layer.

No image is hosted. `contentUrl` is omitted. Licensable badge is not claimed.
