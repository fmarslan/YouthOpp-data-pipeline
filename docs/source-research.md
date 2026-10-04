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

## Country quality follow-up — 4 October 2026

The second pass inspected publication context from 89 pages. Of these, 37 exposed date contexts relating to 2026 or 2027; footers, general news and modified timestamps were not accepted as opportunity activity. Additional primary publisher search evidence was reviewed manually. Recent recurring annual schemes may be closed today. Publishers are counted conservatively by operator, and duplicated government programmes are excluded.

| Country | Research entries | Independent publishers with recent opportunity evidence | Minimum 3 |
|---|---|---|---|
| Austria | 3 | 2 | Not yet met |
| Belgium | 3 | 2 | Not yet met |
| Bulgaria | 3 | 3 | Yes, editorial activity only |
| Cyprus | 3 | 3 | Yes, editorial activity only |
| Czechia | 3 | 1 | Not yet met |
| Germany | 3 | 2 | Not yet met |
| Denmark | 3 | 1 | Not yet met |
| Estonia | 3 | 1 | Not yet met |
| Spain | 3 | 3 | Yes, editorial activity only |
| Finland | 3 | 1 | Not yet met |
| France | 3 | 2 | Not yet met |
| Greece | 3 | 2 | Not yet met |
| Croatia | 3 | 1 | Not yet met |
| Hungary | 3 | 1 | Not yet met |
| Ireland | 3 | 3 | Yes, editorial activity only |
| Italy | 3 | 3 | Yes, editorial activity only |
| Lithuania | 3 | 1 | Not yet met |
| Luxembourg | 3 | 0 | Not yet met |
| Latvia | 3 | 1 | Not yet met |
| Malta | 3 | 1 | Not yet met |
| Netherlands | 3 | 2 | Not yet met |
| Poland | 3 | 2 | Not yet met |
| Portugal | 3 | 1 | Not yet met |
| Romania | 3 | 3 | Yes, editorial activity only |
| Sweden | 3 | 0 | Not yet met |
| Slovenia | 3 | 1 | Not yet met |
| Slovakia | 3 | 1 | Not yet met |
| United States | 5 | 3 | Yes, editorial activity only |

7 of 28 countries meet the editorial activity threshold; 21 remain below three. None is claimed to have three approved automated adapters. All source permission reviews remain pending.

### Per-source reviewed activity

