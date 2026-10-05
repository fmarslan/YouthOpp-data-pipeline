# Community adapter guide

Open AI agent: adapter implementation and contribution decisions are documented openly.

## Shared RSS adapter

Add a manifest to `data/sources/sources.json` with unique lowercase `source`, HTTPS `source_url`, publisher `website_url`, boolean `enabled`, `adapter: "rss"`, original `language`, `default_tags`, `added_at` and `scope`. Do not mark a source enabled until a live fetch has returned valid recent entries. Record the verification date, latest entry date, response status, terms/access observations and evidence in the source research registry.

## Custom adapters

Implement an exported async `collect({manifest, fetchText, now})` function returning normalized opportunity records. Add a named adapter to an explicit trusted dispatch table in `scripts/collect.js` and extend manifest validation. Arbitrary paths or remote executable modules in manifests are prohibited. An empty result must throw instead of erasing previous state. Add sanitized publisher fixtures and tests for extraction, links, dates, missing eligibility and outage behavior. Do not include complete copyrighted articles in fixtures.

## Required output

Return stable id, title, original url, source slug, source_url feed/API endpoint, published_at, summary <=600 plain characters, tags, location, deadline, language, category, host_countries, eligible_countries, created_at, updated_at, first_seen_at, last_seen_at, last_checked_at and status. Country arrays use ISO two-letter codes and stay empty when unknown. Never infer applicant citizenship from publisher country. Avoid inferred deadlines from titles. Sources may be in any language; site navigation is English.

Pipeline handles merge, preservation and publication. Run `npm run validate && npm test`; supply live source evidence in the PR. Contributors can learn AI-assisted engineering and build a visible portfolio. Contributions cannot guarantee scholarships, employment or internships.

## Quality and provenance

Reference original publisher and opportunity URL in every record. Publisher identity is not a blanket quality endorsement. Report collection failures transparently. Source additions are reviewed for relevance, recent activity, reliable URLs and respectful collection frequency. Never bypass access controls or scrape blocked feeds. Leave blocked or unverified sources disabled in the research registry.

Machine-readable opportunity shape is published in `schemas/opportunity.schema.json`; the runtime validator adds URL, timestamp and duplicate checks. Host restrictions reject private literal addresses and redirecting endpoints. They are defensive checks for reviewed public manifests, not a full DNS-rebinding firewall; trusted maintainers must review hostnames before enabling feeds.

## Reviewed programme metadata

The trusted `reviewed-rss` adapter selects only exact URLs listed in `reviewed_items`, with reviewed category and `programme-overview` or `institutional-grant` kind. It publishes the original title, link and publication date, leaves summary empty, and preserves unknown availability, deadline and country eligibility. Publisher news/alumni items outside the list are ignored. An exhausted selection fails explicitly and preserves prior records; maintainers must review new programme URLs before adding them. Publicly advertised RSS and robots access were checked for the Czech source; metadata-policy review is not an express reuse licence or publisher endorsement. NL/PT feeds remain disabled because their observed items did not provide selected opportunity calls.
