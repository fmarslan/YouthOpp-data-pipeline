# OeAD exact notice access review — 5 October 2026

Canonical project: [YouthOpp/data-pipeline](https://github.com/YouthOpp/data-pipeline).

The existing OeAD research entry now has a bounded exact-page metadata adapter for the [Ernst Mach worldwide deadline notice](https://studyinaustria.at/en/news/article/2026/08/ernst-mach-stipendium-weltweit-bewerbung-bis-1-dezember-2026). This implementation requires separate production-release verification and visible copyright-credit acceptance before publication. It does not establish three operational publishers in Austria or currently open applications.

## Identity and access

The OeAD-hosted news URL declares a different canonical host, Study in Austria. The canonical notice returned HTTP 200 without redirection and declares the same exact canonical URL. The original H1 gives the meaningful scholarship notice title; Open Graph title is generic `Article`, so it is never indexed. One exact reviewed H1 and one exact canonical URL are required. Missing, duplicate or changed headings and mismatched canonicals fail collection and use existing last-good retention.

The [Study in Austria robots file](https://studyinaustria.at/robots.txt) permits this public article path for the project User-Agent; internal TYPO3 paths and several named crawlers are restricted. The footer links the [OeAD imprint](https://oead.at/en/imprint-en), which permits textual excerpts with source acknowledgment © OeAD. Multimedia reuse requires separate permission; framing and direct access to OeAD databases are outside this scope. The adapter makes one exact-page request per six-hour collection. It does not request grants.at database endpoints, application portals, images or source prose.

## Data and credit contract

Publish only the original reviewed title and canonical URL as scholarship programme information, with an empty summary, unknown application state and empty destination/eligibility arrays. The page displays the calendar publication date 26 August 2026, without a publication timestamp or timezone. Preserve that calendar date in research evidence; catalogue `published_at` remains null. The declared 1 December 2026 deadline remains in the original title and research evidence; catalogue `deadline` stays null because this deadline notice does not verify that applications are presently open.

Both the runtime source manifest and its research source entry carry `attribution: "© OeAD"`. The consuming website must visibly render that credit on the source directory, each associated record detail and every associated catalogue, home-page and category listing row before publication. A source name alone does not replace this credit. Publisher acknowledgment does not imply endorsement. Original publisher content remains authoritative.

## Verification limits

Local fixture tests cover exact identity, missing/duplicate/changed headings, script markup, generic Open Graph titles, date uncertainty, category membership and copyright-credit propagation. A direct live parser check returned the original title and canonical URL with unknown application fields. Local checks do not establish a scheduled producer release or hosted consumer behavior. The research entry remains `implementation_pending_production` until separate measured evidence establishes collection/publication and required credit rendering.