| Source | Evidence status | Primary evidence | Finding |
|---|---|---|---|
| grants.at (AT) | recent_programme | [Primary URL](https://rqb.oead.at/en/news/article/2026/09/oead-scholarship-programmes-and-further-grants-to-austria-for-2027-28) | Oe AD primary September 2026 notice links grants.at for 2027/28 programmes. |
| OeAD (AT) | recent_programme | [Primary URL](https://oead.at/en/news/article/2026/08/ernst-mach-stipendium-weltweit-bewerbung-bis-1-dezember-2026) | Ernst Mach worldwide 2027/28 deadline December 1 2026; annual call. |
| University of Vienna (AT) | recent_programme | [Primary URL](https://international.univie.ac.at/en/) | Student exchange deadlines October 15 and November 15 2026 visible on primary page. |
| Study in Flanders (BE) | recent_programme | [Primary URL](https://www.studyinflanders.be/scholarships/master-mind-scholarships) | 2026/27 Master Mind call explicitly closed; 2027/28 scheme under review. |
| WBI (BE) | recent_programme | [Primary URL](https://www.wbi.be/fr/actualites/offre-bourse-stage-entreprise-etudiants) | Company internship grant deadline November 1 2026 for Jan-Jun 2027 placements. |
| ARES (BE) | not_established | [Primary URL](https://www.ares-ac.be/en/cooperation-au-developpement/bourses) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Fulbright Bulgaria (BG) | recent_programme | [Primary URL](https://www.fulbright.bg/en/) | Research grants application deadline December 4 2026 visible on homepage; citizenship restrictions. |
| INSAIT (BG) | recent_programme | [Primary URL](https://insait.ai/insait-opens-applications-for-surf-2026-summer-research-internship-program/) | SURF 2026 summer research cycle verified; annual and past summer, not currently open. |
| FEBA Alumni (BG) | recent_programme | [Primary URL](https://www.febalumni.org/en/2026/06/17/feba-alumni-club-obyavyava-konkurs-za-mesechni-stipendii-visoki-akademichni-postizheniya-za-leten-semestr-na-akademichnata-20252026-g-kraen-srok-30-06-2026-g/) | Primary alumni call published June 17 2026, deadline June 30; closed, institutional eligibility. |
| AMPEU (HR) | recent_programme | [Primary URL](https://en.ampeu.hr/open-calls) | Primary open-calls list shows February 20 2026 bilateral call explicitly deadline passed. |
| Croatian Ministry (HR) | recent_programme | [Primary URL](https://mzom.gov.hr/glavni-izbornik-368/highlights/calls-417/scholarships-of-the-republic-of-croatia-call-for-applications-in-the-academic-year-2026-2027/7588) | Primary ministry 2026/27 bilateral scholarship call co-published with AMPEU, not a separate programme. |
| Study in Croatia (HR) | not_established | [Primary URL](https://www.studyincroatia.hr/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Cyprus State Scholarships Foundation (CY) | recent_programme | [Primary URL](https://www.gov.cy/mof-cssf/documents/prokiryxi-kratikon-ypotrofion-gia-proptychiakes-spoydes-2025-26/) | Gov.cy primary undergraduate 2025/26 scholarship announcement published April 2026. |
| ONEK (CY) | recent_programme | [Primary URL](https://youthfunds.onek.org.cy/en/) | Youth Initiatives 2027 call August 11 2026;2026 Green Volunteering and youth travel calls May 2026. |
| Cyprus Diaspora Scholarships (CY) | recent_programme | [Primary URL](https://www.gov.cy/mfa/en/service-for-overseas-cypriots-and-repatriated-cypriots/) | Primary MFA 2026 diaspora resource lists university scholarships and paidinternships; no application deadline. |
| Study in Czechia (CZ) | recent_programme | [Primary URL](https://studyin.gov.cz/scholarships/) | Scholarship database shows 2026/27 Barrande and bilateral programmes; publishedcycle not openstatus. |
| DZS (CZ) | recent_programme | [Primary URL](https://www.dzs.cz/program/evropsky-sbor-solidarity/projekty-granty) | Primary ESC 2026 call describes priorities and grants. |
| Charles University (CZ) | guidance_updated | [Primary URL](https://cuni.cz/UKEN-1617.html) | Scholarship guidance updated August 14 2026; no call publication date. |
| Study in Denmark (DK) | not_established | [Primary URL](https://studyindenmark.dk/study-options/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| DM and MA Travel Grant (DK) | recent_programme | [Primary URL](https://dm.dk/students/membership/travel-grant/) | Next application round opens November 1 2026; membership/studenteligibility. |
| University of Copenhagen (DK) | not_established | [Primary URL](https://studies.ku.dk/masters/tuition-fees--scholarships/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Harno (EE) | recent_programme | [Primary URL](https://www.harno.ee/en/scholarships-and-grants/scholarships-studying-and-working-estonia/scholarships-international) | Primary page describes national 2026/27 degree/exchange scholarship round. |
| University of Tartu (EE) | not_established | [Primary URL](https://ut.ee/en/scholarships-and-other-stipends) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| TalTech (EE) | not_established | [Primary URL](https://taltech.ee/en/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Study in Finland (FI) | not_established | [Primary URL](https://www.studyinfinland.fi/funding-your-studies/bachelors-and-masters-scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Aalto University (FI) | not_established | [Primary URL](https://www.aalto.fi/en/admission-services/scholarships-and-tuition-fees) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| University of Helsinki (FI) | recent_programme | [Primary URL](https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/tuition-fees-and-scholarship-programme) | 2026 admission financial dates and tuition waiver scheme visible; tuition only, not a living allowance. |
| Campus France (FR) | current_catalogue | [Primary URL](https://campusbourses.campusfrance.org/?lang=en) | Campus Bourses database includes December 31 2026 and January 25 2027 deadlines. |
| 1jeune1solution (FR) | current_catalogue | [Primary URL](https://www.1jeune1solution.gouv.fr/stages) | Primary internshipsearch listings and September 2026 schoolplacement catalogue; perlisting dates stillneeded. |
| Service Civique (FR) | current_catalogue | [Primary URL](https://www.service-civique.gouv.fr/missions/tu-es-l-engagement) | Primary missioncatalogue includes postings October 3 2026 and starting October 15/19 2026. |
| DAAD (DE) | recent_programme | [Primary URL](https://www2.daad.de/deutschland/stipendium/datenbank/de/21148-stipendiendatenbank/?detail=57742121) | Primary research scholarship database shows selection November 2026 and funding February 2027. |
| StipendiumPlus (DE) | guidance_only | [Primary URL](https://stipendiumplus.de/) | Primary portal provides 13 fundingfoundation guidance; no dated 2026 call verified. |
| Rausvonzuhaus (DE) | current_catalogue | [Primary URL](https://www.rausvonzuhaus.de/faq) | Primary FAQ describes Last Minute funded places deadlines within the next  3 months; October 2026 Discover EU session visible. |
| IKY (GR) | current_catalogue | [Primary URL](https://www.iky.gr/en/) | RSS newest October 1 2026; includes notices and results so opportunity selection required. |
| Onassis Foundation (GR) | recent_programme | [Primary URL](https://www.onassis.org/el/initiatives/scholarships/greek-scholars) | 2026/27 call December 16 2025 now past;Greekpage anticipates 2027/28 call December 2026. |
| Fulbright Greece (GR) | not_established | [Primary URL](https://www.fulbright.gr/en/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Stipendium Hungaricum (HU) | recent_programme | [Primary URL](https://stipendiumhungaricum.hu/apply/) | Primary application page lists 2026/27 call documents; annual intake notcurrently open proof. |
| Tempus Bilateral Scholarships (HU) | recent_programme | [Primary URL](https://en.tka.hu/bilateral-state-scholarships-information-for-applicants) | Primary page lists 2026/27 semester, full study and summer scholarship types. |
| Hungarian Diaspora Scholarship (HU) | not_established | [Primary URL](https://diasporascholarship.hu/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| gradireland (IE) | current_catalogue | [Primary URL](https://gradireland.com/) | Primary site lists 2027 Kerryinternship and graduate programmes with remaining application days. |
| HEA (IE) | recent_programme | [Primary URL](https://hea.ie/policy/internationalisation/goi-ies/) | 2026 call deadline March 12 2026 andresultsearly June; closedannual programme. |
| Léargas (IE) | current_catalogue | [Primary URL](https://www.leargas.ie/) | Primary events include October 15 Gathering 2026 and October-Novembertraining deadlines. |
| Scambieuropei (IT) | current_catalogue | [Primary URL](https://www.scambieuropei.info/) | Primary home lists October 2 2026 Asserinternship and October 1 Schuman 2027 internships. |
| Eurodesk Italia (IT) | current_catalogue | [Primary URL](https://www.eurodesk.it/notizie) | Primary September-October 2026 news and October 6/November 12 webinars. |
| Study in Italy (IT) | recent_programme | [Primary URL](https://www.esteri.it/en/servizi-opportunita/opportunita/borse-di-studio/per-cittadini-stranieri/borsestudio_stranieri/) | Primary MAECI 2026/27 scholarship call links Study In Italy applicationportal; deadline March 26 2026 past. |
| VIAA (LV) | recent_programme | [Primary URL](https://www.viaa.gov.lv/en/latvian-state-scholarships) | Pageupdated January 13 2026 lists 2026/27 national state scholarships; annual, notcurrently open. |
| University of Latvia (LV) | not_established | [Primary URL](https://www.lu.lv/en/admission/scholarships-and-student-loans/fees-grants-and-scholarships/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Riga Technical University (LV) | recent_programme | [Primary URL](https://www.rtu.lv/en/studies/scholarships-2) | Primary page 2026/27 state scholarship; duplicates VIAAfunding, not independent. |
| Study in Lithuania (LT) | recent_programme | [Primary URL](https://studyin.lt/scholarships/) | Primarycatalogue 2026 calls includes Vilnius April 1 2026 deadline now past; also quarterly university updates. |
| Vilnius University (LT) | not_established | [Primary URL](https://www.vu.lt/en/students/services-for-students/finance) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Kaunas University of Technology (LT) | recent_programme | [Primary URL](https://admissions.ktu.edu/) | Primary admissions news February 26 2026 masterstate scholarship notice; overlapsnationalprogramme. |
| University of Luxembourg (LU) | not_established | [Primary URL](https://www.uni.lu/life-en/financial-support/scholarships/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Luxembourg MFA Internships (LU) | not_established | [Primary URL](https://mae.gouvernement.lu/en/directions-du-ministere/finances-ressources-humaines/stages.html) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Luxembourg Cooperation (LU) | not_established | [Primary URL](https://cooperation.gouvernement.lu/en/s-engager.html) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| MyScholarship (MT) | not_established | [Primary URL](https://myscholarship.gov.mt/en/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| University of Malta (MT) | not_established | [Primary URL](https://www.um.edu.mt/study/feesfunding/scholarships/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Malta Student Grants (MT) | recent_programme | [Primary URL](https://stipendsandgrants.gov.mt/en/) | Primary page says 2026/27 Stipendsand Grantsapplications nowopen; localeligibilityrules. |
| Study in NL (NL) | not_established | [Primary URL](https://www.studyinnl.org/finances/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Magnet.me (NL) | current_catalogue | [Primary URL](https://magnet.me/en/internships/netherlands) | Primary HTML internship records showresponse Deadline October 4 2026 and February 2027 start dates. |
| Leiden University (NL) | recent_programme | [Primary URL](https://www.universiteitleiden.nl/en/scholarships/sea/leiden-university-excellence-scholarship-lexs) | Primary LEx Spage deadline December 1 2026; nationality/programmerestrictions. |
| Eurodesk Polska (PL) | current_catalogue | [Primary URL](https://www.eurodesk.pl/granty) | Primary grant catalogue has October 4/6 2026 deadlines and November 30 grants; publisher FRSE. |
| NAWA (PL) | recent_programme | [Primary URL](https://nawa.gov.pl/en/nawa/news/call-for-applications-banach-nawa-2026) | Primary Banach NAWA 2026 call deadline May 8 2026 and 2026/27 intake; closed. |
| FRSE (PL) | not_established | [Primary URL](https://www.frse.org.pl/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| IPDJ (PT) | not_established | [Primary URL](https://ipdj.gov.pt/candidaturas) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| FCT (PT) | recent_programme | [Primary URL](https://www.fct.pt/en/financiamento/programas-de-financiamento/bolsas/) | Primary Ph Dstudentship overviewupdated March 30 2026; postgraduate focus; individualcalls need inspection. |
| DGES (PT) | unrelated_activity | [Primary URL](https://www.dges.gov.pt/en) | September 29 2026 admissionsresults visible; not proofrecent scholarship call. |
| Study in Romania (RO) | recent_programme | [Primary URL](https://studyinromania.gov.ro/scholarships) | 2026/27 national scholarshipcycle confirmed; site newsstatesapplicationsclosed. |
| Fulbright Romania (RO) | recent_programme | [Primary URL](https://fulbright.ro/the-2027-2028-fulbright-us-student-competition/) | Primary 2027/28 USstudentcall deadline October 6 2026. |
| ANPCDEFP (RO) | recent_programme | [Primary URL](https://www.anpcdefp.ro/ce-facem/ne-implicam/erasmus-si-fse/) | Erasmus+/ESF+supportpage updated September 16 2026 for students 18-29 with fewer opportunities; institution-mediated. |
| SAIA Grants (SK) | current_catalogue | [Primary URL](https://grants.saia.sk/Pages/ProgramZoznam.aspx?s=true) | Primary database shows NSPstudentdeadline October 31 2026 16:00. |
| National Scholarship Programme (SK) | recent_programme | [Primary URL](https://www.scholarships.sk/en/main/o-programe) | Same SAIAprogramme as database with October 31 2026 round; not an additional independent publisher. |
| Study in Slovakia (SK) | not_established | [Primary URL](https://www.studyinslovakia.saia.sk/en/main/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Public Scholarship Fund (SI) | not_established | [Primary URL](https://www.srips-rs.si/en/public-calls) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| CMEPIUS (SI) | recent_programme | [Primary URL](https://www.cmepius.si/mednarodno-sodelovanje/moznosti-sodelovanja/bilaterale/) | Bilateralprogramme list 2026/27 and 2027/28 calls; manylisteddeadlinespast, inspect each. |
| University of Ljubljana (SI) | not_established | [Primary URL](https://www.uni-lj.si/en/study) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| INJUVE (ES) | current_catalogue | [Primary URL](https://www.injuve.es/convocatorias/becas) | Primary SEPI 107 internshipslisting September 30 2026 deadline October 7 2026. |
| Fundación Carolina (ES) | recent_programme | [Primary URL](https://www.fundacioncarolina.es/) | Primary home lists 2026/27 scholarship call; annual programme, checkper call openstate. |
| la Caixa Foundation (ES) | current_catalogue | [Primary URL](https://fundacionlacaixa.org/es/becas) | Primary scholarships list includesopen research call deadline October 7 2026 andclosed undergrad May 29 2026. |
| Swedish Institute (SE) | not_established | [Primary URL](https://si.se/en/apply/scholarships/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Study in Sweden (SE) | guidance_updated | [Primary URL](https://studyinsweden.se/scholarships/) | April 20 2026 metadata representsuniversity directory update, notscholarship call. |
| Lund University (SE) | not_established | [Primary URL](https://www.lunduniversity.lu.se/admissions/bachelors-and-masters-studies/scholarships-and-awards) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| USAJOBS Students (US) | current_catalogue | [Primary URL](https://recentgrad.usajobs.gov/search/results) | Primaryrecentgraduatecatalogue lists September 22–October 6 2026 vacancy and January 2026–January 2027 ongoingcall. |
| NSF REU (US) | not_established | [Primary URL](https://www.nsf.gov/funding/initiatives/reu/students) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| CareerOneStop Scholarship Finder (US) | not_established | [Primary URL](https://www.careeronestop.org/toolkit/training/find-scholarships.aspx) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Fulbright US Student (US) | recent_programme | [Primary URL](https://us.fulbrightonline.org/) | Primary home 2027/28 competitionnational deadline October 6 2026 5 pm ET. |
| NASA Internships (US) | recent_programme | [Primary URL](https://www.nasa.gov/learning-resources/internship-programs/) | Primary page 2027 summer deadline March 1 andfall deadline May 24; programme offers 3 sessionsannually. |
| Opportunities for Youth (GLOBAL) | current_catalogue | [Primary URL](https://opportunitiesforyouth.org/) | Parsed RSSnewest October 4 2026;international aggregator. |
| Opportunity Desk (GLOBAL) | current_catalogue | [Primary URL](https://opportunitydesk.org/) | Parsed RSSnewest October 3 2026;international aggregator. |
| Scholarships Corner (GLOBAL) | current_catalogue | [Primary URL](https://scholarshipscorner.website/) | Parsed RSSnewest October 4 2026;international aggregator. |

### Explicit exclusions

General guidance without dated calls is excluded from the activity count. Eurodesk Polska and FRSE share a publisher. grants.at/OeAD, Tempus programmes and SAIA programmes also share publishers. The Croatian ministry and AMPEU co-publish the bilateral scholarship call. RTU state grants duplicate VIAA; the observed KTU state grant notice duplicates national funding. Closed 2026/27 calls prove recent annual publication but must not appear open. Citizenship and residence rules must be assessed per opportunity.
