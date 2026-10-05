# YouthOpp data pipeline

Open AI agent: built and maintained through transparent AI-assisted development.

Canonical repositories: [YouthOpp/data-pipeline](https://github.com/YouthOpp/data-pipeline), [YouthOpp/youthopp.github.io](https://github.com/YouthOpp/youthopp.github.io) and [YouthOpp/.github](https://github.com/YouthOpp/.github).

A community-contributed source adapter pipeline for YouthOpp, a nonprofit-minded, open-source opportunity index. Students and young graduates can discover original opportunities without browsing many separate publishers. Original publishers remain the authority for deadlines, eligibility and applications.

## Run

Requires Node.js 22 or later. `npm ci --ignore-scripts`, `npm run validate`, `npm test`, then `npm run pipeline`. The build produces `dist/catalog.json` and `dist/collection-report.json`; `npm run contributors` produces `dist/contributors.json`. These outputs are never automatically committed into Git history.

To preserve prior records locally, set `PREVIOUS_CATALOG=/path/to/catalog.json`. Scheduled Actions restore the last successful public release before collecting new feeds. A failed or empty source preserves its last good records and their verification timestamps. Total source failure blocks publication. Partial failures are visible in the report and source metadata. A missing record in a bounded RSS feed is not treated as closed; only explicit deadlines produce open/expired status. Otherwise availability is unknown. Retained records may be old: the website must display dates and unknown status, not promise all opportunities remain available.

## Public data contract

`catalog.json` contains `schema_version: 1`, `generated_at`, `opportunities` and `sources`. Each opportunity keeps original article `url`, feed `source_url`, publisher `source` slug, original-language short plain-text summary, publication and collection dates. Category is derived from publisher-provided tags or explicit reviewed programme selection. Location, deadline, countries and eligibility remain unknown until explicit evidence is available. Source entries include publisher `website_url`, last attempt, last successful check and errors.

## Publication

The trusted `main` push seeds a release after the fork PR is merged; the default-branch schedule runs every six hours, and manual dispatch can refresh it. Collection and release publication use the configured runtime deployment repositories; this does not change the canonical YouthOpp project identity. A versioned release (`catalog-<run-id>-<attempt>`) stores an auditable data snapshot; `catalog-latest` serves the most recent successful catalog. Frontend builds capture the `catalog-latest` manifest, download its immutable versioned catalog and verify SHA256/byte size, including contributor data. The pipeline restores verified state and retains the newest 30 published versioned snapshots, preserving the current release and latest pointer. See [Catalog operations](docs/OPERATIONS.md) for publication ordering, recovery and retention. No paid backend, API key or database is required.

PR checks use read-only permissions, no secrets, fixture tests, and no remote collection. Collection and publishing execute only trusted default-branch code. Public RSS is capped at 5 MB and 25 seconds, HTTPS-only without redirects. Add a canonical feed URL if the publisher redirects. GitHub limits still apply.

## Sources and contribution

See [adapter contribution guide](docs/adapters.md). Research registry is separate from the enabled source list: only reviewed sources with successful live collection checks are activated. Current enabled sources: Opportunities for Youth, Opportunity Desk, Scholarships Corner, exactly reviewed Fulbright Czech programme/grant items, the NASA internship programme overview, the exact Portugal Fulbright master's programme overview, the exact Netherlands Fulbright doctoral programme overview, the exact Luxembourg FNR AFdoc doctoral programme overview, and the exact OeAD Ernst Mach scholarship deadline notice. Czech, NASA, Portugal, Netherlands, FNR and OeAD adapters publish only reviewed factual metadata, with no article prose or confirmed availability/eligibility. Portugal indexes the original title/link and leaves original publication null when absent; modification is never publication. NASA, Portugal, Netherlands, FNR and OeAD each use one exact-page HTML request; publisher country does not imply applicant eligibility or destination. Feed access does not imply ownership of publisher content. YouthOpp publishes short excerpts and links; source inclusion can be paused or removed via issue/PR. No institution endorsement or charitable registration is implied.

See [scoped country evidence renewal](docs/country-renewal-2026-10-05.md) for dated research and application/access limits.

The OeAD exact notice requires visible `© OeAD` copyright credit from the source `attribution` field on the source directory, associated record detail and every associated catalogue, home-page and category listing row. Its date-only publication and declared deadline are research/title evidence; catalogue timestamps and application state stay unknown. See [OeAD access review](docs/oead-access-review-2026-10-05.md).

## Categorical model

See [Data model](docs/data-model.md) for the shared directory taxonomy, record/source classification, geography, migration and integrity-covered ID indexes.

## Repository boundary

This repository owns adapters, collection scripts and Actions, source research/registry, canonical opportunity data and contributor history. The website only downloads the integrity-verified release and presents it. Tracked `data/sources/` contains maintained source configuration and research; generated datasets live in releases rather than dated raw/normalized/latest Git trees. Only the active ESM collection path remains. The removed legacy datasets were not used by either active workflow or the release consumer; they are not migrated into the canonical index because their full article content and missing classification/verification fields would invent unsupported records. Prior Git history and existing release snapshots remain available. Sanitized extraction fixtures and active validation are retained.

`contributors.json` records one point per attributable non-merge authored commit, deduplicated across public repository histories. Bots and explicitly AI-authored commits are excluded; identity gaps and collection errors remain visible. The same immutable catalog manifest covers this auxiliary dataset.
