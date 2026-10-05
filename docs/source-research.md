# Opportunity source research

Research date: 4 October 2026. Prepared by Open AI agent: Researcher.

Scoped access review updated 5 October 2026 for NASA, IKY and the exact Portugal and Netherlands programmes; other entries retain their recorded review dates. See [the primary-source access review](access-review-2026-10-05.md).

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

| Publisher | Feed | Technical evidence | Editorial and access limits |
|---|---|---|---|
| IKY | [https://www.iky.gr/feed/](https://www.iky.gr/feed/) | GET 200, valid RSS, 24 items; newest 2026-10-01. Mixed institutional notices need opportunity filtering. | Actual [footer-linked terms](https://www.iky.gr/oroi-proypotheseis-xrisis-istoselidas-iky/) reviewed 2026-10-05 prohibit public republication, extracts and summaries without prior permission. Ordinary hyperlinks are permitted; feed ingestion remains disabled. |
| Opportunities for Youth | [https://opportunitiesforyouth.org/feed/](https://opportunitiesforyouth.org/feed/) | Valid RSS with 10 items; newest publication 2026-10-04. | RSS fetch and parse succeeded, robots.txt and guessed terms URL returned403. Access policy cannot be established from this environment; review pending. |
| Opportunity Desk | [https://opportunitydesk.org/feed/](https://opportunitydesk.org/feed/) | Valid RSS with 10 items; newest publication 2026-10-03. | RSS fetch and parse succeeded, robots.txt and guessed terms URL returned403. Access policy cannot be established from this environment; review pending. |
| Scholarships Corner | [https://scholarshipscorner.website/feed/](https://scholarshipscorner.website/feed/) | Valid RSS with 10 items; newest publication 2026-10-04. | robots.txt permits feed crawling; terms reviewed 2026-10-04 describe informational listings and official-provider referral. No express republication licence found. Minimal factual attribution only; permission review remains pending. |
| Fulbright Commission Czech Republic | [https://fulbright.gov.cz/feed/](https://fulbright.gov.cz/feed/) | HTTP 200; 10 parsed items; newest 2026-09-03 | Scoped access-policy review complete; exact two metadata-only programme/grant notices selected, other eight excluded. Operational collection verified in the immutable fork release on 5 October 2026; two metadata records and healthy source status. No express reuse licence or publisher approval claimed. |
| Fulbright Netherlands | [https://fulbright.nl/feed/](https://fulbright.nl/feed/) | HTTP 200; 10 parsed items; newest 2026-09-22 | Advertised RSS and robots allow access, Crawl-delay: 10 seconds. No express reuse licence found; all ten current items are alumni/blog stories. Keep RSS ingestion disabled for relevance. |
| Fulbright Portugal | [https://www.fulbright.pt/feed/](https://www.fulbright.pt/feed/) | HTTP 200; 10 parsed items; newest 2026-09-29 | Advertised RSS and robots allow access. Ordinary copyright reservation; no express reuse licence found. Zero qualified scholarship calls in current ten items. Keep RSS ingestion disabled for relevance. |

All feed checks are dated 4 October 2026. Three newly tested commission feeds contain alumni, partnerships, webinars and other notices. Feed recency is not a currently open scholarship catalogue; selection and detail-page checks are required. This research documentation does not control adapter activation; the runtime manifest and verified release are authoritative. Scambieuropei and ONEK previously returned HTTP 403; no block workaround was attempted.

## Reviewed HTML shortlist

| Publisher | Exact programme page | Technical evidence | Editorial and access limits |
|---|---|---|---|
| NASA | [NASA Internship Programs](https://www.nasa.gov/learning-resources/internship-programs/) | Direct GET 200 without redirect on 2026-10-05; exact canonical WebPage JSON-LD has original publication 2023-01-23 and modification 2026-09-28. robots permits access. | Scoped project factual-use review supports deterministic original title/link/publication date only, with source acknowledgment. No article prose, media, logo or third-party content; no NASA approval or endorsement. Programme overview has unknown individual-call availability/deadline/eligibility. Producer release [catalog-37270813364-1](https://github.com/fmarslan/YouthOpp-data-pipeline/releases/tag/catalog-37270813364-1) verifies this exact metadata adapter; website acceptance is separate. |
| Fulbright Portugal | [Master’s programme](https://www.fulbright.pt/bolsas/bolsa-fulbright-para-mestrado/) | GET 200; one exact canonical and matching Open Graph URL/title; original publication absent. | Factual title/link programme overview only; original date null, no source prose or inferred eligibility. Separate exact adapter verified in producer release catalog-37270813364-1; Portugal RSS stays excluded for relevance. |
| Fulbright Netherlands | [Doctoral programme](https://fulbright.nl/naar-de-vs/promovendi/fulbright-beurzen-voor-promovendi/) | Fresh GET 200 on 2026-10-05; one exact canonical/Open Graph URL/title, original publication absent. | Scoped factual title/link review; original date null, programme overview with unknown application fields. Robots requires ten-second same-host spacing. General RSS excluded for relevance; exact adapter verified in [producer release catalog-37272654737-1](https://github.com/fmarslan/YouthOpp-data-pipeline/releases/tag/catalog-37272654737-1). |

## Country register

### Austria (AT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [grants.at](https://grants.at/en) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [OeAD](https://oead.at/en/study-research-teaching/overview-grants-and-scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Official OeAD 2027/28 scholarship announcement published 2026-09; annual call cycle. Publisher overlaps another entry. |
| [University of Vienna](https://international.univie.ac.at/en/) | mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Austria](https://www.fulbright.at/programs/in-austria/students/full-time-study-research-grants) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | US student awards list March 31–October 7 2026 application window for October 2027 start. Other Fulbright national sites show October 6; confirm the programme-specific closing time before applying. |

### Belgium (BE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Flanders](https://www.studyinflanders.be/scholarships/master-mind-scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [WBI](https://www.wbi.be/en/bourses) | scholarship, internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [ARES](https://www.ares-ac.be/en/cooperation-au-developpement/bourses) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Fulbright Belgium / Luxembourg](https://www.fulbright.be/news/2027-28-competition-open/) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Official 2027/28 competition announcement sets December 1 2026, noon CET closing date. The shared commission serves Belgian and Luxembourgish applicants; counted once under Belgium. |

### Bulgaria (BG)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Fulbright Bulgaria](https://www.fulbright.bg/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [INSAIT](https://insait.ai/surf/) | research, internship | candidate; manual_review_then_html_adapter; not_connected | Primary SURF page describes Summer Undergraduate Research Fellowship 2026; recurring annual research programme, now past summer. |
| [FEBA Alumni](https://www.febalumni.org/en/) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Manual review found a primary June 17 2026 scholarship call with a June 30 deadline. The current fetch returns HTTP 402, so this closed-call evidence does not establish adapter access or a currently open application. |

### Cyprus (CY)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Cyprus State Scholarships Foundation](https://www.gov.cy/mof-cssf/) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Manual review found a primary undergraduate 2025/26 announcement published in April 2026. The collector receives HTTP 403; no currently open window or adapter readiness is established. |
| [ONEK](https://youthfunds.onek.org.cy/en/) | youth, grant | page_reachable; manual_review_then_html_adapter; not_connected | Primary site lists Youth Initiatives 2027 call dated 2026-08-11 and 2026 programme calls. Feed request 403. |
| [Cyprus Diaspora Scholarships](https://www.gov.cy/mfa/en/service-for-overseas-cypriots-and-repatriated-cypriots/) | scholarship, internship | candidate; manual_review_then_html_adapter; not_connected | Manual review found a primary 2026 MFA resource listing university scholarships and paid internships without application deadlines. The collector receives HTTP 403; current availability and adapter readiness remain unverified. |

### Czechia (CZ)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Czechia](https://studyin.gov.cz/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [DZS](https://www.dzs.cz/en) | mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Charles University](https://cuni.cz/UKEN-1617.html) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Charles University Mobility Fund autumn call opens October 1 2026; faculty deadlines October 20–30, university closing October 30 at 14:00. Restricted to eligible university students and academic mobility. |
| [Fulbright Commission Czech Republic](https://fulbright.gov.cz/stipendia/stipendium-pro-postgradualni-studium/) | scholarship, research | rss_tested; reviewed_rss_metadata; connected (two exact metadata records, release verified 2026-10-05) | Primary postgraduate page links 2027/28 application documents and September 2 2026 scholarship webinars. Degree and research application windows differ; a recent feed is not proof every programme is open. |

### Germany (DE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [DAAD](https://www.daad.de/en/studying-in-germany/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [StipendiumPlus](https://stipendiumplus.de/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Rausvonzuhaus](https://www.rausvonzuhaus.de/) | youth, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Germany](https://www.fulbright.de/stipendien/programm/studienstipendium-uni-und-haw) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | 2027/28 masters scheme verified, but page conflicts: opening paragraph says open while application-deadline field says closed for 2027 and next call in spring 2027 for 2028. Treat open status as unresolved; recent programme evidence only. |

### Denmark (DK)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Denmark](https://studyindenmark.dk/study-options/scholarships) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [DM and MA Travel Grant](https://dm.dk/students/membership/travel-grant/) | grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [University of Copenhagen](https://studies.ku.dk/masters/tuition-fees--scholarships/) | research, job | page_reachable; manual_review_then_html_adapter; not_connected | Primary doctoral vacancies catalogue shows October 5, 7, 10 and 11 2026 deadlines, including AI and plant-biochemistry fellowships. These are funded research/doctoral positions with per-vacancy qualifications, not general undergraduate scholarships. |
| [Fulbright Denmark](https://fulbrightcenter.dk/go-to-the-us/fulbright-grants-for-danish-students/apply/) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Primary Danish student application page states February 17 2027 at noon for Fall 2027/Spring 2028 awards. Check Danish citizenship, university and acceptance requirements. |

### Estonia (EE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Harno](https://www.harno.ee/en/scholarships-and-grants/scholarships-studying-and-working-estonia/scholarships-international) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary scholarship page explicitly describes academic year 2026/27; annual rather than daily. |
| [University of Tartu](https://ut.ee/en/scholarships-and-other-stipends) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Primary open-calls table lists 2026 autumn exchange opportunities and upcoming ENLIGHT Erasmus+ BIP deadline November 15 2026. Tartu student eligibility and the upcoming-call label must be preserved. |
| [TalTech](https://taltech.ee/en/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary TalTech Development Fund autumn 2026 catalogue states application period September 30–October 19 2026, with separate October 12 award exception. Institutional, course and sponsor requirements vary. |

### Spain (ES)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [INJUVE](https://www.injuve.es/convocatorias/becas?activas=si) | scholarship, youth | candidate; manual_review_then_html_adapter; not_connected | Primary listing has SEPI call dated 2026-09-30 with deadline 2026-10-07; direct fetch returned 502. |
| [Fundación Carolina](https://www.fundacioncarolina.es/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [la Caixa Foundation](https://fundacionlacaixa.org/es/becas) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |

### Finland (FI)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Finland](https://www.studyinfinland.fi/funding-your-studies/bachelors-and-masters-scholarships) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Aalto University](https://www.aalto.fi/en/admission-services/scholarships-and-tuition-fees) | internship, research, scholarship | page_reachable; manual_review_then_html_adapter; not_connected | AScI summer research assistantship 2026 call was open January 7–31 2026, closes January 31 at 23:59 UTC+2. Past summer programme, not currently open; internship/research eligibility differs from tuition-waiver guidance. |
| [University of Helsinki](https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/tuition-fees-and-scholarship-programme) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Finland Foundation](https://www.fulbright.fi/grant-programs-to-us/grants-masters-studies-us/fulbright-finnish-language-and-culture-teaching-assistant-program-flta) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | 2027/28 Finnish FLTA application round explicitly open; ends October 25 2026, with information session October 6. Finnish citizenship and bachelor-level education required; other October 1 calls are already closed. |

### France (FR)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Campus France](https://www.campusfrance.org/en/bursaries-foreign-students) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [1jeune1solution](https://www.1jeune1solution.gouv.fr/) | internship, job | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Service Civique](https://www.service-civique.gouv.fr/) | volunteering | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Fulbright France](https://fulbright-france.org/fr/node/25) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Official student 2027/28 call explicitly open; deadline December 1 2026 at 23:59 Paris time. French citizenship and masters/PhD degree admission requirements apply; first-year funding only. |

### International (GLOBAL)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Opportunities for Youth](https://opportunitiesforyouth.org/) | scholarship, internship, youth | rss_tested; rss; not_connected | Valid RSS with 10 items; newest publication 2026-10-04. |
| [Opportunity Desk](https://opportunitydesk.org/) | scholarship, internship, youth | rss_tested; rss; not_connected | Valid RSS with 10 items; newest publication 2026-10-03. |
| [Scholarships Corner](https://scholarshipscorner.website/) | scholarship, internship, youth | rss_tested; rss; not_connected | Valid RSS with 10 items; newest publication 2026-10-04. |
| [International Visegrad Fund](https://www.visegradfund.org/scholarships) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Regional fellowship deadline November 30 2026; OSA research fellowship deadline November 10 2026. Masters scholarship next opens January 1 2027. Regional publisher is not counted as a national publisher for each covered country. |

### Greece (GR)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [IKY](https://www.iky.gr/en/) | scholarship | rss_tested; rss; not_connected | GET 200, valid RSS, 24 items; newest 2026-10-01. Mixed institutional notices need opportunity filtering. |
| [Onassis Foundation](https://www.onassis.org/initiatives/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Greece](https://www.fulbright.gr/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | 2027/28 Greek citizenship programme has mandatory registration July 1–October 15 2026 and separate application deadline November 15 2026. A single generic deadline would hide the earlier prerequisite. |

### Croatia (HR)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [AMPEU](https://en.ampeu.hr/open-calls) | scholarship, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Croatian Ministry](https://mzom.gov.hr/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Co-publishes same government bilateral programme with AMPEU; not additional independent catalogue. |
| [Study in Croatia](https://www.studyincroatia.hr/) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [University of Zagreb](https://www.unizg.hr/studiji-i-studiranje/upisi-stipendije-priznavanja/stipendije/) | scholarship | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Own 2025/26 scholarship round ran December 17 2025–January 16 2026; primary catalogue states March 17 decision awarding 400 scholarships and April 28 amendment. Closed, institution-specific scheme distinct from AMPEU bilateral awards. |
| [Croatian Ministry of Demography and Immigration](https://mdu.gov.hr/javni-poziv-za-dodjelu-stipendija-za-ucenje-hrvatskoga-jezika-u-republici-hrvatskoj-za-akademsku-godinu-2026-2027-7582/7582) | scholarship, youth | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Primary Croatian-language 2026/27 call published June 19 2026 for up to 700 awards; deadline July 6 2026, now closed. Diaspora/descendant and other stated eligibility restrictions apply; distinct from science-ministry/AMPEU bilateral programme. |

### Hungary (HU)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Stipendium Hungaricum](https://stipendiumhungaricum.hu/apply/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary application announcement describes 2026/27 intake; annual cycle, not evidence currently open. Publisher overlaps another entry. |
| [Tempus Bilateral Scholarships](https://en.tka.hu/bilateral-state-scholarships-information-for-applicants) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Hungarian Diaspora Scholarship](https://diasporascholarship.hu/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Fulbright Hungary](https://fulbright.hu/) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | 2027/28 research/lecturing deadline October 15 2026 and FLTA deadline October 31; postgraduate deadline May 15 has passed. Preserve distinct student, scholar and language-teacher audiences. |
| [Corvinus University of Budapest](https://www.uni-corvinus.hu/post/hir/applications-are-now-open-for-the-study-scholarship-and-student-organization-scholarship/?lang=en) | scholarship | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Own 2026/27 Study and Student Association scholarships had September 15 2026 noon closing date. Closed call with university-specific active student and association requirements, independent of Tempus national schemes. |

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
| [Vilnius University](https://www.vu.lt/en/students/services-for-students/finance) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Own full-time masters tuition-waiver call states April 1 2026 deadline and May selection. Closed institutional fee support, not living-cost funding or the national Study in Lithuania grant. |
| [Kaunas University of Technology](https://admissions.ktu.edu/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary KTU 2026/27 financial-support calendar lists own Talent/Breakthrough scholarship applications September 11–25 2026, now closed; sponsor grants and doctoral funds have distinct windows. This university-specific evidence replaces the previously duplicated national grant notice. |

### Luxembourg (LU)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [University of Luxembourg](https://www.uni.lu/life-en/financial-support/scholarships/) | scholarship | candidate; manual_review_then_html_adapter; not_connected | Primary publisher search index records Guillaume Dupaix application deadline March 24 2026; closed annual scheme. Direct page currently returns challenge content, so indexed evidence is not technical adapter readiness. |
| [Luxembourg MFA Internships](https://mae.gouvernement.lu/en/directions-du-ministere/finances-ressources-humaines/stages.html) | internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Luxembourg Cooperation](https://cooperation.gouvernement.lu/en/s-engager.html) | internship, youth | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Luxembourg National Research Fund (FNR)](https://www.fnr.lu/funding-instruments/afdoc/) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | AFdoc doctoral-funding first call launched September 2026; closes November 25 2026 at 14:00 CET. Masters-qualified candidates need the specified Luxembourg link and eligible host; grants fund host employment, not tuition. |
| [Volontaires.lu / National Youth Service](https://www.volontaires.lu/missions-svn/volontaire-en-soutien-a-lorganisation-devenements-et-a-la-communication/) | volunteering, youth | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Primary SNJ national-service mission at Partage Luxembourg lists September 7 2026–June 6 2027, communications/event duties and required French. Mission dates are service duration, not application deadlines; availability unconfirmed. |

### Latvia (LV)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [VIAA](https://www.viaa.gov.lv/en/latvian-state-scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary page updated 2026-01-13 and describes 2026/27 scholarships; check window before publishing. |
| [University of Latvia](https://www.lu.lv/en/admission/scholarships-and-student-loans/fees-grants-and-scholarships/) | scholarship, mobility | page_reachable; manual_review_then_html_adapter; not_connected | University-managed 2026/27 spring Erasmus exchange application window August 26–September 20 2026 at 20:00, now closed; faculty-specific partner quotas and selection criteria apply. Institutional mobility selection, not a VIAA state-grant re-listing. |
| [Riga Technical University](https://www.rtu.lv/en/studies/scholarships-2) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Own ERDF doctoral research grant fourth selection call closes October 14 2026 at 16:59; work must begin by November 15. Eligible RTU/academy/partner doctoral students only. This independently managed programme replaces the previously duplicated VIAA state-grant evidence. |

### Malta (MT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [MyScholarship](https://myscholarship.gov.mt/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [University of Malta](https://www.um.edu.mt/study/feesfunding/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary Islands and Small States scholarship call deadline July 1 2026 at 14:00 CEST; now closed. Nationality restricted to eligible Small Island Developing States; no current open call inferred. |
| [Malta Student Grants](https://stipendsandgrants.gov.mt/en/) | grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Arts Council Malta](https://artscouncilmalta.gov.mt/en/funding-and-grants/artivisti/) | youth, grant | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Artivisti creative-development call had March 30 2026 noon deadline; awards/results now published. Youth arts initiative jointly administered with Aġenzija Żgħażagħ; closed call, distinct from education-ministry student grants. |

### Netherlands (NL)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in NL](https://www.studyinnl.org/finances/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Magnet.me](https://magnet.me/en/internships/netherlands) | internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Leiden University](https://www.universiteitleiden.nl/en/scholarships/sea/leiden-university-excellence-scholarship-lexs) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Not yet assessed; HTTP availability alone does not prove active opportunities. |
| [Fulbright Netherlands](https://fulbright.nl/naar-de-vs/promovendi/fulbright-beurzen-voor-promovendi/) | scholarship, research | primary_page_reviewed; reviewed_html_metadata; connected (exact metadata release verified 2026-10-05) | 2027/28 doctoral research round explicitly open; deadline December 1 2026 at noon Dutch time. Dutch citizenship and affiliation to a Dutch university/research institute required; maximum support is partial, not a full-cost guarantee. |

### Poland (PL)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Eurodesk Polska](https://www.eurodesk.pl/granty) | scholarship, grant, youth | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [NAWA](https://nawa.gov.pl/en/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [FRSE](https://www.frse.org.pl/) | mobility, grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Fulbright Poland](https://fulbright.edu.pl/junior-research/) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Junior Research Award 2027/28 applications May 12–October 13 2026 at 15:00 Polish time; primary page explicitly open. Polish citizenship and a doctoral dissertation at a Polish institution required. |

### Portugal (PT)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [IPDJ](https://ipdj.gov.pt/candidaturas) | youth, grant | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [FCT](https://www.fct.pt/en/financiamento/programas-de-financiamento/bolsas/) | research, scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [DGES](https://www.dges.gov.pt/en) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary 2026/27 need-based grant page gives August 14–October 2 2026 standard window and later proportional awards October 3–May 31, plus enrollment-dependent 20-working-day exceptions. Eligibility and award proration require careful interpretation. |
| [Fulbright Portugal](https://www.fulbright.pt/bolsas/bolsa-fulbright-para-mestrado/) | scholarship, research | primary_page_reviewed; reviewed_html_metadata; connected (exact metadata release verified 2026-10-05) | 2027/28 masters applications run October 1 2026–January 15 2027, 23:59 Lisbon time. Portuguese citizenship and US university admission required; award supports the first year up to the stated limit. |

### Romania (RO)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Study in Romania](https://studyinromania.gov.ro/scholarships) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [Fulbright Romania](https://fulbright.ro/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary US student 2027/28 competition has deadline 2026-10-06; source active at review. |
| [ANPCDEFP](https://www.anpcdefp.ro/) | mobility, youth | page_reachable; manual_review_then_html_adapter; not_connected | Primary Erasmus+ and ESF+ programme page updated 2026-09-16; institution-mediated support, not unrestricted individual applications. |

### Sweden (SE)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Swedish Institute](https://si.se/en/apply/scholarships/) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Official application portal links eligible 2026/27 programmes and December 22 2025 call-date notice. Portal text mixes 2025/26 and 2026/27 in its notice; no current open status or 2027 dates inferred. Publisher overlaps another entry. |
| [Study in Sweden](https://studyinsweden.se/scholarships/) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Lund University](https://www.lunduniversity.lu.se/admissions/bachelors-and-masters-studies/scholarships-and-awards) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary Lund Global Scholarship states applications closed and February 16 2026 deadline. Tuition-only funding for fee-paying non-EU/EEA students; living costs excluded. |
| [Fulbright Sweden](https://www.fulbright.se/scholar-program/) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Swedish Scholar 2027/28 round opens August 15 2026 and closes January 11 2027. Swedish citizenship, US host affiliation and doctoral/terminal degree by departure required; includes early-career scholars. |

### Slovenia (SI)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [Public Scholarship Fund](https://www.srips-rs.si/en/public-calls) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary public-calls list includes 2026/27 Zois and diaspora scholarships alongside explicitly expired 2026 calls. Relative open-days indicators need detail deadlines before individual records are marked open. |
| [CMEPIUS](https://www.cmepius.si/mednarodno-sodelovanje/moznosti-sodelovanja/bilaterale/) | scholarship, mobility | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [University of Ljubljana](https://www.uni-lj.si/en/study) | scholarship, mobility | page_reachable; manual_review_then_html_adapter; not_connected | University-managed 2026/27 traineeship funding call accepts applications while funds last, at latest July 1 2027; mobility runs October 1 2026–September 30 2027. Signed student/employer/department learning agreement required. Distinct institutional selection, not a copied SRIPS scholarship call. |

### Slovakia (SK)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [SAIA Grants](https://grants.saia.sk/Pages/ProgramZoznam.aspx?s=true) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Primary database lists NSP student deadline 2026-10-31 16:00; same publisher as scholarships.sk. Publisher overlaps another entry. |
| [National Scholarship Programme](https://www.scholarships.sk/en/main/o-programe) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. |
| [Study in Slovakia](https://www.studyinslovakia.saia.sk/en/main/scholarships) | guidance | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Publisher overlaps another entry. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Fulbright Slovakia](https://fulbright.sk/en/us-student) | scholarship, research | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Primary US student 2027/28 call deadline October 6 2026 at 17:00 ET; separate Slovak scholar programme has October 15 deadline. US and Slovak applicant programmes must not be conflated. |
| [Comenius University FMPI](https://zona.fmph.uniba.sk/detail-novinky/back_to_page/fmfi-uk-zona/article/vyzva-na-podavanie-ziadosti-o-jednorazove-mimoriadne-stipendium-call-for-applications-for-ex-9/) | scholarship | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Faculty extraordinary-scholarship call published September 29 2026, closes October 18 2026. Own student-activity grant restricted to first- and second-cycle FMPI students; not the SAIA national programme. |

### United States (US)

| Source | Content | Retrieval status | Evidence / review limits |
|---|---|---|---|
| [USAJOBS Students](https://www.usajobs.gov/HiringPath/Students) | internship, job | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. |
| [NSF REU](https://www.nsf.gov/funding/initiatives/reu/students) | research, internship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [CareerOneStop Scholarship Finder](https://www.careeronestop.org/toolkit/training/find-scholarships.aspx) | scholarship | page_reachable; manual_review_then_html_adapter; not_connected | Page fetched successfully; active call dates still require editorial verification. Excluded from independent-publisher activity count: Guidance, unrelated date, or dated opportunity publication not yet established. |
| [Fulbright US Student](https://us.fulbrightonline.org/) | scholarship | primary_page_reviewed; manual_review_then_html_adapter; not_connected | Official 2027/28 competition is open with a national deadline of October 6 2026 at 5:00 p.m. Eastern Time. Enrolled applicants apply through their institution and may face an earlier campus deadline; eligible U.S. citizens with a bachelor's degree may apply at large. Country and award-specific requirements apply. |
| [NASA Internships](https://www.nasa.gov/learning-resources/internship-programs/) | internship | primary_page_reviewed; reviewed_html_metadata; connected (exact metadata release verified 2026-10-05) | Original programme metadata reviewed 2026-10-05. Page modified 2026-09-28; OSTEM and Pathways have distinct requirements. Programme-overview availability/deadline/eligibility remain unknown; not an individual open vacancy. |

## Evidence and reproducibility

`source-registry.json` records URL, country, operator, category, discovery date, check date, HTTP result, freshness notes and retrieval status for every entry. `feed-checks.json` records actual feed parsing results. Page checks sampled up to 150 KB with an identified review user-agent and 18-second timeout. Accessibility from the review environment can differ from GitHub Actions. Fixtures and automated adapter tests are required before enabling a source.

## Feed access review — 4 October 2026

| Publisher | Robots/access result | Content terms | Decision |
|---|---|---|---|
| Opportunities for Youth | RSS parsed; robots request HTTP 403 | Guessed terms URL returned 403 | Review pending; do not claim publisher permission. |
| Opportunity Desk | RSS parsed; robots request HTTP 403 | Guessed terms URL returned 403 | Review pending; do not claim publisher permission. |
| Scholarships Corner | robots permits feed crawling | Terms reviewed: informational catalogue, refers readers to official providers; no express republication licence found | Minimal factual metadata and attribution only; permission review pending. |
| IKY | robots permits feed crawling | Actual footer-linked terms reviewed 2026-10-05 require prior public republication permission; ordinary hyperlinks allowed | Permission required; keep feed adapter disabled. Mixed institutional notices also require selection. |

A blocked robots request is not permission and a guessed terms URL is not proof that no terms exist. robots rules describe crawl access, not copyright or licence. Feed integration tests establish technical compatibility only. The runtime source manifest is authoritative for which adapters are enabled; this research register never marks ingestion approved. Automated fetches should preserve minimal factual fields, never republish complete source articles, and provide an immediate correction/removal contact.

## Country quality follow-up — 4 October 2026

The resumed pass incorporates the previously recorded Fulbright commission shortlist, freshly re-tests three feeds and reviews additional primary application pages. Research entries identify publishers, not applicant eligibility. Counts use distinct operators with dated or clearly cycle-specific opportunity evidence; primary application rounds in 2026 (including the 2025/26 cycle) and annual calls already closed are valid activity evidence and never treated as open applications. Conflicting source text is preserved as unresolved.

| Country | Research entries | Independent publishers with recent opportunity evidence | Minimum 3 |
|---|---|---|---|
| Austria | 4 | 3 | Yes, editorial activity only |
| Belgium | 4 | 3 | Yes, editorial activity only |
| Bulgaria | 3 | 3 | Yes, editorial activity only |
| Cyprus | 3 | 3 | Yes, editorial activity only |
| Czechia | 4 | 3 | Yes, editorial activity only |
| Germany | 4 | 3 | Yes, editorial activity only |
| Denmark | 4 | 3 | Yes, editorial activity only |
| Estonia | 3 | 3 | Yes, editorial activity only |
| Spain | 3 | 3 | Yes, editorial activity only |
| Finland | 4 | 3 | Yes, editorial activity only |
| France | 4 | 3 | Yes, editorial activity only |
| Greece | 3 | 3 | Yes, editorial activity only |
| Croatia | 5 | 3 | Yes, editorial activity only |
| Hungary | 5 | 3 | Yes, editorial activity only |
| Ireland | 3 | 3 | Yes, editorial activity only |
| Italy | 3 | 3 | Yes, editorial activity only |
| Lithuania | 3 | 3 | Yes, editorial activity only |
| Luxembourg | 5 | 3 | Yes, editorial activity only |
| Latvia | 3 | 3 | Yes, editorial activity only |
| Malta | 4 | 3 | Yes, editorial activity only |
| Netherlands | 4 | 3 | Yes, editorial activity only |
| Poland | 4 | 3 | Yes, editorial activity only |
| Portugal | 4 | 3 | Yes, editorial activity only |
| Romania | 3 | 3 | Yes, editorial activity only |
| Sweden | 4 | 3 | Yes, editorial activity only |
| Slovenia | 3 | 3 | Yes, editorial activity only |
| Slovakia | 5 | 3 | Yes, editorial activity only |
| United States | 5 | 3 | Yes, editorial activity only |

28 of 28 countries meet the editorial activity threshold; 0 remain below three. The register contains 110 entries, of which 94 have recent opportunity evidence. Of these, 93 are eligible evidence entries before country-level operator deduplication: the Croatian science ministry co-publishes the same bilateral call as AMPEU and is explicitly excluded despite being a distinct operator. No country has three operational, policy-reviewed automated adapters. Czech Fulbright, NASA and the exact Portugal and Netherlands programmes have scoped metadata access-policy reviews; IKY requires prior publisher permission under its actual terms. The remaining 105 registry entries retain pending rights-review status. No express reuse licence or publisher approval is claimed.

### Application state distinctions

Recent programme evidence is separate from its application state. The new `last_activity_evidence.application_state` field records reviewed examples: `open_confirmed`, `closed`, `some_calls_open`, `programme_specific_review`, `conditional_late_applications`, `conditional_funding_available`, `conflicting` or `conflicting_deadline`. It is research metadata, not a runtime catalogue deadline calculation. Older entries without this field remain unclassified rather than implicitly open.

### Confirmed current application coverage

The 3–5 active-source target is not established as currently open applications. The existing explicitly classified examples establish at least one open call or open-call subset for 19 distinct national publishers across 17 countries. None of the 28 target countries has three confirmed current publishers in this conservative review. This is a lower bound from `open_confirmed` or `some_calls_open`; unclassified, conditional, conflicting and closed examples are excluded. A zero count means insufficient reviewed evidence, not proof that the country has no open opportunities. No country has three operational policy-reviewed adapters either.

| Country | Publishers with explicitly confirmed open application evidence |
|---|---|
| Austria | 0 |
| Belgium | 1 |
| Bulgaria | 0 |
| Cyprus | 0 |
| Czechia | 1 |
| Germany | 0 |
| Denmark | 2 |
| Estonia | 1 |
| Spain | 0 |
| Finland | 1 |
| France | 1 |
| Greece | 1 |
| Croatia | 0 |
| Hungary | 1 |
| Ireland | 0 |
| Italy | 0 |
| Lithuania | 1 |
| Luxembourg | 1 |
| Latvia | 1 |
| Malta | 0 |
| Netherlands | 1 |
| Poland | 1 |
| Portugal | 1 |
| Romania | 0 |
| Sweden | 1 |
| Slovenia | 0 |
| Slovakia | 2 |
| United States | 1 |

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
| Charles University (CZ) | recent_programme | [Primary URL](https://cuni.cz/UKEN-927.html) | Charles University Mobility Fund autumn call opens October 1 2026; faculty deadlines October 20–30, university closing October 30 at 14:00. Restricted to eligible university students and academic mobility. |
| Study in Denmark (DK) | not_established | [Primary URL](https://studyindenmark.dk/study-options/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| DM and MA Travel Grant (DK) | recent_programme | [Primary URL](https://dm.dk/students/membership/travel-grant/) | Next application round opens November 1 2026; membership/studenteligibility. |
| University of Copenhagen (DK) | current_catalogue | [Primary URL](https://employment.ku.dk/phd/) | Primary doctoral vacancies catalogue shows October 5, 7, 10 and 11 2026 deadlines, including AI and plant-biochemistry fellowships. These are funded research/doctoral positions with per-vacancy qualifications, not general undergraduate scholarships. |
| Harno (EE) | recent_programme | [Primary URL](https://www.harno.ee/en/scholarships-and-grants/scholarships-studying-and-working-estonia/scholarships-international) | Primary page describes national 2026/27 degree/exchange scholarship round. |
| University of Tartu (EE) | current_catalogue | [Primary URL](https://ut.ee/en/open-calls) | Primary open-calls table lists 2026 autumn exchange opportunities and upcoming ENLIGHT Erasmus+ BIP deadline November 15 2026. Tartu student eligibility and the upcoming-call label must be preserved. |
| TalTech (EE) | current_catalogue | [Primary URL](https://taltech.ee/arengufond/stipendiumid/2026-sugis) | Primary TalTech Development Fund autumn 2026 catalogue states application period September 30–October 19 2026, with separate October 12 award exception. Institutional, course and sponsor requirements vary. |
| Study in Finland (FI) | not_established | [Primary URL](https://www.studyinfinland.fi/funding-your-studies/bachelors-and-masters-scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Aalto University (FI) | recent_programme | [Primary URL](https://www.aalto.fi/en/aalto-science-institute-asci/how-to-apply-for-the-asci-international-summer-research-programme) | AScI summer research assistantship 2026 call was open January 7–31 2026, closes January 31 at 23:59 UTC+2. Past summer programme, not currently open; internship/research eligibility differs from tuition-waiver guidance. |
| University of Helsinki (FI) | recent_programme | [Primary URL](https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/tuition-fees-and-scholarship-programme) | 2026 admission financial dates and tuition waiver scheme visible; tuition only, not a living allowance. |
| Campus France (FR) | current_catalogue | [Primary URL](https://campusbourses.campusfrance.org/?lang=en) | Campus Bourses database includes December 31 2026 and January 25 2027 deadlines. |
| 1jeune1solution (FR) | current_catalogue | [Primary URL](https://www.1jeune1solution.gouv.fr/stages) | Primary internshipsearch listings and September 2026 schoolplacement catalogue; perlisting dates stillneeded. |
| Service Civique (FR) | current_catalogue | [Primary URL](https://www.service-civique.gouv.fr/missions/tu-es-l-engagement) | Primary missioncatalogue includes postings October 3 2026 and starting October 15/19 2026. |
| DAAD (DE) | recent_programme | [Primary URL](https://www2.daad.de/deutschland/stipendium/datenbank/de/21148-stipendiendatenbank/?detail=57742121) | Primary research scholarship database shows selection November 2026 and funding February 2027. |
| StipendiumPlus (DE) | guidance_only | [Primary URL](https://stipendiumplus.de/) | Primary portal provides 13 fundingfoundation guidance; no dated 2026 call verified. |
| Rausvonzuhaus (DE) | current_catalogue | [Primary URL](https://www.rausvonzuhaus.de/faq) | Primary FAQ describes Last Minute funded places deadlines within the next  3 months; October 2026 Discover EU session visible. |
| IKY (GR) | current_catalogue | [Primary URL](https://www.iky.gr/en/) | RSS newest October 1 2026; includes notices and results so opportunity selection required. |
| Onassis Foundation (GR) | recent_programme | [Primary URL](https://www.onassis.org/el/initiatives/scholarships/greek-scholars) | 2026/27 call December 16 2025 now past;Greekpage anticipates 2027/28 call December 2026. |
| Fulbright Greece (GR) | recent_programme | [Primary URL](https://www.fulbright.gr/el/news-events/1979-greek-scholarship-program-new-timeline) | 2027/28 Greek citizenship programme has mandatory registration July 1–October 15 2026 and separate application deadline November 15 2026. A single generic deadline would hide the earlier prerequisite. |
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
| University of Latvia (LV) | recent_programme | [Primary URL](https://eszf.lu.lv/en/studies/studies-abroad/erasmus/) | University-managed 2026/27 spring Erasmus exchange application window August 26–September 20 2026 at 20:00, now closed; faculty-specific partner quotas and selection criteria apply. Institutional mobility selection, not a VIAA state-grant re-listing. |
| Riga Technical University (LV) | recent_programme | [Primary URL](https://www.rtu.lv/en/studies/doctoral-studies/scholarships-and-grants) | Own ERDF doctoral research grant fourth selection call closes October 14 2026 at 16:59; work must begin by November 15. Eligible RTU/academy/partner doctoral students only. This independently managed programme replaces the previously duplicated VIAA state-grant evidence. |
| Study in Lithuania (LT) | recent_programme | [Primary URL](https://studyin.lt/scholarships/) | Primarycatalogue 2026 calls includes Vilnius April 1 2026 deadline now past; also quarterly university updates. |
| Vilnius University (LT) | recent_programme | [Primary URL](https://www.vu.lt/en/students/services-for-students/finance/tuition-fee-waiver-for-full-time-master-degree-studies) | Own full-time masters tuition-waiver call states April 1 2026 deadline and May selection. Closed institutional fee support, not living-cost funding or the national Study in Lithuania grant. |
| Kaunas University of Technology (LT) | current_catalogue | [Primary URL](https://students.ktu.edu/finance/) | Primary KTU 2026/27 financial-support calendar lists own Talent/Breakthrough scholarship applications September 11–25 2026, now closed; sponsor grants and doctoral funds have distinct windows. This university-specific evidence replaces the previously duplicated national grant notice. |
| University of Luxembourg (LU) | recent_programme | [Primary URL](https://www.uni.lu/life-en/financial-support/scholarships/guillaume-dupaix-international-scholarship/) | Primary publisher search index records Guillaume Dupaix application deadline March 24 2026; closed annual scheme. Direct page currently returns challenge content, so indexed evidence is not technical adapter readiness. |
| Luxembourg MFA Internships (LU) | not_established | [Primary URL](https://mae.gouvernement.lu/en/directions-du-ministere/finances-ressources-humaines/stages.html) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Luxembourg Cooperation (LU) | not_established | [Primary URL](https://cooperation.gouvernement.lu/en/s-engager.html) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| MyScholarship (MT) | not_established | [Primary URL](https://myscholarship.gov.mt/en/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| University of Malta (MT) | recent_programme | [Primary URL](https://www.um.edu.mt/study/feesfunding/scholarships/postgraduateissischolarships/) | Primary Islands and Small States scholarship call deadline July 1 2026 at 14:00 CEST; now closed. Nationality restricted to eligible Small Island Developing States; no current open call inferred. |
| Malta Student Grants (MT) | recent_programme | [Primary URL](https://stipendsandgrants.gov.mt/en/) | Primary page says 2026/27 Stipendsand Grantsapplications nowopen; localeligibilityrules. |
| Study in NL (NL) | not_established | [Primary URL](https://www.studyinnl.org/finances/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Magnet.me (NL) | current_catalogue | [Primary URL](https://magnet.me/en/internships/netherlands) | Primary HTML internship records showresponse Deadline October 4 2026 and February 2027 start dates. |
| Leiden University (NL) | recent_programme | [Primary URL](https://www.universiteitleiden.nl/en/scholarships/sea/leiden-university-excellence-scholarship-lexs) | Primary LEx Spage deadline December 1 2026; nationality/programmerestrictions. |
| Eurodesk Polska (PL) | current_catalogue | [Primary URL](https://www.eurodesk.pl/granty) | Primary grant catalogue has October 4/6 2026 deadlines and November 30 grants; publisher FRSE. |
| NAWA (PL) | recent_programme | [Primary URL](https://nawa.gov.pl/en/nawa/news/call-for-applications-banach-nawa-2026) | Primary Banach NAWA 2026 call deadline May 8 2026 and 2026/27 intake; closed. |
| FRSE (PL) | not_established | [Primary URL](https://www.frse.org.pl/) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| IPDJ (PT) | not_established | [Primary URL](https://ipdj.gov.pt/candidaturas) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| FCT (PT) | recent_programme | [Primary URL](https://www.fct.pt/en/financiamento/programas-de-financiamento/bolsas/) | Primary Ph Dstudentship overviewupdated March 30 2026; postgraduate focus; individualcalls need inspection. |
| DGES (PT) | recent_programme | [Primary URL](https://dges.gov.pt/pt/pagina/prazos-de-candidatura) | Primary 2026/27 need-based grant page gives August 14–October 2 2026 standard window and later proportional awards October 3–May 31, plus enrollment-dependent 20-working-day exceptions. Eligibility and award proration require careful interpretation. |
| Study in Romania (RO) | recent_programme | [Primary URL](https://studyinromania.gov.ro/scholarships) | 2026/27 national scholarshipcycle confirmed; site newsstatesapplicationsclosed. |
| Fulbright Romania (RO) | recent_programme | [Primary URL](https://fulbright.ro/the-2027-2028-fulbright-us-student-competition/) | Primary 2027/28 USstudentcall deadline October 6 2026. |
| ANPCDEFP (RO) | recent_programme | [Primary URL](https://www.anpcdefp.ro/ce-facem/ne-implicam/erasmus-si-fse/) | Erasmus+/ESF+supportpage updated September 16 2026 for students 18-29 with fewer opportunities; institution-mediated. |
| SAIA Grants (SK) | current_catalogue | [Primary URL](https://grants.saia.sk/Pages/ProgramZoznam.aspx?s=true) | Primary database shows NSPstudentdeadline October 31 2026 16:00. |
| National Scholarship Programme (SK) | recent_programme | [Primary URL](https://www.scholarships.sk/en/main/o-programe) | Same SAIAprogramme as database with October 31 2026 round; not an additional independent publisher. |
| Study in Slovakia (SK) | not_established | [Primary URL](https://www.studyinslovakia.saia.sk/en/main/scholarships) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Public Scholarship Fund (SI) | current_catalogue | [Primary URL](https://www.srips-rs.si/en/sklad/o-nas/javne-objave/javni-razpisi) | Primary public-calls list includes 2026/27 Zois and diaspora scholarships alongside explicitly expired 2026 calls. Relative open-days indicators need detail deadlines before individual records are marked open. |
| CMEPIUS (SI) | recent_programme | [Primary URL](https://www.cmepius.si/mednarodno-sodelovanje/moznosti-sodelovanja/bilaterale/) | Bilateralprogramme list 2026/27 and 2027/28 calls; manylisteddeadlinespast, inspect each. |
| University of Ljubljana (SI) | recent_programme | [Primary URL](https://www.aluo.uni-lj.si/en/internationally/erasmus-traineeship/) | University-managed 2026/27 traineeship funding call accepts applications while funds last, at latest July 1 2027; mobility runs October 1 2026–September 30 2027. Signed student/employer/department learning agreement required. Distinct institutional selection, not a copied SRIPS scholarship call. |
| INJUVE (ES) | current_catalogue | [Primary URL](https://www.injuve.es/convocatorias/becas) | Primary SEPI 107 internshipslisting September 30 2026 deadline October 7 2026. |
| Fundación Carolina (ES) | recent_programme | [Primary URL](https://www.fundacioncarolina.es/) | Primary home lists 2026/27 scholarship call; annual programme, checkper call openstate. |
| la Caixa Foundation (ES) | current_catalogue | [Primary URL](https://fundacionlacaixa.org/es/becas) | Primary scholarships list includesopen research call deadline October 7 2026 andclosed undergrad May 29 2026. |
| Swedish Institute (SE) | recent_programme | [Primary URL](https://apply-scholarships.si.se/) | Official application portal links eligible 2026/27 programmes and December 22 2025 call-date notice. Portal text mixes 2025/26 and 2026/27 in its notice; no current open status or 2027 dates inferred. |
| Study in Sweden (SE) | guidance_updated | [Primary URL](https://studyinsweden.se/scholarships/) | April 20 2026 metadata representsuniversity directory update, notscholarship call. |
| Lund University (SE) | recent_programme | [Primary URL](https://www.lunduniversity.lu.se/study/admission-degree-studies/scholarships-and-awards/lund-university-global-scholarship) | Primary Lund Global Scholarship states applications closed and February 16 2026 deadline. Tuition-only funding for fee-paying non-EU/EEA students; living costs excluded. |
| USAJOBS Students (US) | current_catalogue | [Primary URL](https://recentgrad.usajobs.gov/search/results) | Primaryrecentgraduatecatalogue lists September 22–October 6 2026 vacancy and January 2026–January 2027 ongoingcall. |
| NSF REU (US) | not_established | [Primary URL](https://www.nsf.gov/funding/initiatives/reu/students) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| CareerOneStop Scholarship Finder (US) | not_established | [Primary URL](https://www.careeronestop.org/toolkit/training/find-scholarships.aspx) | No reliable dated opportunity publication manually established. HTTP availability does not establish update activity. |
| Fulbright US Student (US) | recent_programme | [Primary URL](https://us.fulbrightonline.org/) | Official 2027/28 competition is open with a national deadline of October 6 2026 at 5:00 p.m. Eastern Time. Institution-based applicants may face an earlier campus deadline. |
| NASA Internships (US) | recent_programme | [Primary URL](https://www.nasa.gov/learning-resources/internship-programs/) | Programme page modified September 28 2026; OSTEM overview lists Summer 2027 March 1 and Fall 2027 May 24 deadlines. Distinct Pathways programme has separate requirements. Metadata listing remains a programme overview with unknown individual-call availability/deadline/eligibility. |
| Opportunities for Youth (GLOBAL) | current_catalogue | [Primary URL](https://opportunitiesforyouth.org/) | Parsed RSSnewest October 4 2026;international aggregator. |
| Opportunity Desk (GLOBAL) | current_catalogue | [Primary URL](https://opportunitydesk.org/) | Parsed RSSnewest October 3 2026;international aggregator. |
| Scholarships Corner (GLOBAL) | current_catalogue | [Primary URL](https://scholarshipscorner.website/) | Parsed RSSnewest October 4 2026;international aggregator. |
| Fulbright Austria (AT) | recent_programme | [Primary URL](https://www.fulbright.at/programs/in-austria/students/full-time-study-research-grants) | US student awards list March 31–October 7 2026 application window for October 2027 start. Other Fulbright national sites show October 6; confirm the programme-specific closing time before applying. |
| Fulbright Belgium / Luxembourg (BE) | recent_programme | [Primary URL](https://www.fulbright.be/news/2027-28-competition-open/) | Official 2027/28 competition announcement sets December 1 2026, noon CET closing date. The shared commission serves Belgian and Luxembourgish applicants; counted once under Belgium. |
| Fulbright Commission Czech Republic (CZ) | recent_programme | [Primary URL](https://fulbright.gov.cz/stipendia/stipendium-pro-postgradualni-studium/) | Primary postgraduate page links 2027/28 application documents and September 2 2026 scholarship webinars. Degree and research application windows differ; a recent feed is not proof every programme is open. |
| Fulbright Germany (DE) | recent_programme | [Primary URL](https://www.fulbright.de/stipendien/programm/studienstipendium-uni-und-haw) | 2027/28 masters scheme verified, but page conflicts: opening paragraph says open while application-deadline field says closed for 2027 and next call in spring 2027 for 2028. Treat open status as unresolved; recent programme evidence only. |
| Fulbright Denmark (DK) | recent_programme | [Primary URL](https://fulbrightcenter.dk/go-to-the-us/fulbright-grants-for-danish-students/apply/) | Primary Danish student application page states February 17 2027 at noon for Fall 2027/Spring 2028 awards. Check Danish citizenship, university and acceptance requirements. |
| Fulbright Finland Foundation (FI) | recent_programme | [Primary URL](https://www.fulbright.fi/grant-programs-to-us/grants-masters-studies-us/fulbright-finnish-language-and-culture-teaching-assistant-program-flta) | 2027/28 Finnish FLTA application round explicitly open; ends October 25 2026, with information session October 6. Finnish citizenship and bachelor-level education required; other October 1 calls are already closed. |
| Fulbright France (FR) | recent_programme | [Primary URL](https://fulbright-france.org/fr/node/25) | Official student 2027/28 call explicitly open; deadline December 1 2026 at 23:59 Paris time. French citizenship and masters/PhD degree admission requirements apply; first-year funding only. |
| International Visegrad Fund (GLOBAL) | recent_programme | [Primary URL](https://www.visegradfund.org/scholarships) | Regional fellowship deadline November 30 2026; OSA research fellowship deadline November 10 2026. Masters scholarship next opens January 1 2027. Regional publisher is not counted as a national publisher for each covered country. |
| Fulbright Hungary (HU) | recent_programme | [Primary URL](https://fulbright.hu/) | 2027/28 research/lecturing deadline October 15 2026 and FLTA deadline October 31; postgraduate deadline May 15 has passed. Preserve distinct student, scholar and language-teacher audiences. |
| Fulbright Netherlands (NL) | recent_programme | [Primary URL](https://fulbright.nl/naar-de-vs/promovendi/fulbright-beurzen-voor-promovendi/) | 2027/28 doctoral research round explicitly open; deadline December 1 2026 at noon Dutch time. Dutch citizenship and affiliation to a Dutch university/research institute required; maximum support is partial, not a full-cost guarantee. |
| Fulbright Poland (PL) | recent_programme | [Primary URL](https://fulbright.edu.pl/junior-research/) | Junior Research Award 2027/28 applications May 12–October 13 2026 at 15:00 Polish time; primary page explicitly open. Polish citizenship and a doctoral dissertation at a Polish institution required. |
| Fulbright Portugal (PT) | recent_programme | [Primary URL](https://www.fulbright.pt/bolsas/bolsa-fulbright-para-mestrado/) | 2027/28 masters applications run October 1 2026–January 15 2027, 23:59 Lisbon time. Portuguese citizenship and US university admission required; award supports the first year up to the stated limit. |
| Fulbright Sweden (SE) | recent_programme | [Primary URL](https://www.fulbright.se/scholar-program/) | Swedish Scholar 2027/28 round opens August 15 2026 and closes January 11 2027. Swedish citizenship, US host affiliation and doctoral/terminal degree by departure required; includes early-career scholars. |
| Fulbright Slovakia (SK) | recent_programme | [Primary URL](https://fulbright.sk/en/us-student) | Primary US student 2027/28 call deadline October 6 2026 at 17:00 ET; separate Slovak scholar programme has October 15 deadline. US and Slovak applicant programmes must not be conflated. |
| Corvinus University of Budapest (HU) | recent_programme | [Primary URL](https://www.uni-corvinus.hu/post/hir/applications-are-now-open-for-the-study-scholarship-and-student-organization-scholarship/?lang=en) | Own 2026/27 Study and Student Association scholarships had September 15 2026 noon closing date. Closed call with university-specific active student and association requirements, independent of Tempus national schemes. |
| Comenius University FMPI (SK) | recent_programme | [Primary URL](https://zona.fmph.uniba.sk/detail-novinky/back_to_page/fmfi-uk-zona/article/vyzva-na-podavanie-ziadosti-o-jednorazove-mimoriadne-stipendium-call-for-applications-for-ex-9/) | Faculty extraordinary-scholarship call published September 29 2026, closes October 18 2026. Own student-activity grant restricted to first- and second-cycle FMPI students; not the SAIA national programme. |
| University of Zagreb (HR) | recent_programme | [Primary URL](https://www.unizg.hr/studiji-i-studiranje/upisi-stipendije-priznavanja/stipendije/) | Own 2025/26 scholarship round ran December 17 2025–January 16 2026; primary catalogue states March 17 decision awarding 400 scholarships and April 28 amendment. Closed, institution-specific scheme distinct from AMPEU bilateral awards. |
| Croatian Ministry of Demography and Immigration (HR) | recent_programme | [Primary URL](https://mdu.gov.hr/javni-poziv-za-dodjelu-stipendija-za-ucenje-hrvatskoga-jezika-u-republici-hrvatskoj-za-akademsku-godinu-2026-2027-7582/7582) | Primary Croatian-language 2026/27 call published June 19 2026 for up to 700 awards; deadline July 6 2026, now closed. Diaspora/descendant and other stated eligibility restrictions apply; distinct from science-ministry/AMPEU bilateral programme. |
| Luxembourg National Research Fund (FNR) (LU) | recent_programme | [Primary URL](https://www.fnr.lu/funding-instruments/afdoc/) | AFdoc doctoral-funding first call launched September 2026; closes November 25 2026 at 14:00 CET. Masters-qualified candidates need the specified Luxembourg link and eligible host; grants fund host employment, not tuition. |
| Volontaires.lu / National Youth Service (LU) | recent_programme | [Primary URL](https://www.volontaires.lu/missions-svn/volontaire-en-soutien-a-lorganisation-devenements-et-a-la-communication/) | Primary SNJ national-service mission at Partage Luxembourg lists September 7 2026–June 6 2027, communications/event duties and required French. Mission dates are service duration, not application deadlines; availability unconfirmed. |
| Arts Council Malta (MT) | recent_programme | [Primary URL](https://artscouncilmalta.gov.mt/en/funding-and-grants/artivisti/) | Artivisti creative-development call had March 30 2026 noon deadline; awards/results now published. Youth arts initiative jointly administered with Aġenzija Żgħażagħ; closed call, distinct from education-ministry student grants. |

### Explicit exclusions

General guidance, footer dates and unrelated institutional news are excluded from activity counts. Eurodesk Polska and FRSE share a publisher; grants.at/OeAD, Tempus programmes and SAIA programmes also share publishers. The Croatian ministry and AMPEU co-publish a bilateral call. The original RTU state-grant and KTU national-grant notices duplicate VIAA and Study in Lithuania. Their updated evidence instead documents independently administered RTU doctoral research grants and KTU Talent/Breakthrough scholarships. Their own programmes now count; the national re-listings still do not.

The Belgium/Luxembourg Fulbright commission is a single source, stored under Belgium, even though Luxembourg citizens can apply. Visegrad is regional and not repeated as a national publisher for every service country. No cross-country count is inferred from an opportunity destination.

Germany Fulbright has contradictory open/closed text on the same current student page; no open application is asserted. Austria lists an October 7 closing date while national US Fulbright pages use October 6; the discrepancy remains explicit. Swedish Institute portal notice contains mixed academic-year labels; no new date is inferred. Luxembourg scholarship evidence was retrieved from the primary publisher search index while direct page content was challenged; this is editorial evidence only.

### Fulbright metadata adapter follow-up — 4 October 2026

Access, reuse language and opportunity relevance were reviewed separately. Fresh HTTP requests returned 200 for the three official homepages, robots files and RSS feeds. All three homepages advertise their exact feed through `rel="alternate"` with RSS content type. Each feed contains ten items. Hourly syndication metadata describes feed updates and does not establish a reuse licence. No feed channel/item copyright, rights or licence element was found.

| Source | Primary access and policy evidence | Editorial decision |
|---|---|---|
| Netherlands | [Homepage](https://fulbright.nl/) advertises [RSS](https://fulbright.nl/feed/). [Robots](https://fulbright.nl/robots.txt) contains `User-agent: *` and `Crawl-delay: 10`, without a disallow rule. The linked [privacy declaration](https://fulbright.nl/over-ons/privacyverklaring/) concerns personal-data handling; no express title/link indexing licence or prohibition found in this reviewed scope. | All ten items are alumni/blog stories, despite grant words in their descriptions. Zero qualified opportunity calls. Keep RSS ingestion disabled for relevance; a programme-page HTML adapter is separate work. |
| Portugal | [Homepage](https://www.fulbright.pt/) advertises [RSS](https://www.fulbright.pt/feed/). [Robots](https://www.fulbright.pt/robots.txt) disallows `/wp-admin/`, allows `/wp-admin/admin-ajax.php`, and lists a sitemap. The [30-page sitemap](https://www.fulbright.pt/wp-sitemap-posts-page-1.xml) exposes a [privacy page](https://www.fulbright.pt/politica-privacidade/) not linked in the inspected footer; its text concerns personal data. The footer retains ordinary copyright reservation; no express title/link indexing prohibition found in these inspected pages. | Seven experience stories, one partnership announcement, one recipient list and a September 16 fair already past on review date. Zero qualified scholarship calls. Keep RSS ingestion disabled for relevance; the [scholarship catalogue](https://www.fulbright.pt/bolsas/) requires a separately tested adapter. |
| Czech Republic | [Homepage](https://fulbright.gov.cz/) advertises [RSS](https://fulbright.gov.cz/feed/). [Robots](https://fulbright.gov.cz/robots.txt) disallows `/wp-admin/`, allows `/wp-admin/admin-ajax.php`; `noindex, follow` was a response header on robots.txt itself, not the feed. [GDPR](https://fulbright.gov.cz/wp-content/uploads/2024/07/GDPR.pdf), [media information](https://fulbright.gov.cz/pro-media/zakladni-informace/) and [press kit](https://fulbright.gov.cz/pro-media/press-kit/) were inspected. No express title/link indexing ban or RSS-specific licence established; ordinary copyright reservation remains. | Two reviewed programme/grant notices; eight news, webinar, alumni, podcast or office notices excluded. Bounded title/link/publication-date indexing is feasible under the project's factual metadata policy. The trusted adapter passed hosted CI and published two metadata records with healthy source status in the immutable fork release on 5 October 2026. |

No express reuse licence or publisher approval is claimed. Absence of an express licence is an uncertainty, not invented permission and not an automatic requirement for new user approval. Ordinary copyright reservations alone are not treated here as an express title/link indexing ban. This is an engineering acquisition-policy assessment limited to the inspected pages, not a blanket legal conclusion. Source terms remain authoritative.

The Czech allowlist contains only these exact canonical item URLs:

| Reviewed item | Publication and programme interpretation | Catalogue constraints |
|---|---|---|
| [Institutional Intercountry travel grant notice](https://fulbright.gov.cz/intercountry-travel-grant-pozvete-si-americkeho-vedce-na-par-dni/) | 3 September 2026, 06:59:43 UTC. The linked [programme detail](https://fulbright.gov.cz/pro-skoly-a-univerzity/hostovani-americkych-akademiku/) explains that Czech higher-education/research institutions invite US Fulbright scholars already in Europe during 2026/27. Travel support and host responsibilities differ. | Category grants; institution-restricted grant, not unrestricted youth eligibility. No deadline or eligible-country inference. |
| [2027/28 programme-cycle overview](https://fulbright.gov.cz/nemusite-letet-na-mesic-muzete-letet-na-fulbrighta/) | 1 April 2026, 07:03:50 UTC. Announces that selection cycles opened April 1 and points to separate details for students, scholars and professionals. | Category scholarships; programme overview, not evidence that every individual call remains open in October. |

Preserve original Czech title, canonical original link and valid publication date. Set summary to an empty string, deadline to null, availability to unknown and host/eligible country arrays to empty. Do not publish article prose or images. The generic `Novinky` category and broad scholarship keywords also match excluded webinar/alumni content; they cannot determine selection. Unreviewed items remain excluded until primary-content review expands the exact allowlist. Sanitized fixtures retain title/link/date/categories only.

Czech runtime source `fulbright-czech-programmes`, adapter `reviewed-rss`, is operational. Hosted [main run 37263518031](https://github.com/fmarslan/YouthOpp-data-pipeline/actions/runs/37263518031) passed 19 tests, durable-state recovery and collection; [immutable release catalog-37263518031-1](https://github.com/fmarslan/YouthOpp-data-pipeline/releases/tag/catalog-37263518031-1) was published on 5 October 2026 at 04:26:39 UTC with 32 total records, including the two reviewed Czech metadata records, and all four sources healthy. This verifies data collection and publication; hosted website acceptance is separate. No publisher-contact or owner-approval action is presently required by documented policy for this scoped metadata operation. Full descriptions/images, newly restrictive terms or blocked access would require a separate acquisition decision. NL/PT currently have a relevance blocker, not missing consent. Poll conservatively with a clear project User-Agent, honor rate limits and keep at least ten seconds between Netherlands same-host requests.

### Remaining implementation gaps

The user’s target is 3–5 high-quality, active researched sources per country where genuinely verifiable. The register supports at least three distinct publishers with dated editorial activity in all 28 countries; this includes closed annual calls and is not equivalent to three currently open application publishers. The conservative confirmed-open coverage gaps remain explicit above. Adapter counts are a separate implementation measure: all 28 countries remain below three independently tested, operational, policy-reviewed automated adapters with health reporting. The researched-source target does not require three adapters per country, nor does it require enabling every candidate in this discovery register.

| Work | Next concrete action |
|---|---|
| Feed selection | Maintain the verified Czech two-record metadata selection and monitor source health. Keep NL/PT RSS disabled while their current feeds contain no qualified calls. The exact Portugal master’s overview is production verified separately. The Netherlands doctoral overview has a fresh scoped access/identity review and uses a separate exact-page adapter; production verification is recorded below. Expand exact allowlists only after new primary content review. |
| HTML adapters | Inspect exact list/detail URLs, robots, terms, crawl rates and fixtures for newly reviewed university, FNR, ministry, youth and arts publishers. Do not bypass access challenges. |
| Call validity | Recheck closed annual programmes, finite funding, faculty sub-deadlines and unresolved publisher contradictions before showing a record as open. Mission duration is not an application deadline. |
| Distinct programme checks | Exclude national grant re-listings and co-published calls even where several independently hosted university pages describe them. |
| Evidence renewal | Revisit these date-stamped findings in scheduled source review; the register is a snapshot and must not claim indefinite activity. |


### Exact Portugal programme-page selection — 5 October 2026

The separately reviewed master's programme now has a trusted exact canonical/Open Graph title/link adapter; this does not activate the unrelated Portugal RSS. The [dated access review](access-review-2026-10-05.md) records GET200, robots scope, privacy-only policy text, all-rights-reserved footer and the absence of express reuse permission. This scoped project assessment covers factual metadata only, not source prose or publisher approval. Original publication is unavailable and stays null; the observed modification timestamp is never publication. The record stays a scholarship programme overview with unknown application state, deadline and eligibility. Current window evidence is separate research evidence. Actual producer [run 37270813364](https://github.com/fmarslan/YouthOpp-data-pipeline/actions/runs/37270813364) and [immutable release catalog-37270813364-1](https://github.com/fmarslan/YouthOpp-data-pipeline/releases/tag/catalog-37270813364-1) verify the Portugal metadata record, with all six integrated sources healthy at 06:07:29 UTC. This is dated production evidence; current source health comes from each later release. Website acceptance remains separate.


### Exact Netherlands programme-page selection — 5 October 2026

The [doctoral programme](https://fulbright.nl/naar-de-vs/promovendi/fulbright-beurzen-voor-promovendi/) passed a fresh scoped title/link access and identity review. Current direct HTML provides matching canonical/Open Graph URL and one original title; publication stays null. Use the existing exact Open Graph adapter with the same programme-overview/unknown-application constraints as Portugal; see [dated access review](access-review-2026-10-05.md). The Netherlands news feed remains excluded for relevance. One exact programme adapter does not establish three operational publishers per country, unrestricted youth eligibility or publisher approval. Producer verification is recorded below.

### Research and operational state

The 4 October country research snapshot and later recorded access dates describe editorial evidence. `acquisition_state: connected` is separately supported by a dated producer run/release, not inferred from a reachable page or local test. Czech, NASA and Portugal metadata have such evidence in [run 37270813364](https://github.com/fmarslan/YouthOpp-data-pipeline/actions/runs/37270813364) and [release catalog-37270813364-1](https://github.com/fmarslan/YouthOpp-data-pipeline/releases/tag/catalog-37270813364-1). The runtime source directory joins each adapter to the research source and reports the latest collection health; a later fetch failure preserves records and does not silently rewrite this historical verification. Operational access review is not express publisher permission, and editorial application-window evidence is not catalogue availability.


### Finite follow-up scope and ongoing backlog

The named bounded follow-ups from this research stage are the reviewed Czech feed selection, NASA overview and exact Portugal/Netherlands programme pages. Each needs a verified producer release before an operational claim; the Netherlands producer release is now independently verified below. IKY remains disabled because its publisher terms explicitly require prior permission for public republication. This project has not requested or obtained that permission.

Further HTML adapters across the remaining discovery candidates, additional exact calls, and periodic evidence renewal are ongoing maintenance/backlog choices. They are not a claim that three open calls or three adapters now exist in every country, and they are not an indefinite gate requiring all 110 candidate publishers to be integrated. Newly restrictive terms, access challenges and contradictory application dates remain explicit limits rather than fabricated coverage.


### Netherlands operational verification — 5 October 2026, 06:29 UTC

The actual merged-main [producer run 37272654737](https://github.com/fmarslan/YouthOpp-data-pipeline/actions/runs/37272654737) passed 44 tests and published [immutable release catalog-37272654737-1](https://github.com/fmarslan/YouthOpp-data-pipeline/releases/tag/catalog-37272654737-1) at 06:29:36 UTC. The downloaded Actions artifact and all three extracted assets match GitHub artifact/release digests and the integrity manifest. The catalog has 37 retained records, with all seven source collections healthy in this dated release; current collection health is established separately by each later run.

The exact Netherlands record `1f4def960c9cca6ae7111473` preserves the original title/link, null publication, empty summary, scholarships/programme-overview, unknown application status/deadline and empty host/eligible countries. `NL` is publisher geography only. Its exact research join and category/kind memberships were verified. Catalog size is 324,910 bytes and SHA256 is `8c93f5d91fb41e2c0eeb4bcd12f7ec2afd70240b4db457388040b30c260e9616`. This is measured producer collection/publication; website consumption and public hosted acceptance remain separate. The general Netherlands RSS remains excluded for relevance, and no publisher approval or currently open youth call is inferred.
