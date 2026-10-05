import { normalizeItem } from './rss.js';

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map(match => [match[1].toLowerCase(), match[3]]));
}

export async function collect({ manifest, fetchText, now }) {
  const html = await fetchText(manifest.source_url);
  const selected = manifest.reviewed_page;
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0])).filter(attrs => attrs.rel?.toLowerCase().split(/\s+/).includes('canonical'));
  if (canonicals.length !== 1 || canonicals[0].href !== selected.url) throw new Error('Reviewed HTML canonical does not match selected programme URL');

  const pages = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (attributes(match[1]).type?.toLowerCase() !== 'application/ld+json') continue;
    const structured = JSON.parse(match[2]);
    const nodes = Array.isArray(structured) ? structured : structured['@graph'] || [structured];
    for (const node of nodes) {
      const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
      if (types.includes('WebPage') && node.url === selected.url) pages.push(node);
    }
  }
  if (pages.length !== 1) throw new Error('Reviewed HTML requires one exact programme WebPage');
  const page = pages[0];
  if (typeof page.name !== 'string' || !page.name.trim() || typeof page.datePublished !== 'string' || !Number.isFinite(Date.parse(page.datePublished))) throw new Error('Reviewed HTML programme title or publication date missing');

  // Keep the publisher's original publication date; modification is not publication.
  const record = normalizeItem({ title: page.name, link: selected.url, isoDate: page.datePublished }, { ...manifest, default_tags: [] }, now);
  return [{ ...record, summary: '', category: selected.category, categories: [selected.category], kind: selected.kind, tags: [selected.kind], classification: { method: 'editorial-review', status: 'classified', evidence: [selected.url] } }];
}
