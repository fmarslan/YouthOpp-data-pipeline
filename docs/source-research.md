# Opportunity source research

Research date: 4 October 2026. Prepared by AI Agent — Researcher.

## What this register means

This is a transparent discovery register, not a claim that every source has a working adapter or open application. USA and all EU27 countries are represented. Source country identifies the publisher, not applicant eligibility or opportunity destination. Original languages are retained.

## Acquisition and quality policy

1. Prefer an official RSS/Atom feed or documented public API. A tested feed means an HTTP response was parsed into real items.
2. Otherwise inspect public HTML and publisher terms/robots; build a fixture-based adapter only after determining reliable list/detail selectors. Do not bypass blocks, logins or CAPTCHAs.
3. Publish concise factual excerpts with canonical source attribution; never copy whole articles. Source terms remain authoritative.
4. Never infer age, countries, funding or deadline when absent. Unknown dates are not "open".
5. Archive known expired calls; retain last good data on fetch failures and expose last successful check.
6. Distinguish publisher country, host country and eligible countries. Annual schemes and university guidance are not continuously refreshed catalogues.

## Tested feed shortlist

| Publisher | Feed | Evidence | Caveat |
|---|---|---|---|
| IKY | [https://www.iky.gr/feed/](https://www.iky.gr/feed/) | GET 200, valid RSS, 24 items; newest 2026-10-01. Mixed institutional notices need opportunity filtering. | Review publisher terms and robots before automated ingestion. |
| Opportunities for Youth | [https://opportunitiesforyouth.org/feed/](https://opportunitiesforyouth.org/feed/) | Valid RSS with 10 items; newest publication 2026-10-04. | Publisher terms and robots review required before enabling. |
| Opportunity Desk | [https://opportunitydesk.org/feed/](https://opportunitydesk.org/feed/) | Valid RSS with 10 items; newest publication 2026-10-03. | Publisher terms and robots review required before enabling. |
| Scholarships Corner | [https://scholarshipscorner.website/feed/](https://scholarshipscorner.website/feed/) | Valid RSS with 10 items; newest publication 2026-10-04. | Publisher terms and robots review required before enabling. |

Scambieuropei and ONEK feed requests returned HTTP 403 in this environment. They remain review candidates; no workaround was attempted.

## Country register

### Austria (AT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [grants.at](https://grants.at/en) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [OeAD](https://oead.at/en/study-research-teaching/overview-grants-and-scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Official OeAD 2027/28 scholarship announcement published 2026-09; annual call cycle. Publisher overlaps another entry. |
| [University of Vienna](https://international.univie.ac.at/en/) | mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Belgium (BE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Flanders](https://www.studyinflanders.be/scholarships/master-mind-scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [WBI](https://www.wbi.be/en/bourses) | scholarship, internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [ARES](https://www.ares-ac.be/en/cooperation-au-developpement/bourses) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. HTTP check: The read operation timed out. |

### Bulgaria (BG)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Fulbright Bulgaria](https://www.fulbright.bg/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [INSAIT](https://insait.ai/surf/) | research, internship | candidate; manual_review_then_html_adapter; not_connected | Primary SURF page describes Summer Undergraduate Research Fellowship 2026; recurring annual research programme, now past summer. HTTP check: HTTP Error 403: Forbidden. |
| [FEBA Alumni](https://www.febalumni.org/en/) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. HTTP check: HTTP Error 402: Payment Required. |

### Cyprus (CY)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Cyprus State Scholarships Foundation](https://www.gov.cy/mof-cssf/) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. HTTP check: HTTP Error 403: Forbidden. |
| [ONEK](https://youthfunds.onek.org.cy/en/) | youth, grant | page_reachable; manual_review_then_html_adapter; not_connected | Primary site lists Youth Initiatives 2027 call dated 2026-08-11 and 2026 programme calls. Feed request 403. |
| [Cyprus Diaspora Scholarships](https://www.gov.cy/mfa/en/service-for-overseas-cypriots-and-repatriated-cypriots/) | scholarship, internship | candidate; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. HTTP check: HTTP Error 403: Forbidden. |

### Czechia (CZ)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Czechia](https://studyin.gov.cz/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [DZS](https://www.dzs.cz/en) | mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Charles University](https://cuni.cz/UKEN-1617.html) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary university page lists scholarships and links to faculty programmes; precise active calls require review. |

### Germany (DE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [DAAD](https://www.daad.de/en/studying-in-germany/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [StipendiumPlus](https://stipendiumplus.de/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Rausvonzuhaus](https://www.rausvonzuhaus.de/) | youth, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Denmark (DK)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Denmark](https://studyindenmark.dk/study-options/scholarships) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [DM and MA Travel Grant](https://dm.dk/students/membership/travel-grant/) | grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [University of Copenhagen](https://studies.ku.dk/masters/tuition-fees--scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Estonia (EE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Harno](https://www.harno.ee/en/scholarships-and-grants/scholarships-studying-and-working-estonia/scholarships-international) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary scholarship page explicitly describes academic year 2026/27; annual rather than daily. |
| [University of Tartu](https://ut.ee/en/scholarships-and-other-stipends) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. HTTP check: HTTP Error 403: Forbidden. |
| [TalTech](https://taltech.ee/en/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Spain (ES)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [INJUVE](https://www.injuve.es/convocatorias/becas?activas=si) | scholarship, youth | candidate; manual_review_then_html_adapter; not_connected | Primary listing has SEPI call dated 2026-09-30 with deadline 2026-10-07; direct fetch returned 502. HTTP check: HTTP Error 502: Bad Gateway. |
| [Fundación Carolina](https://www.fundacioncarolina.es/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [la Caixa Foundation](https://fundacionlacaixa.org/es/becas) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. HTTP check: HTTP Error 403: Forbidden. |

### Finland (FI)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Finland](https://www.studyinfinland.fi/funding-your-studies/bachelors-and-masters-scholarships) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Aalto University](https://www.aalto.fi/en/admission-services/scholarships-and-tuition-fees) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [University of Helsinki](https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/tuition-fees-and-scholarship-programme) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### France (FR)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Campus France](https://www.campusfrance.org/en/bursaries-foreign-students) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [1jeune1solution](https://www.1jeune1solution.gouv.fr/) | internship, job | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Service Civique](https://www.service-civique.gouv.fr/) | volunteering | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |

### International (GLOBAL)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Opportunities for Youth](https://opportunitiesforyouth.org/) | scholarship, internship, youth | rss_tested; rss; not_connected | Valid RSS with 10 items; newest publication 2026-10-04. |
| [Opportunity Desk](https://opportunitydesk.org/) | scholarship, internship, youth | rss_tested; rss; not_connected | Valid RSS with 10 items; newest publication 2026-10-03. |
| [Scholarships Corner](https://scholarshipscorner.website/) | scholarship, internship, youth | rss_tested; rss; not_connected | Valid RSS with 10 items; newest publication 2026-10-04. |

### Greece (GR)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [IKY](https://www.iky.gr/en/) | scholarship | rss_tested; rss; not_connected | GET 200, valid RSS, 24 items; newest 2026-10-01. Mixed institutional notices need opportunity filtering. |
| [Onassis Foundation](https://www.onassis.org/initiatives/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Greece](https://www.fulbright.gr/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Croatia (HR)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [AMPEU](https://en.ampeu.hr/open-calls) | scholarship, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Croatian Ministry](https://mzom.gov.hr/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Study in Croatia](https://www.studyincroatia.hr/) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |

### Hungary (HU)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Stipendium Hungaricum](https://stipendiumhungaricum.hu/apply/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary application announcement describes 2026/27 intake; annual cycle, not evidence currently open. Publisher overlaps another entry. |
| [Tempus Bilateral Scholarships](https://en.tka.hu/bilateral-state-scholarships-information-for-applicants) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Hungarian Diaspora Scholarship](https://diasporascholarship.hu/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |

### Ireland (IE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [gradireland](https://gradireland.com/) | internship, job | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [HEA](https://hea.ie/policy/internationalisation/goi-ies/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Léargas](https://www.leargas.ie/) | youth, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Primary site shows upcoming October-November 2026 events; several audiences are youth workers or institutions. |

### Italy (IT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Scambieuropei](https://www.scambieuropei.info/) | internship, scholarship, youth | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Eurodesk Italia](https://www.eurodesk.it/) | youth, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Study in Italy](https://studyinitaly.esteri.it/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Lithuania (LT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Lithuania](https://studyin.lt/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary 2026 masters and short-study calls published March 2026; annual and country-restricted. |
| [Vilnius University](https://www.vu.lt/en/students/services-for-students/finance) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. |
| [Kaunas University of Technology](https://admissions.ktu.edu/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Luxembourg (LU)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [University of Luxembourg](https://www.uni.lu/life-en/financial-support/scholarships/) | scholarship | candidate; manual_review_then_html_adapter; not_connected | HTTP 202 response lacks a readable scholarship page in this environment; primary search result confirms publisher page, adapter review pending. |
| [Luxembourg MFA Internships](https://mae.gouvernement.lu/en/directions-du-ministere/finances-ressources-humaines/stages.html) | internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Luxembourg Cooperation](https://cooperation.gouvernement.lu/en/s-engager.html) | internship, youth | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Latvia (LV)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [VIAA](https://www.viaa.gov.lv/en/latvian-state-scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary page updated 2026-01-13 and describes 2026/27 scholarships; check window before publishing. |
| [University of Latvia](https://www.lu.lv/en/admission/scholarships-and-student-loans/fees-grants-and-scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Riga Technical University](https://www.rtu.lv/en/studies/scholarships-2) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Primary page describes 2025 state scholarships; overlaps VIAA. Not proof of a separate active funding source. HTTP check: HTTP Error 403: Forbidden. |

### Malta (MT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [MyScholarship](https://myscholarship.gov.mt/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [University of Malta](https://www.um.edu.mt/study/feesfunding/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Malta Student Grants](https://stipendsandgrants.gov.mt/en/) | grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |

### Netherlands (NL)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in NL](https://www.studyinnl.org/finances/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Magnet.me](https://magnet.me/en/internships/netherlands) | internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Leiden University](https://www.universiteitleiden.nl/en/scholarships/sea/leiden-university-excellence-scholarship-lexs) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. |

### Poland (PL)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Eurodesk Polska](https://www.eurodesk.pl/granty) | scholarship, grant, youth | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [NAWA](https://nawa.gov.pl/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [FRSE](https://www.frse.org.pl/) | mobility, grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Portugal (PT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [IPDJ](https://ipdj.gov.pt/candidaturas) | youth, grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [FCT](https://www.fct.pt/en/financiamento/programas-de-financiamento/bolsas/) | research, scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [DGES](https://www.dges.gov.pt/en) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Romania (RO)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Romania](https://studyinromania.gov.ro/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Romania](https://fulbright.ro/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary US student 2027/28 competition has deadline 2026-10-06; source active at review. |
| [ANPCDEFP](https://www.anpcdefp.ro/) | mobility, youth | page_reachable; manual_review_then_html_adapter; not_connected | Primary Erasmus+ and ESF+ programme page updated 2026-09-16; institution-mediated support, not unrestricted individual applications. |

### Sweden (SE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Swedish Institute](https://si.se/en/apply/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Study in Sweden](https://studyinsweden.se/scholarships/) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Lund University](https://www.lunduniversity.lu.se/admissions/bachelors-and-masters-studies/scholarships-and-awards) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Slovenia (SI)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Public Scholarship Fund](https://www.srips-rs.si/en/public-calls) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [CMEPIUS](https://www.cmepius.si/mednarodno-sodelovanje/moznosti-sodelovanja/bilaterale/) | scholarship, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [University of Ljubljana](https://www.uni-lj.si/en/study) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Slovakia (SK)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [SAIA Grants](https://grants.saia.sk/Pages/ProgramZoznam.aspx?s=true) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary database lists NSP student deadline 2026-10-31 16:00; same publisher as scholarships.sk. Publisher overlaps another entry. |
| [National Scholarship Programme](https://www.scholarships.sk/en/main/o-programe) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Study in Slovakia](https://www.studyinslovakia.saia.sk/en/main/scholarships) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |

### United States (US)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [USAJOBS Students](https://www.usajobs.gov/HiringPath/Students) | internship, job | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [NSF REU](https://www.nsf.gov/funding/initiatives/reu/students) | research, internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [CareerOneStop Scholarship Finder](https://www.careeronestop.org/toolkit/training/find-scholarships.aspx) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright US Student](https://us.fulbrightonline.org/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [NASA Internships](https://www.nasa.gov/learning-resources/internship-programs/) | internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

## Gaps and next reviews

The goal of 3–5 independent, active, automatically accessible sources per country is not yet met. All EU27 countries have three research entries, but availability, annual cycles and repeated publishers limit accepted coverage. Austria, Hungary and Slovakia need additional independent publishers. Croatia, Cyprus, Malta and Slovenia include guidance or broad agency pages requiring precise opportunity endpoints. Latvia RTU overlaps the national VIAA programme. Some research support targets postgraduate researchers or institutions rather than students directly.

Next: review terms/robots, replace agency homepages with stable list endpoints, validate recent call dates, add native RSS/HTML adapters, and record licence/permission basis. Do not activate all registry entries automatically.

## Evidence and reproducibility

`source-registry.json` records URL, country, operator, category, discovery date, check date, HTTP result, freshness notes and retrieval status for every entry. `feed-checks.json` records actual feed parsing results. Page checks sampled up to 150 KB with an identified review user-agent and 18-second timeout. Accessibility from the review environment can differ from GitHub Actions. Fixtures and automated adapter tests are required before enabling a source.

## Feed access review — 4 October 2026

| Publisher | Robots/access result | Content terms | Decision |
|---|---|---|---|
| Opportunities for Youth | RSS parsed; robots request HTTP 403 | Guessed terms URL returned 403 | Review pending; do not claim publisher permission. |
| Opportunity Desk | RSS parsed; robots request HTTP 403 | Guessed terms URL returned 403 | Review pending; do not claim publisher permission. |
| Scholarships Corner | robots permits feed crawling | Terms reviewed: informational catalogue, refers readers to official providers; no express republication licence found | Minimal factual metadata and attribution only; permission review pending. |
| IKY | robots permits feed crawling | Guessed terms URL returned 404 | Review pending; mixed institutional notices require selection. |

A blocked robots request is not permission and a guessed terms URL is not proof that no terms exist. robots rules describe crawl access, not copyright or licence. Feed integration tests establish technical compatibility only. The runtime source manifest is authoritative for which adapters are enabled; this research register never marks ingestion approved. Automated fetches should preserve minimal factual fields, never republish complete source articles, and provide an immediate correction/removal contact.
