import Parser from 'rss-parser';
import { createHash } from 'node:crypto';
export function plainText(value = '') {
  return String(value).replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}
export function normalizeItem(item, manifest, now) {
  const url = new URL(item.link).href;
  if (!['https:', 'http:'].includes(new URL(url).protocol)) throw new Error('Unsafe record URL');
  const title = plainText(item.title);
  if (!title) throw new Error('Missing title');
  const tags = [...new Set([...(item.categories || []).filter(x=>typeof x==='string'), ...(manifest.default_tags || [])].map(plainText).filter(Boolean))];
  const category = tags.some(x => /scholarship|burs/i.test(x)) ? 'scholarships' : tags.some(x => /internship/i.test(x)) ? 'internships' : tags.some(x => /volunteer/i.test(x)) ? 'volunteering' : tags.some(x => /fellowship/i.test(x)) ? 'fellowships' : tags.some(x => /job|career/i.test(x)) ? 'jobs' : 'other';
  const published = item.isoDate || item.pubDate;
  return { id: createHash('sha256').update(`${manifest.source}|${url}`).digest('hex').slice(0,24), title, url, source: manifest.source, source_url: manifest.source_url, published_at: published && Number.isFinite(Date.parse(published)) ? new Date(published).toISOString() : null, summary: plainText(item.contentSnippet || item.content || item.summary).slice(0,600), tags, location:null, deadline:null, language:manifest.language || null, category, host_countries:[], eligible_countries:[], created_at:now, updated_at:now, first_seen_at:now, last_seen_at:now, last_checked_at:now, status:'unknown' };
}
export async function collect({ manifest, fetchText, now }) {
  const feed = await new Parser().parseString(await fetchText(manifest.source_url));
  if (!feed.items.length) throw new Error('Empty feed: preserve last successful records');
  return feed.items.map(item => normalizeItem(item, manifest, now));
}
