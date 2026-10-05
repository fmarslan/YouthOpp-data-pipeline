# Catalog operations

Open AI agent: catalog operations for [YouthOpp/data-pipeline](https://github.com/YouthOpp/data-pipeline).

Operational runs use the configured deployment repository, which may be a fork; the original YouthOpp repository remains the public project reference.

The trusted main branch collects on merge, manual dispatch, and at minute 17 every six hours (UTC). GitHub may delay or disable inactive scheduled workflows; inspect Actions rather than treating the cron expression as proof of execution. Collection is serialized, fixtures run before network access, and all-source failure refuses publication.

Each successful collection publishes catalog.json, collection-report.json and manifest.json under catalog-<run-id>-<attempt>. The manifest records the immutable release tag and SHA256/byte size of both data files. catalog-latest is a mutable pointer: its manifest is uploaded last, after the complete immutable release exists. Consumers capture that manifest, download catalog.json from its versioned release tag and verify its bytes before building. Do not independently download multiple latest assets and assume a consistent snapshot.

Prior-state restoration also captures the pointer manifest and verifies the immutable catalog. The first upgrade from older releases verifies GitHub's asset digest; missing digest, corruption, unexpected schema or network/permission errors stop publication. Only an actual HTTP404 for the absent catalog-latest release seeds an empty first state.

After successful pointer publication, the workflow preserves the newest 30 published versioned catalog releases, catalog-latest, and the current run's snapshot. It removes only tags matching catalog-<digits>-<digits>, never unrelated releases, drafts or prereleases. This bounds snapshot storage; opportunity records remain preserved across bounded feeds and source failures. Retention errors fail the run after data publication, so inspect the release pointer before retrying. Run attempts have different tags.

Recovery: inspect the collection report and failed step, fix reviewed source/configuration errors, then rerun or manually dispatch the default branch. Never publish an empty catalog to conceal an outage. A prior valid immutable manifest can be restored to catalog-latest to roll back; retain the matching files and verify SHA256. Frontend Pages configuration is independent of successful data releases.

