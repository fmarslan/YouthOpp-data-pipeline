# Spain source activity and access review

Reviewed 5 October 2026 by Open AI agent: Researcher. This renewal covers the three existing Spain publishers in the research register of [YouthOpp/data-pipeline](https://github.com/YouthOpp/data-pipeline). It adds no publisher, adapter or runtime opportunity. The register contains three independent Spain publishers with recent editorial activity, including closed annual calls. This advances the requested 3–5 quality active-source research target, but Spain still has no operational policy-reviewed adapter. Current open calls are measured separately below.

## Findings and access decisions

| Publisher | Dated primary evidence | Application finding | Access and reuse decision |
|---|---|---|---|
| INJUVE | Exact SEPI notice indexed with 30 September 2026 publication and 30 September–7 October 2026 window | Live application availability remains unclassified: exact detail GET returned HTTP 502. A failed fetch does not show the publisher is inactive. | Detail, legal and robots direct requests returned 502. Indexed legal language permits reproduction with express origin credit, but this is not a successful current access-policy check. Remains pending and unconnected. |
| Fundación Carolina | Primary annual 2026/27 call; homepage cohort news dated 30 September 2026 | Closed: postgraduate/institutional deadline 2 March 2026; ECV 18 February; doctoral/postdoctoral/mobility 9 April. | Public robots GET 200 allows general public paths, disallows wp-admin and MJ12bot. Actual legal notice requires rights-holder authorization for reuse except legally permitted cases. Permission required; no adapter. |
| la Caixa Foundation | Primary scholarship landing explicitly labels Francesc Moragas research grants open; BOE notice published 2 October 2026 corroborates date | Open on the review date, until 7 October 2026 at 14:00 Spanish peninsula time per landing. The BOE notice specifies the date without a time. | Direct landing and robots GET 200; wildcard robots has empty Disallow. Actual footer-linked legal notice requires prior express authorization for reproduction/exploitation and non-homepage hyperlinks. Permission required; no adapter. Robots permission is not reuse permission. |

These are distinct publishers for editorial activity research. A public annual call can remain useful evidence after closing. Only la Caixa adds a reviewed currently open national publisher to this snapshot. INJUVE's indexed dates are not promoted to a confirmed current open call, and the third-party SEPI programme is not counted as another publisher merely because INJUVE lists it.

## INJUVE exact scope and unresolved collection gate

Evidence references: [Spanish notice](https://www.injuve.es/convocatorias/becas-empleo/107-becas-sepi-de-iniciacion-en-la-empresa-2026), [indexed primary language variant](https://www.injuve.es/en/convocatorias/becas-empleo/107-becas-sepi-de-iniciacion-en-la-empresa-2026), [listing](https://www.injuve.es/convocatorias/becas), [legal notice](https://www.injuve.es/aviso-legal), and [robots](https://www.injuve.es/robots.txt).

The indexed original title is “107 Becas SEPI de Iniciación en la Empresa 2026”. Index retrieval identifies Fundación SEPI as the convening organization. Successful exact live HTML, canonical identity, current application wording and applicable robots/legal responses are still required. No canonical identity, H1 extraction contract, eligibility, host country or timestamp has been accepted from these failed direct fetches.

Indexed INJUVE terms identify the portal owner, permit reproduction with express origin credit, and say that within Convocatorias the institute is responsible only for its own calls. They do not extend reuse rights to a linked SEPI PDF, external application form, third-party programme prose or media. Future assessment must stay within separately reviewed portal-owned title/link metadata and express INJUVE credit; original SEPI conditions remain a separate review. Do not bypass the 502 or treat cached permission wording as live robots acceptance.

## Fundación Carolina: closed annual call and narrower publications licence

Evidence: [2026/27 call](https://www.fundacioncarolina.es/convocatoria-de-becas-2026-2027/), [homepage activity](https://www.fundacioncarolina.es/), [actual legal notice](https://www.fundacioncarolina.es/aviso-legal/) and [robots](https://www.fundacioncarolina.es/robots.txt).

The primary call states three separate application windows and the ECV exception listed above. There is no inferred later round. Eligibility varies by programme; the existence of a Spanish publisher is not proof of eligible citizenship or destination.

The legal notice reserves website intellectual property and prohibits reproduction, extraction and reuse except legally permitted cases or written rights-holder authorization. It also requests consent for hyperlinks to the site. The footer's CC BY-NC-ND 4.0 statement explicitly describes publications; it does not supply a blanket licence for the general website or scholarship listings. These are recorded publisher conditions, not a legal enforceability judgment. Automation remains disabled pending the necessary specific permission or separately documented applicable authority.

## la Caixa: genuine research opportunity with specific eligibility

Evidence references: [scholarship landing](https://fundacionlacaixa.org/es/becas), [programme detail](https://fundacionlacaixa.org/es/becas-investigacion-francesc-moragas), [actual footer-linked legal notice](https://legal.fundacionlacaixa.org/n/actual/legal-notice_es.html), and [robots](https://fundacionlacaixa.org/robots.txt). These links identify research evidence; they are not a claim that the publisher has authorized ingestion or third-party deep linking.

The Francesc Moragas grants fund a master's final project, doctoral research or postdoctoral research in humanities/social sciences concerning Francesc Moragas's legacy. The detail explicitly permits applicants of any nationality, but the project must be at a university or research organization in Spain. Master's applicants must be ready for the final project; doctoral applicants must be ready to begin or already conducting a doctorate; postdoctoral applicants must hold a doctorate. There is no generic youth age limit stated. Thus this is a real, stage-specific research call, not universal youth eligibility. No application account was accessed.

The landing supplies the 14:00 Spanish peninsula closing time; the date is independently corroborated by the official notice below. No fabricated UTC timestamp or opening date is stored. This is research application-state evidence only; no runtime catalog record is emitted.

The actual legal notice, last updated 10 February 2026, reserves intellectual property, requires prior express authorization for reproduction/exploitation, limits copying to personal use, and prohibits non-homepage hyperlinks unless expressly authorized. Public robots allows fetching, but does not waive these conditions. Keep collection disabled pending the required specific authorization.

## BOE corroboration and limited reuse scope

[BOE-B-2026-31913](https://www.boe.es/diario_boe/txt.php?id=BOE-B-2026-31913), published 2 October 2026 in issue 244, section V-C (private announcements), identifies the Francesc Moragas call and admission of applications until 7 October 2026. It points to la Caixa's programme detail. Direct notice GET returned 200. This corroborates an existing la Caixa publisher's call; BOE is not added as another independent opportunity publisher.

The [actual BOE reuse conditions](https://www.boe.es/informacion/aviso_legal/index.php), effective 28 June 2024, generally permit reuse of covered documents, including extraction, with source attribution, a link to https://www.boe.es, retained update/reuse metadata, and clear identification of adaptations. They exclude third-party intellectual property, marks and presentation elements, and prohibit implied endorsement and framing. Attribution for the notice facts summarized here: Basado en datos de la [Agencia Estatal Boletín Oficial del Estado](https://www.boe.es). This research summary adapts notice facts; it is not an official BOE publication. Notice publication date: 2 October 2026. This private la Caixa announcement is not treated as blanket clearance for third-party programme prose, logos, PDFs or the linked site.

Direct [BOE robots](https://www.boe.es/robots.txt) GET returned 200. Its wildcard group contains no matching Disallow for the exact Spanish notice path. XML notice endpoints and some language-query variants are disallowed; neither is used. No adapter or XML access is activated by this review. The next BOE assessment, if needed, must separately establish reusable source-owned factual metadata, explicit credit/link/update preservation and opportunity relevance.

## Resulting registry and next action

Only existing rows es-injuve, es-fundaci-n-carolina and es-la-caixa-foundation change. Registry total remains 110; rights statuses become 100 pending, six scoped metadata reviews, three permission-required and one reviewed manual-only. Runtime remains nine integrations. Current open evidence becomes 22 national publishers across 20 target countries, plus one GLOBAL publisher; none of the target countries has three confirmed current independent publishers. Editorial activity, current application status and operational adapter coverage remain separate.

Next feasible work is a successful live INJUVE detail/legal/robots check before a narrow title/link adapter, or a separately permission-reviewed source-owned current call. The 502 gate is transient; it is not a completion blocker for other countries. Carolina and la Caixa permission requirements remain explicit. Do not activate from this document alone.
