# Five-article batch (staged, not published)

These articles are drafts in this folder. They were not added to the website, not uploaded to southernautodetailers.com, and not submitted to Search Console.

## Capabilities

- Website source in this project was inspected. The public site was not re-crawled in this run.
- DetailingWiki pages and Google Search Central documents were fetched.
- Ten images were generated, inspected, and converted to WebP.
- JSON-LD files were parsed successfully.
- No CMS publish, no public image URLs, no Rich Results Test.

## Sources read

- https://www.detailingwiki.org/protection/what-is-a-coating/ (no date on the fetched page)
- https://www.detailingwiki.org/protection/preparing-ceramic-coating/ (no date on the fetched page)
- https://www.detailingwiki.org/detailing-miscellaneous/what-is-orange-peel/ (no date on the fetched page)
- https://www.detailingwiki.org/detailing-miscellaneous/what-is-tire-dressing/ (a search snippet listed 2016-03-29; the fetch summary did not show a date)
- https://www.detailingwiki.org/guides/guide-detailing-steps/ (listed 2016)
- https://www.detailingwiki.org/guides/wheel-cleaning-basic/
- https://www.detailingwiki.org/correction/filling-swirls/
- https://developers.google.com/search/docs/appearance/structured-data/article (no required Article properties; rich results not guaranteed)
- https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata (licensable badge needs contentUrl plus license or creator/credit/copyrightNotice; not claimed here)

Two wiki URLs 404’d and were not used: `/correction/orange-peel/` and `/exterior/what-is-a-tire-dressing/`.

## Verified URLs

Canonical host in the site source: `https://southernautodetailers.com` (no trailing slash).

- `/ceramic-coating`, `/paint-correction`, `/exterior-detailing`, `/interior-detailing`, `/full-detailing`
- `/blog`, `/contact`, `/san-antonio-78233`, `/converse`, `/schertz`
- Business `@id`: `https://southernautodetailers.com/#business`
- Service `@id` pattern: `https://southernautodetailers.com/ceramic-coating#service`

There is no `/locations/san-antonio/` page. Do not create city branches.

## Discrepancy to resolve before publishing

The live interior page describes extraction and steam. This batch does not treat those as confirmed inclusions. Reconcile the service page and these drafts before they go live. The site also states an IDA certification. This batch does not repeat that claim.

## Topic choice

Checked against the 39 existing blog paths in the site source. Not checked against other unpublished batches. No search-volume claims.

| Order | Title | Service | Keyword | Intent | Proposed slug |
|---|---|---|---|---|---|
| 1 | Which surfaces can be ceramic coated? | Ceramic coating | which surfaces can be ceramic coated | Scope before booking | /blog/which-surfaces-can-be-ceramic-coated |
| 2 | Orange peel versus swirl marks | Paint correction | orange peel vs swirl marks | Diagnosis | /blog/orange-peel-vs-swirl-marks |
| 3 | Tire dressing is not paint protection | Exterior | tire dressing vs paint protection | Misconception | /blog/tire-dressing-is-not-paint-protection |
| 4 | Cloth, leather, or vinyl seats | Interior | cloth vs leather vs vinyl car seats | Prep for booking | /blog/cloth-leather-vinyl-seats |
| 5 | Interior, exterior, or a full detail | Full detailing | interior vs exterior vs full detail | Choose a scope | /blog/interior-exterior-or-full-detail |

## Images

All ten files are in `images/`. They are AI illustrations, not shop evidence. They are not hosted on the business domain. Rights are not assigned to the business. No license URL was invented, so Google’s licensable-image badge is not claimed.

Baseline schema in `schema/*.baseline.json` omits `contentUrl`, dates, author, and image nodes on purpose. Add those only after upload, a real publish date, and a visible byline.

## Link matrix

New-article to new-article links are pending until all five are published together.

| Source | Target | Anchor | Status |
|---|---|---|---|
| Article 1 | /ceramic-coating | ceramic coating | Verified target |
| Article 1 | /blog/what-is-paint-correction | what paint correction involves | Verified target |
| Article 1 | /contact | Request a shop coating consultation | Verified |
| Article 2 | /paint-correction | paint correction | Verified |
| Article 2 | /blog/ceramic-coating-vs-wax | ceramic coating versus wax | Verified |
| Article 3 | /exterior-detailing | exterior detailing | Verified |
| Article 3 | /ceramic-coating | ceramic coating | Verified |
| Article 4 | /interior-detailing | (service page) | Verified |
| Article 5 | /full-detailing | full detailing | Verified |
| Article 5 | /interior-detailing | Interior detailing | Verified |
| Article 5 | /exterior-detailing | Exterior detailing | Verified |

Reverse links, after the new URLs return 200: add article 1 from the ceramic page’s scope section; article 2 from the paint-correction page; article 3 from the exterior page; article 4 from the interior page; article 5 from the services overview.

## Checklist

| Item | Status |
|---|---|
| Five articles written | Completed |
| Ten images generated and converted | Completed |
| JSON syntax check | Completed |
| Public hosting of images | Blocked until upload |
| Rich Results Test | Not tested |
| Added to the live site | Not done (not authorized) |
| Sitemap | Requires confirmation after publish |
