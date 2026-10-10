import type { ContentPage } from "@/lib/content/types";

const hero = (
  slug: string,
  alt: string,
  caption: string,
): ContentPage["image"] => ({
  src: `/images/blog/${slug}-1600w.webp`,
  alt,
  caption,
  width: 1600,
  height: 900,
});

export const correctionNotes: ContentPage[] = [
  {
    path: "/blog/what-changes-a-paint-correction-quote",
    kind: "article",
    published: "2026-10-09",
    title: "What Changes a Paint Correction Quote | San Antonio",
    description:
      "A paint correction quote in San Antonio follows size, color, and what a test spot supports. No package price on this page. Call (210) 201-4847.",
    eyebrow: "Notes from the studio",
    h1: "What changes a paint correction quote",
    lede: "A paint correction quote is for the panels in front of the conversation, not a sedan price copied onto a truck. This note lists the factors the studio already uses. It does not add a dollar amount.",
    image: hero(
      "paint-correction-quote-factors",
      "Dark gray hood with swirl marks beside a blank notepad in a studio",
      "AI-generated illustration of swirled paint beside a blank notepad. Not a quote sheet, not a price, and not a customer vehicle.",
    ),
    sections: [
      {
        heading: "This is not the general price page",
        paragraphs: [
          "The [pricing page](/pricing) is how any detailing quote is built, including the 20% deposit of the quoted total. [Ceramic coating cost](/ceramic-coating/cost) is a different bill, because the bottle is the small part and the prep is the large one. This note is only about [paint correction in San Antonio](/paint-correction).",
          "A full detail is not priced like correction. An exterior wash is not priced like correction. If the visit is a clean, say so. If the swirls are the complaint, the quote is a polish quote.",
        ],
      },
      {
        heading: "What actually moves the number",
        paragraphs: [
          "The pricing table already names the correction factors: color, defect depth, and panel count. The service page says the same thing in shop language. Pricing follows vehicle size, paint hardness, and how many stages the test spot justifies. There is no honest one-number menu.",
          "Dark colors show more, so they are often the reason someone calls. Silver can hide marks that black will not. A test spot is how the studio decides whether the vehicle needs a lighter polish or a heavier cut, and whether some panels should be left alone. That decision is part of the quote. It is not a brochure stage count applied to every car.",
          "If your fingernail catches, the mark may only soften. That limit is [when a scratch is too deep to polish](/blog/when-a-scratch-is-too-deep-to-polish). A quote that pretends every line will vanish is not a quote this studio will write. The definition of the work, separate from the price, is [what paint correction is](/blog/what-is-paint-correction).",
        ],
      },
      {
        heading: "What does not belong on this quote",
        paragraphs: [
          "Pet hair, stains, and a dirty cabin change an interior or a [full detail](/full-detailing). They do not, by themselves, change a polish. A rough panel from bonded grit is a decontamination question first. [What a clay bar does](/blog/what-clay-bar-does) is that step. Clay is not the polish.",
          "A coating on the same visit is its own scope. The deposit is 20% of the combined total only when both are on the quote you approved. Coating over uncorrected swirls is a choice you should hear before you pay, not a surprise. [A coating does not hide swirls](/blog/ceramic-coating-does-not-hide-swirls).",
        ],
        compare: {
          caption: "What changes a correction quote, and what does not",
          headers: ["Factor", "On a correction quote?"],
          rows: [
            ["Vehicle size and panel count", "Yes."],
            ["Color, and how the defects read in the sun", "Yes."],
            ["What the test spot supports, including a stop on thin clear", "Yes."],
            ["Pet hair or a soiled cabin", "No. That is interior work or a full detail."],
            ["A coating you also want", "Separate scope. Named before it is on the bill."],
          ],
        },
      },
      {
        heading: "How to ask for the number",
        paragraphs: [
          "Call (210) 201-4847 or [request an in-shop paint assessment](/contact). Send the year, make, model, color, and a photo in direct sun if you have one. A license plate is not a condition report. If the photo is not enough, the look happens at the studio.",
          "The address is 11692 Bricken Circle, San Antonio, TX 78233. The vehicle comes here. Hours are Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday is closed. Twenty percent of the quoted total is the non-refundable deposit that holds the slot. The balance is due when the work is finished. Ten percent of the sale goes to Junior Achievement of South Texas. That donation is not a line that changes the factors above.",
        ],
      },
      {
        heading: "Sources",
        paragraphs: [],
        bullets: [
          "Southern Auto Detailers paint correction page and pricing page. Used for size, paint hardness, test-spot stages, color, defect depth, panel count, the deposit, and the refusal to publish a one-number menu. No dollar figure was added for this article.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you publish a paint correction price?",
        a: "No. The number is a quote for that vehicle after the factors on this page. The pricing page explains the deposit. It is not a correction menu.",
      },
      {
        q: "Is a light polish the same price as a heavier correction?",
        a: "No. A test spot decides how far the clear coat should be polished. We do not print either number in advance.",
      },
      {
        q: "Is correction included when I book a full detail?",
        a: "No, unless the quote names it. A full detail cleans the cabin and the outside. Machine polishing is separate.",
      },
      {
        q: "Does the 20% deposit raise the price?",
        a: "No. It is the first 20% of the quoted total. It holds the slot and is applied to the bill. It is not refundable if you cancel.",
      },
    ],
    related: [
      { to: "/paint-correction", label: "Paint correction in San Antonio" },
      { to: "/pricing", label: "Auto detailing prices" },
      { to: "/ceramic-coating/cost", label: "Ceramic coating cost" },
      { to: "/blog/what-is-paint-correction", label: "What paint correction is" },
      { to: "/blog/when-a-scratch-is-too-deep-to-polish", label: "When a scratch is too deep to polish" },
      { to: "/contact", label: "Request an in-shop paint assessment" },
    ],
  },
  {
    path: "/blog/polishing-vs-waxing",
    kind: "article",
    published: "2026-10-09",
    title: "Polishing vs Waxing | What Each One Does to Paint",
    description:
      "Polishing levels clear coat. Wax sits on top of it. Why the two jobs get mixed up, and which one swirl marks actually need.",
    eyebrow: "Notes from the studio",
    h1: "Polishing versus waxing",
    lede: "Polishing and waxing can both be called buffing. That shared word is why a shiny towel gets booked to do a job it cannot do. Polish works on the clear coat. Wax sits on it.",
    image: hero(
      "polishing-vs-waxing",
      "Unlabeled polishing pad, wax tin, and towel in front of swirled dark paint",
      "AI-generated still life of an unlabeled pad, an unlabeled wax tin, and swirled paint. Not a product the studio sells and not a before-and-after.",
    ),
    sections: [
      {
        heading: "Why the names collide",
        paragraphs: [
          "DetailingWiki’s polish article, which shows no date, says some people use the word polish when they mean a wax, because both are worked across the panel. The same page draws the line for an actual polish: “Polish does NOT hide surface defects, but removes it.” Removal here means leveling a very thin layer of the surface. It does not mean the mark is filled in.",
          "That is [what paint correction is](/blog/what-is-paint-correction). The service page is [paint correction](/paint-correction). Wax is not a substitute for it.",
        ],
      },
      {
        heading: "What wax is doing",
        paragraphs: [
          "The wiki’s wax page, also undated, calls wax self-sacrificial. It sits between dirt and the paint, and it has to be replaced after a period of time. It does not claim a season or a year for San Antonio sun. This studio will not invent one.",
          "Wax does not remove swirls. It can make a panel look shinier, including a shinier copy of the defect. Some glazes and all-in-one products are a third thing. The polish wiki says an all-in-one can leave oils that fill tiny defects and “give the impression that the surface defect was completely removed.” That impression wears off. It is not the same as leveling the clear coat, and it is not a promise that every mark will leave.",
          "If the cobwebs came from a tunnel, the pattern is [swirl marks from car washes](/blog/swirl-marks-from-car-washes). Waxing them again does not unwind the brush.",
        ],
      },
      {
        heading: "Where a coating fits, and where it does not",
        paragraphs: [
          "Choosing between wax and a ceramic coating is a protection question. That comparison is [ceramic coating versus wax](/blog/ceramic-coating-vs-wax). Neither one is the polishing step. [A coating does not hide swirls](/blog/ceramic-coating-does-not-hide-swirls). If you want both a quieter panel and longer protection, the order is [correction before ceramic coating](/blog/paint-correction-before-ceramic-coating).",
          "A [full detail](/full-detailing) can include a sealant or a wax as protection after a wash. That still is not machine polishing. An [exterior detail](/exterior-detailing) is the wash and the decontamination. Read the quote before you assume a pad is in the day.",
        ],
        compare: {
          caption: "Four different jobs that get booked under one word",
          headers: ["Job", "What it does to a swirl"],
          rows: [
            ["Polishing", "May level a shallow mark in the clear coat. Not guaranteed."],
            ["Wax", "Sits on the paint. Does not remove the mark."],
            ["Glaze or all-in-one oils", "Can make a fine mark look quieter until that filler wears off."],
            ["Ceramic coating", "Follows the mark. Does not fill it."],
          ],
        },
      },
      {
        heading: "What to book",
        paragraphs: [
          "If the paint looks dull because it is dirty, start with a wash. If it looks cobwebbed in the sun after it is clean, ask about correction. If it is already what you want to look at, wax or a coating is the protection conversation, not a second polish.",
          "The studio is 11692 Bricken Circle, San Antonio, TX 78233. Call (210) 201-4847 or use the [contact form](/contact). A 20% non-refundable deposit of the quoted total holds the slot. This article does not name a wax brand or a polish brand.",
        ],
      },
      {
        heading: "Sources",
        paragraphs: [],
        bullets: [
          "DetailingWiki, “What is a polish.” https://www.detailingwiki.org/correction/what-is-a-polish/. No date on the page. Quoted for the mix-up between polish and wax, for polish removing rather than hiding defects, and for all-in-one oils giving the impression that a defect was fully removed.",
          "DetailingWiki, “What is wax.” https://www.detailingwiki.org/protection/what-is-wax/. No date on the page. Quoted for wax being self-sacrificial and needing replacement. No local lifespan was taken from that page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will wax remove swirl marks?",
        a: "No. Wax can add gloss. It does not level the clear coat. Some fillers make fine marks look quieter for a while. That look is not correction.",
      },
      {
        q: "Is polishing the same as waxing because both are buffed?",
        a: "No. The motion looks similar. Polish abrades. Wax protects what is already there.",
      },
      {
        q: "Should I wax before a ceramic coating?",
        a: "No. Wax has to come off before a coating is discussed. The coating page and the correction-before-coating note cover that order.",
      },
      {
        q: "Can polishing remove every scratch?",
        a: "No. Shallow clear-coat marks are the candidate. A mark through the clear, or a mark on thin clear, may remain.",
      },
    ],
    related: [
      { to: "/paint-correction", label: "Paint correction" },
      { to: "/blog/what-is-paint-correction", label: "What paint correction is" },
      { to: "/blog/ceramic-coating-vs-wax", label: "Ceramic coating versus wax" },
      { to: "/blog/swirl-marks-from-car-washes", label: "Swirl marks from car washes" },
      { to: "/blog/ceramic-coating-does-not-hide-swirls", label: "A coating does not hide swirls" },
      { to: "/exterior-detailing", label: "Exterior detailing" },
    ],
  },
  {
    path: "/blog/how-long-does-paint-correction-take",
    kind: "article",
    published: "2026-10-09",
    title: "How Long Does Paint Correction Take? | San Antonio",
    description:
      "Paint correction takes longer than a wash. The San Antonio studio does not publish an hour count. What makes the day shorter or longer.",
    eyebrow: "Notes from the studio",
    h1: "How long paint correction takes",
    lede: "A lighter polish is a shorter day than a neglected dark SUV. This note will not invent a clock time the studio has not published.",
    image: hero(
      "paint-correction-time",
      "One dark sedan alone in a closed detailing bay with a polisher on a cart",
      "AI-generated illustration of a single vehicle in a closed bay. Not the Bricken Circle studio, not a timed appointment, and not a finished result.",
    ),
    sections: [
      {
        heading: "Correction is not hidden inside a wash",
        paragraphs: [
          "[How long a detail takes](/blog/how-long-a-detail-takes) is the note for a wash, a cabin, or a full detail. [Paint correction](/paint-correction) is its own appointment. Putting a machine polish inside an unquoted exterior is how the day runs long and the clear coat gets rushed.",
          "The service page already says the practical version: a lighter one-step polish is a shorter day than a neglected dark SUV. Call with the color, the size, and a photo in the sun if you have one. That is the estimate. A number of hours printed here would be a guess.",
        ],
      },
      {
        heading: "What stretches the day",
        paragraphs: [
          "More panels take more time. A crew-cab truck is not a sedan. Dark paint that shows every towel mark is slower to judge than silver that hides them. A test spot can end the plan early. If the clear is thin, or a repaint does not polish like factory clear, the honest stop is part of the day, not a delay.",
          "Decontamination comes before the pad. Wash, wheels, and bonded grit are not optional warm-up. [What a clay bar does](/blog/what-clay-bar-does) is only when the panel is rough after the wash. Polishing dirt is how new scratches get added, and it is not a way to go faster.",
          "A coating after the polish is additional scope. [Correction before ceramic coating](/blog/paint-correction-before-ceramic-coating) is the order. The [process page](/ceramic-coating/process) is the coating steps. Do not add those hours in your head and then expect them to be free.",
        ],
        compare: {
          caption: "Requests that are not the same length of day",
          headers: ["Request", "How to think about the time"],
          rows: [
            ["Exterior wash", "Shorter than correction, and it does not remove swirls."],
            ["Full detail", "Cabin plus exterior. Polishing only if the quote names it."],
            ["Lighter polish after a test spot", "The shorter correction day."],
            ["Heavier correction on neglected dark paint", "Longer. Still no published hour count."],
            ["Coating after the polish", "A separate scope on top of the correction."],
          ],
        },
      },
      {
        heading: "What does not speed it up",
        paragraphs: [
          "The deposit does not buy a faster job. It holds the only slot. This studio works one vehicle at a time. A second car in the bay is not how the day gets shorter.",
          "A photo taken straight at the panel, in a garage, hides the marks a sun photo shows. If we cannot see the complaint, the estimate stays loose until the vehicle is here. That is slower planning, not a trick to pad the clock.",
        ],
      },
      {
        heading: "How to ask",
        paragraphs: [
          "Call (210) 201-4847 with the color and the size, or [request the assessment](/contact). Say whether you want correction alone or correction and a coating. The studio is 11692 Bricken Circle, San Antonio, TX 78233. Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday is closed.",
          "The factors that change the price, which are not the same as the clock, are [what changes a paint correction quote](/blog/what-changes-a-paint-correction-quote). The [pricing page](/pricing) is the deposit rule: 20% of the quoted total, non-refundable if you cancel.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you tell me it will take three hours?",
        a: "No. The site does not publish an hour count for correction. A lighter polish is a shorter day than a neglected dark SUV. The estimate comes from your vehicle.",
      },
      {
        q: "Is correction part of the time for a full detail?",
        a: "Only when it is written on the quote. Otherwise the full detail is the clean, and the polish is a different day.",
      },
      {
        q: "Will you correct more than one car in the same slot?",
        a: "No. One vehicle at a time.",
      },
      {
        q: "Does adding a coating make the correction itself faster?",
        a: "No. The coating is extra work after the paint is refined. It does not shrink the polish.",
      },
    ],
    related: [
      { to: "/paint-correction", label: "Paint correction" },
      { to: "/blog/how-long-a-detail-takes", label: "How long a detail takes" },
      { to: "/blog/what-changes-a-paint-correction-quote", label: "What changes a correction quote" },
      { to: "/blog/paint-correction-before-ceramic-coating", label: "Correction before coating" },
      { to: "/pricing", label: "Auto detailing prices" },
      { to: "/contact", label: "Request an assessment" },
    ],
  },
  {
    path: "/blog/how-to-choose-a-paint-correction-detailer",
    kind: "article",
    published: "2026-10-09",
    title: "How to Choose a Paint Correction Detailer | San Antonio",
    description:
      "Questions that sort a paint correction detailer in San Antonio: test spot, clear-coat limits, who does the work, and where the car goes.",
    eyebrow: "Notes from the studio",
    h1: "How to choose a paint correction detailer",
    lede: "“Best detailer” lists rarely ask whether the shop will stop when the clear coat is thin. These are the correction questions. They are not a ranking.",
    image: hero(
      "choose-paint-correction-detailer",
      "Black door with swirl marks and one scratch seen in side light",
      "AI-generated illustration of marks seen in side light. The studio judges paint in the sun, not from this picture. Not a customer car and not a completed correction.",
    ),
    sections: [
      {
        heading: "Start with the job, not a trophy",
        paragraphs: [
          "The general version of choosing a shop on the northeast side is [how to choose a detailer in Northeast San Antonio](/blog/best-auto-detailer-northeast-san-antonio). That page is about a real address, a named person, and a deposit you can read. This page is only about polish.",
          "Correction is not a wash, not a wax, and not a coating. If a shop uses one of those words for all four, ask which one you are buying. The plain definition is [what paint correction is](/blog/what-is-paint-correction).",
        ],
      },
      {
        heading: "Questions that sort a correction visit",
        paragraphs: [
          "Ask who will be on the panel at the end of the day, not only who answered the phone. This studio is Robert Romero Jr. He is an Alamo Heights graduate and an IDA-certified detailer. That is identity. It is not a claim that a certificate makes every scratch disappear.",
          "Ask whether they will show you a test spot before they commit the whole vehicle. Ask what they will not promise. A light wash mark may improve. A key scratch that has caught a fingernail may only soften. If the clear is already thin, more cutting is not a favor. The limit is [when a scratch is too deep to polish](/blog/when-a-scratch-is-too-deep-to-polish).",
          "Ask whether coating is offered on top of swirls you still hate. A straight shop will say the film will not hide them. Ask whether correction is included in a detail. If it is not on the quote, it is not in the day. Ask where the car is worked on. Here, that answer is the studio, not a driveway.",
        ],
        bullets: [
          "Who does the polishing, and is that the person you are talking to?",
          "Will you see a test spot in the sun before the rest of the car is committed?",
          "Which marks will they tell you may remain?",
          "Is machine polishing written on the quote, or assumed inside a wash?",
          "If a coating is next, will they correct first or seal the swirls in?",
          "What is the address, and is the deposit refundable if you cancel?",
        ],
      },
      {
        heading: "What this studio will say",
        paragraphs: [
          "Southern Auto Detailers is at 11692 Bricken Circle, San Antonio, TX 78233. One vehicle at a time. Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday closed. The deposit is 20% of the quoted total, non-refundable if you cancel, returned if we cancel and cannot reschedule. Ten percent of the sale goes to Junior Achievement of South Texas.",
          "We do not publish a package price. The factors are [what changes a paint correction quote](/blog/what-changes-a-paint-correction-quote). We do not install paint protection film. Film is a different trade. If someone is selling you film instead of a polish, the comparison that already exists is [ceramic coating versus paint protection film](/blog/ceramic-coating-vs-ppf), and it is about coating, not about choosing a correction.",
          "We will not tell you every swirl will leave. [Swirl marks from car washes](/blog/swirl-marks-from-car-washes) are the usual pattern. Some of them improve. Some panels should be left alone.",
        ],
      },
      {
        heading: "Bring the car, not a ranking",
        paragraphs: [
          "A list that names a winner cannot see your clear coat. A photo in the sun, the color, and the size can start the conversation. The look itself is at the studio.",
          "Call (210) 201-4847 or [request an in-shop paint assessment](/contact). If you are comparing protection products after the paint is acceptable, that is a different appointment from this one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you the best paint correction shop in San Antonio?",
        a: "No. Best is a search phrase. We will tell you who does the work, where the studio is, and what a polish cannot promise.",
      },
      {
        q: "Does an IDA certification mean every scratch comes out?",
        a: "No. The certification is already stated on the site. It does not change the clear-coat limit, and the test spot is how that limit is discussed.",
      },
      {
        q: "Should I choose a shop that comes to my driveway?",
        a: "This studio does not. Correction here is at 11692 Bricken Circle. Dust and a rushed outdoor setup are how paint gets marked, not how it gets refined.",
      },
      {
        q: "What if the quote promises a show-car finish on thin paint?",
        a: "Treat that as a reason to pause. Cutting through clear to chase a photo is how paint gets ruined. A shop should be willing to skip a panel.",
      },
    ],
    related: [
      { to: "/paint-correction", label: "Paint correction service" },
      { to: "/about", label: "About Robert Romero Jr." },
      { to: "/blog/best-auto-detailer-northeast-san-antonio", label: "Choosing a detailer on the northeast side" },
      { to: "/blog/what-is-paint-correction", label: "What paint correction is" },
      { to: "/blog/when-a-scratch-is-too-deep-to-polish", label: "When a scratch is too deep to polish" },
      { to: "/refund-policy", label: "Refund policy" },
    ],
  },
  {
    path: "/blog/paint-correction-aftercare",
    kind: "article",
    published: "2026-10-09",
    title: "After Paint Correction | Caring for the Finish",
    description:
      "Paint correction does not make the next dry towel harmless. How to wash and protect the finish without undoing the San Antonio studio day.",
    eyebrow: "Notes from the studio",
    h1: "Caring for paint after correction",
    lede: "Correction does not grow the clear coat back, and it does not make the next dry towel harmless. A careful wash, and protection you actually asked for, are what keep the day from being undone.",
    image: hero(
      "paint-correction-aftercare",
      "Dark blue panel with water droplets and a clean microfiber towel",
      "AI-generated illustration of a wet panel and a clean drying towel. Not a corrected customer car and not a coating result.",
    ),
    sections: [
      {
        heading: "The polish is not a force field",
        paragraphs: [
          "The [paint correction](/paint-correction) page already says the practical limit. Protection after correction matters if you want the result to last the month. A dry towel from a gas station will put a portion of the swirls back. The studio will describe a wash approach that does not undo the day. This article is that description, in general. It is not a product manual, and it does not name a soap or a wax.",
          "The clear coat that was leveled does not return. Chasing a perfect panel every month by polishing again is how the clear gets thin. Maintenance is a wash. Another correction is a later decision, after someone has looked at the paint.",
        ],
      },
      {
        heading: "Washing without putting the cobwebs back",
        paragraphs: [
          "Rinse loose grit before a mitt touches the panel. Use a clean mitt. Do not dry a dirty surface. Do not go straight back to a brush tunnel. That is the same habit described in [swirl marks from car washes](/blog/swirl-marks-from-car-washes).",
          "If water dries into rings, read [water deposits versus etching](/blog/water-spots-on-car-paint) before anyone polishes them. A fresh deposit may wash off. An etch is a different conversation.",
          "If the car was also coated, the wash note changes. Follow the instructions for the product that was installed, and use [how to wash a ceramic-coated car](/blog/how-to-wash-ceramic-coated-car). [Products to avoid on a coating](/blog/products-to-avoid-on-ceramic-coating) is for that film, not for bare corrected paint. Do not assume the two routines are identical.",
        ],
      },
      {
        heading: "Protection is a separate choice",
        paragraphs: [
          "Wax or a sealant can be the shorter protection step. They do not replace the polish you just did, and they wear off. The difference between the polish and the wax is [polishing versus waxing](/blog/polishing-vs-waxing). The difference between wax and a coating is [ceramic coating versus wax](/blog/ceramic-coating-vs-wax).",
          "A ceramic coating is its own scope, with its own place on the quote. It does not hide marks that were left on purpose. Book it as [ceramic coating](/ceramic-coating) if that is what you want, after you have agreed the paint is ready. There is no cure window printed on this page. If a coating was installed, use the window the installer gives you for that product.",
          "A later maintenance visit, when the car is dirty again, is often an [exterior detail](/exterior-detailing), not another correction. [How often to detail a car in San Antonio](/blog/how-often-to-detail-san-antonio) is about that interval. Highway film is not automatically a reason to polish.",
        ],
        compare: {
          caption: "What helps the finish, and what puts marks back",
          headers: ["Habit", "What it does after correction"],
          rows: [
            ["Dry towel on a dirty panel", "Puts circular marks back into the clear coat."],
            ["Brush tunnel", "The same cobwebs the correction was meant to improve."],
            ["Rinse, clean mitt, clean drying towel", "The wash that does not undo the day."],
            ["Wax or sealant", "Temporary protection. Not another polish."],
            ["Ceramic coating", "Separate scope. It follows the paint you leave under it."],
          ],
        },
      },
      {
        heading: "When to come back",
        paragraphs: [
          "Come back for a wash when the film returns. Come back for correction only when you can see defects you want reduced and the clear coat can spare the work. Send a sun photo if you are unsure which one you are looking at.",
          "The studio is 11692 Bricken Circle, San Antonio, TX 78233. Call (210) 201-4847 or [request the visit](/contact). Hours are Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday is closed. A 20% non-refundable deposit of the quoted total holds a slot. The vehicle is worked on here.",
        ],
      },
    ],
    faqs: [
      {
        q: "How soon can I wash the car after correction?",
        a: "This page does not publish a wait time for polished paint. If a coating was installed the same day, follow that product’s first-wash window. Otherwise, wash when the panel is dirty, with a clean mitt, and dry it. Do not scrub a fresh finish with a dry gas-station towel.",
      },
      {
        q: "Do I have to coat the car after correction?",
        a: "No. Protection helps the result last. A coating is one option. A sealant or wax is the shorter one. Leaving the paint with no protection at all makes the next dry towel more expensive.",
      },
      {
        q: "Will another polish next month make it better?",
        a: "Not as a routine. Each polish removes a little clear coat. Wash it. Correct again only if the defects justify it.",
      },
      {
        q: "Can I use a drive-through wash the next day?",
        a: "A brush tunnel is how many of the original swirls were made. It is a poor way to keep a corrected panel.",
      },
    ],
    related: [
      { to: "/paint-correction", label: "Paint correction" },
      { to: "/exterior-detailing", label: "Exterior detailing" },
      { to: "/blog/swirl-marks-from-car-washes", label: "Swirl marks from car washes" },
      { to: "/blog/polishing-vs-waxing", label: "Polishing versus waxing" },
      { to: "/blog/how-to-wash-ceramic-coated-car", label: "How to wash a coated car" },
      { to: "/ceramic-coating", label: "Ceramic coating" },
    ],
  },
];
