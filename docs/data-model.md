# Categorical data model

YouthOpp is a federated directory: records point to publisher URLs; the catalog is an index, not an assertion of applicant eligibility or open applications.

## One taxonomy, distinct dimensions

`scripts/taxonomy.js` is authoritative and exports the same contract as `catalog.taxonomy`. Category identifiers and their order match the website: scholarships, internships, volunteering, fellowships, training, competitions, grants, jobs, other. Record `categories` contains unique memberships; the first is the backwards-compatible `category`. RSS rules inspect publisher tags only, in that fixed order. Multiple matching tags create multiple memberships; unmatched tags become `other` with unknown classification. Source capabilities never classify all its records automatically.

Record `kind` is separate: opportunity, programme-overview, institutional-grant, unknown. Generic feeds remain unknown; only explicit reviewed evidence establishes the other kinds. The reviewed adapter publishes programme metadata, not a promise of an active call. Language and original titles stay unchanged.

`classification` records method, classified/unknown status and evidence. Migrated v1 records preserve primary category under legacy-primary-category evidence. Existing record IDs, first-seen times, source health and last successful observations survive partial source failures. A malformed retained record aborts publication rather than silently corrupting the index.

## Source registry and joins

`catalog.source_registry` contains every research candidate plus collection sources missing from the research list. Manifest `research_source_id` emits explicit `adapter_source_id` joins for differently named research IDs to runtime `source` IDs; no fuzzy publisher-name matching occurs. The current release contains 111 registry rows: 110 researched sources and one additional runtime aggregator without a research entry. The registry preserves retrieval method, acquisition state, rights checks and activity evidence. Membership never enables a source or changes its verified readiness. Active health remains in `catalog.sources`.

Source `content_types` map explicitly to the same category vocabulary. Research, mobility, guidance and youth are cross-cutting topics, retained in `unmapped_content_types`, not automatically mapped to training or fellowships. Unsupported new types fail validation until reviewed. Sources without mapped opportunity types have `other` and unknown classification. Publisher type is aggregator, public-institution, nonprofit, university, employer or unknown; unreviewed institutional classifications remain unknown.

`publisher_country` describes the publisher, while record `host_countries` and `eligible_countries` retain their separate meanings. Unknown geography is null/empty; no nationality or host-country eligibility is inferred. International publishers may have unknown publisher country. Research country metadata is not copied into eligibility.

## Storage and release contract

Canonical records exist once in `catalog.opportunities`. `catalog.indexes.categories`, `record_kinds` and `sources` contain record IDs only. `source_categories` and `publisher_countries` contain registry IDs only. Empty category/kind lists remain present. Disabled adapters retain registry documentation but have no collected record index. Membership indexes are validated for exact completeness, stable ordering, uniqueness, source joins and absence of dangling references.

The catalog keeps `schema_version: 1` for existing website readers and adds `model_version: 2`. The new taxonomy, registry and indexes are embedded inside `catalog.json`, covered by the existing SHA256 manifest and immutable release tag. No duplicate dataset files or unverified auxiliary release assets are introduced. `schemas/opportunity.schema.json` describes additive record fields; runtime validation cross-checks its enum against the authoritative contract.

## Adding a source or data type

Add research metadata and explicit category capabilities without enabling collection. Review access/rights and build a trusted adapter separately. If connected to an existing research entry, supply its explicit adapter source ID. Adapters must emit supported category memberships and record kinds with evidence; unsupported values fail. Extend taxonomy and schema together only when a reviewed need introduces a genuinely new directory dimension.
