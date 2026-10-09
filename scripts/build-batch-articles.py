#!/usr/bin/env python3
"""Turn the staged markdown batch into ContentPage records."""
import json
import re
import shutil
from pathlib import Path

ROOT = Path("/workspace")
SRC = ROOT / "deliverables/fresh-five-articles/articles"
IMG_SRC = ROOT / "deliverables/fresh-five-articles/images"
IMG_DST = ROOT / "public/images/blog"
OUT = ROOT / "src/lib/content/batch-articles.ts"

RELATED = {
    "ceramic-coating-does-not-hide-swirls": [
        ("/ceramic-coating", "Ceramic coating"),
        ("/paint-correction", "Paint correction"),
        ("/blog/what-is-paint-correction", "What paint correction involves"),
        ("/blog/paint-correction-before-ceramic-coating", "Correction before a coating"),
        ("/blog/when-a-scratch-is-too-deep-to-polish", "When a scratch is too deep to polish"),
        ("/contact", "Request an appointment"),
    ],
    "when-a-scratch-is-too-deep-to-polish": [
        ("/paint-correction", "Paint correction"),
        ("/blog/what-is-paint-correction", "What paint correction involves"),
        ("/blog/ceramic-coating-does-not-hide-swirls", "A ceramic coating does not hide swirls"),
        ("/blog/swirl-marks-from-car-washes", "Swirl marks from car washes"),
        ("/ceramic-coating", "Ceramic coating"),
        ("/contact", "Request an appointment"),
    ],
    "iron-fallout-on-car-paint": [
        ("/exterior-detailing", "Exterior detailing"),
        ("/blog/wheel-detailing-san-antonio", "Wheel detailing"),
        ("/blog/what-clay-bar-does", "What a clay bar does"),
        ("/blog/when-a-scratch-is-too-deep-to-polish", "When a scratch is too deep to polish"),
        ("/paint-correction", "Paint correction"),
        ("/contact", "Request an appointment"),
    ],
    "car-screens-buttons-and-glossy-trim": [
        ("/interior-detailing", "Interior detailing"),
        ("/blog/sun-damaged-dashboard", "Sun-damaged dashboards"),
        ("/blog/what-to-tell-a-detailer-before-you-book", "What to tell the studio before you book"),
        ("/full-detailing", "Full detailing"),
        ("/blog/leather-conditioning-san-antonio", "Leather conditioning"),
        ("/contact", "Request an appointment"),
    ],
    "what-to-tell-a-detailer-before-you-book": [
        ("/full-detailing", "Full detailing"),
        ("/exterior-detailing", "Exterior detailing"),
        ("/interior-detailing", "Interior detailing"),
        ("/paint-correction", "Paint correction"),
        ("/ceramic-coating", "Ceramic coating"),
        ("/contact", "Request an appointment"),
    ],
}

EYEBROW = {
    "ceramic-coating-does-not-hide-swirls": "Ceramic coating",
    "when-a-scratch-is-too-deep-to-polish": "Paint correction",
    "iron-fallout-on-car-paint": "Exterior detailing",
    "car-screens-buttons-and-glossy-trim": "Interior detailing",
    "what-to-tell-a-detailer-before-you-book": "Full detailing",
}


def meta_value(text: str, label: str) -> str:
    match = re.search(rf"^- {re.escape(label)}: (.+)$", text, re.M)
    if not match:
        raise SystemExit(f"missing {label}")
    return match.group(1).strip()


def parse_figure(block: str) -> dict:
    src = re.search(r'src="([^"]+)"', block).group(1)
    alt = re.search(r'alt="([^"]+)"', block).group(1)
    width = int(re.search(r'width="(\d+)"', block).group(1))
    height = int(re.search(r'height="(\d+)"', block).group(1))
    srcset = re.search(r'srcset="([^"]+)"', block)
    sizes = re.search(r'sizes="([^"]+)"', block)
    caption = re.search(r"<figcaption>(.*?)</figcaption>", block, re.S).group(1).strip()
    figure = {
        "src": src,
        "alt": alt,
        "caption": caption,
        "width": width,
        "height": height,
    }
    if srcset:
        figure["srcSet"] = srcset.group(1)
    if sizes:
        figure["sizes"] = sizes.group(1)
    return figure, "fetchpriority" in block


def parse_table(lines: list[str]) -> dict:
    rows = []
    for line in lines:
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        if all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells):
            continue
        rows.append(cells)
    return {"headers": rows[0], "rows": rows[1:]}


