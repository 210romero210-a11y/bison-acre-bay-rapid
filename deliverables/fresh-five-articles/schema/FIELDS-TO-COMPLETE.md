# Fields intentionally omitted from the baseline JSON-LD

These graphs validate as JSON. They are not a claim of rich-result eligibility.

Add the following only when the value is real. Do not insert placeholders into the baseline files.

## After the article is published

- `BlogPosting.datePublished` and `dateModified` in ISO 8601, matching the visible byline date.
- `BlogPosting.author` only if a person or organization byline is actually on the page. This batch was not given a verified author. Do not invent credentials. Publisher is already the business `@id`.

## After images are uploaded

For each `ImageObject`:

- `contentUrl`: the absolute URL of the image file itself (the `.webp`), not the article URL and not a local filename.
- `url` if you also want the Schema.org url property. It must be the public file.
- Width and height must be updated if you serve a different file than the 1600w asset recorded here.
- `creator`, `creditText`, `copyrightNotice`, `license`, and `acquireLicensePage` only when ownership and a real license page exist.

## Image-metadata / Licensable badge

Google’s image-license documentation (updated 2025-12-10) requires `contentUrl` and a license URL for the Licensable badge, and one of creator, creditText, copyrightNotice, or license. These illustrations have no public `contentUrl` and no license URL. They are not eligible for that badge. Do not add a fake license to qualify.

The images were generated in this workspace with the built-in image tool. That is a production record, not a determination that the tool vendor or Southern Auto Detailers is the copyright holder. Leave creator and copyright fields off until someone with the rights decides.

## Do not add

- `FAQPage`. Google’s FAQ rich result was restricted and then removed from Search (deprecation notice dated May 2026 in Search Central’s updates log). Visible FAQs stay in the article HTML only.
- Review, rating, or price properties.
- A second `AutomotiveBusiness` node on the article if `https://southernautodetailers.com/#business` is already on the page.
- Hours, geo, and email on this shared graph until you confirm they are still visible and are not already present on the live business node. The site source does publish them. This baseline sticks to the details supplied for this assignment: name, URL, phone, and street address.
