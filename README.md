# YouthOpp data pipeline

Open AI agent: built and maintained through transparent AI-assisted development.

A community-contributed source adapter pipeline for YouthOpp, a nonprofit-minded, open-source opportunity index. Students and young graduates can discover original opportunities without browsing many separate publishers. Original publishers remain the authority for deadlines, eligibility and applications.

## Run

Requires Node.js 22 or later. `npm ci --ignore-scripts`, `npm run validate`, `npm test`, then `npm run pipeline`. The build produces `dist/catalog.json` and `dist/collection-report.json`. These outputs are never automatically committed into Git history.

To preserve prior records locally, set `PREVIOUS_CATALOG=/path/to/catalog.json`. Scheduled Actions restore the last successful public release before collecting new feeds. A failed or empty source preserves its last good records and their verification timestamps. Total source failure blocks publication. Partial failures are visible in the report and source metadata. A missing record in a bounded RSS feed is not treated as closed; only explicit deadlines produce open/expired status. Otherwise availability is unknown. Retained records may be old: the website must display dates and unknown status, not promise all opportunities remain available.

## Public data contract

`catalog.json` contains `schema_version: 1`, `generated_at`, `opportunities` and `sources`. Each opportunity keeps original article `url`, feed `source_url`, publisher `source` slug, original-language short plain-text summary, publication and collection dates. Category is derived only from publisher-provided tags. Location, deadline, countries and eligibility remain unknown until explicit evidence is available. Source entries include publisher `website_url`, last attempt, last successful check and errors.

## Publication

The trusted `main` push seeds a release after the fork PR is merged; the default-branch schedule runs every six hours, and manual dispatch can refresh it. Work is delivered and merged exclusively in the fmarslan forks; no upstream PR is required. A versioned release (`catalog-<run-id>-<attempt>`) stores an auditable data snapshot; `catalog-latest` serves the most recent successful catalog. Frontend builds download `https://github.com/fmarslan/YouthOpp-data-pipeline/releases/download/catalog-latest/catalog.json` without authentication. Each build should capture one snapshot and use it consistently. Releases accumulate; maintainers can periodically remove old versioned releases while preserving latest state. No paid backend, API key or database is required.

PR checks use read-only permissions, no secrets, fixture tests, and no remote collection. Collection and publishing execute only trusted default-branch code. Public RSS is capped at 5 MB and 25 seconds, HTTPS-only without redirects. Add a canonical feed URL if the publisher redirects. GitHub limits still apply.

## Sources and contribution

See [adapter contribution guide](docs/adapters.md). Research registry is separate from the enabled source list: only feeds with successful live checks are activated. Current active sources: Opportunities for Youth, Opportunity Desk and Scholarships Corner. Feed access does not imply ownership of publisher content. YouthOpp publishes short excerpts and links; source inclusion can be paused or removed via issue/PR. No institution endorsement or charitable registration is implied.