def parse_article(path: Path) -> dict:
    raw = path.read_text()
    slug = meta_value(raw, "Slug")
    title = meta_value(raw, "Title tag")
    description = meta_value(raw, "Meta description")
    h1 = meta_value(raw, "H1")
    body = raw.split("# Article", 1)[1]
    body = body.split("## Implementation notes", 1)[0]
    body = re.sub(r"Staged image path only\..*(?:\n|$)", "", body)
    lines = body.splitlines()

    sections = []
    faqs = []
    current = None
    mode = "body"
    para = []
    bullets = []
    table = []
    figure_buf = []
    in_figure = False
    hero = None
    pending_faq_q = None
    faq_paras = []

    def flush_para():
        nonlocal para
        text = " ".join(part.strip() for part in para).strip()
        para = []
        return text

    def flush_table():
        nonlocal table
        if not table or current is None:
            table = []
            return
        parsed = parse_table(table)
        parsed["caption"] = current["heading"]
        current["compare"] = parsed
        table = []

    def flush_section():
        nonlocal current, bullets
        if current is None:
            return
        flush_table()
        if bullets:
            current["bullets"] = bullets
            bullets = []
        if current["paragraphs"] or current.get("bullets") or current.get("figure") or current.get("compare"):
            sections.append(current)
        current = None

    def ensure_section(heading: str):
        nonlocal current
        flush_section()
        current = {"heading": heading, "paragraphs": []}

    opening = []
    started = False
    for line in lines:
        if in_figure:
            figure_buf.append(line)
            if "</figure>" in line:
                in_figure = False
                figure, is_hero = parse_figure("\n".join(figure_buf))
                figure_buf = []
                if is_hero and hero is None:
                    hero = figure
                elif current is not None:
                    current["figure"] = figure
                else:
                    opening.append(("figure", figure))
            continue
        if line.strip().startswith("<figure"):
            text = flush_para()
            if text and current is not None:
                current["paragraphs"].append(text)
            elif text:
                opening.append(("p", text))
            in_figure = True
            figure_buf = [line]
            if "</figure>" in line:
                in_figure = False
            continue
        if line.startswith("# "):
            continue
        if line.startswith("## "):
            text = flush_para()
            heading = line[3:].strip()
            if mode == "faq":
                if pending_faq_q:
                    faqs.append({"q": pending_faq_q, "a": " ".join(faq_paras).strip()})
                    pending_faq_q = None
                    faq_paras = []
                if heading == "Sources" or not heading.lower().startswith("question"):
                    mode = "body"
                else:
                    continue
            if heading == "Questions people ask":
                if text and current is not None:
                    current["paragraphs"].append(text)
                flush_section()
                mode = "faq"
                continue
            if not started:
                if text:
                    opening.append(("p", text))
                started = True
            elif text and current is not None:
                current["paragraphs"].append(text)
            flush_table()
            if bullets and current is not None:
                current["bullets"] = bullets
                bullets = []
            ensure_section(heading)
            continue
        if line.startswith("### ") and mode == "faq":
            text = flush_para()
            if text:
                faq_paras.append(text)
            if pending_faq_q:
                faqs.append({"q": pending_faq_q, "a": " ".join(faq_paras).strip()})
            pending_faq_q = line[4:].strip()
            faq_paras = []
            continue
        if not line.strip():
            text = flush_para()
            if mode == "faq":
                if text:
                    faq_paras.append(text)
                continue
            if table:
                flush_table()
            if text and current is not None:
                current["paragraphs"].append(text)
            elif text:
                opening.append(("p", text))
            continue
        if line.startswith("|"):
            text = flush_para()
            if text and current is not None:
                current["paragraphs"].append(text)
            table.append(line)
            continue
        if re.match(r"^(\d+\.|-)\s+", line):
            text = flush_para()
            if text and current is not None:
                current["paragraphs"].append(text)
            elif text:
                opening.append(("p", text))
            bullets.append(re.sub(r"^(\d+\.|-)\s+", "", line).strip())
            continue
        para.append(line)

    text = flush_para()
    if mode == "faq" and pending_faq_q:
        if text:
            faq_paras.append(text)
        faqs.append({"q": pending_faq_q, "a": " ".join(faq_paras).strip()})
    elif text and current is not None:
        current["paragraphs"].append(text)
    flush_section()

    if not hero:
        raise SystemExit(f"no hero figure in {slug}")
    lede_parts = [item[1] for item in opening if item[0] == "p"]
    lede = lede_parts[0]
    if len(lede_parts) > 1:
        sections.insert(0, {"heading": "The short answer", "paragraphs": lede_parts[1:]})

    page = {
        "path": f"/blog/{slug}",
        "kind": "article",
        "published": "2026-10-09",
        "title": title,
        "description": description,
        "eyebrow": EYEBROW[slug],
        "h1": h1,
        "lede": lede,
        "image": {
            "src": hero["src"],
            "alt": hero["alt"],
            "caption": hero["caption"],
            "width": hero["width"],
            "height": hero["height"],
        },
        "sections": sections,
        "faqs": faqs,
        "related": [{"to": to, "label": label} for to, label in RELATED[slug]],
    }
    return page


def main():
    IMG_DST.mkdir(parents=True, exist_ok=True)
    for image in IMG_SRC.glob("*.webp"):
        shutil.copy(image, IMG_DST / image.name)
    pages = [parse_article(path) for path in sorted(SRC.glob("*.md"))]
    payload = json.dumps(pages, indent=2, ensure_ascii=False)
    OUT.write_text(
        'import type { ContentPage } from "@/lib/content/types";\n\n'
        f"export const batchArticles: ContentPage[] = {payload};\n"
    )
    print("pages", [page["path"] for page in pages])
    for page in pages:
        print(page["path"], "sections", len(page["sections"]), "faqs", len(page["faqs"]), "hero", page["image"]["src"])


if __name__ == "__main__":
    main()
