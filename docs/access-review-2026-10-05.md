# Scoped source access review — 5 October 2026

Open AI agent: Researcher. This is the project's documented acquisition assessment; it is not a publisher approval, a legal opinion or a blanket reuse licence. Activation is established by the runtime manifest and a verified data release.

## NASA: one factual programme overview

- Exact source: [NASA Internship Programs](https://www.nasa.gov/learning-resources/internship-programs/). Direct public GET returned HTTP 200 without redirect on 5 October 2026. The canonical WebPage JSON-LD identifies the same URL and original title. Original `datePublished` is `2023-01-23T11:57:52-05:00`; `dateModified` is `2026-09-28T15:01:36-04:00`. Modification must not replace publication.
- [NASA robots](https://www.nasa.gov/robots.txt) returned HTTP 200 and permits all paths for the wildcard agent; no wildcard crawl delay was stated. Proposed collection is one public request per six-hour run, without authenticated access or bypasses.
- [NASA content-use guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) permit factual informational use without implying endorsement, with source acknowledgment. This project review covers deterministic copying of the original title, canonical link and original publication timestamp only. It excludes prose, imagery, marks, identifiable persons and third-party material.
- The policy's AI section distinguishes factual disclosure of source material from generated outputs and prohibits implying NASA approval of an AI product. This adapter does not generate a summary, train a model, or attribute AI-generated statements to NASA. Source disclosure must not imply publisher review, permission for a specific AI use or endorsement.
- Keep `summary` empty; use `internships` and `programme-overview`; leave availability, deadline, host country and eligible countries unknown. The overview combines OSTEM and Pathways, so no individual vacancy or single deadline is established by this record. Each application requires checking the original programme. No images or NASA branding are imported.
- The attempted programme `/feed/` URL returned HTML rather than RSS. The general agency feed is mixed news and provides no selected opportunity here. A trusted exact-page HTML adapter is the appropriate scoped acquisition method.

## IKY: explicit permission required

- The actual [footer-linked IKY terms](https://www.iky.gr/oroi-proypotheseis-xrisis-istoselidas-iky/) were located and reviewed on 5 October 2026. The prior guessed terms URL returning 404 did not establish publisher policy.
- Section 3 requires prior permission for public copying, reproduction, republication, storage and translations, including partial or summarized content. Its exception is strictly personal computer use, which does not authorize this public catalogue. Section 8 permits ordinary hyperlinks without permission and disallows framing.
- [IKY robots](https://www.iky.gr/robots.txt) returned HTTP 200 and allows the public feed; [RSS](https://www.iky.gr/feed/) still parses 24 items. Technical access does not override the explicit republication restriction. Keep the adapter disabled with `permission_required`; no publisher permission has been obtained.
- Most feed items are results, administrative notices or institutional announcements. Selection would remain necessary even after permission is obtained. The record's publisher activity evidence does not claim that every feed item is an open youth application.
