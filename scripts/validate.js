import { readFile } from 'node:fs/promises';
const manifests=JSON.parse(await readFile('data/sources/sources.json','utf8'));const ids=new Set();
for(const item of manifests){
 if(!/^[a-z0-9-]+$/.test(item.source)||ids.has(item.source))throw new Error('Invalid or duplicate source');ids.add(item.source);
 for(const field of ['source_url','website_url'])if(new URL(item[field]).protocol!=='https:' || new URL(item[field]).username || new URL(item[field]).password || /^(localhost|127\.|0\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.|169\.254\.|\[)/.test(new URL(item[field]).hostname))throw new Error('Source requires HTTPS');
 if(typeof item.enabled!=='boolean'||!['rss','reviewed-rss'].includes(item.adapter)||typeof item.language!=='string')throw new Error('Invalid adapter manifest');
 if(item.adapter==='reviewed-rss') {
  if(!Array.isArray(item.reviewed_items)||!item.reviewed_items.length)throw new Error('Reviewed RSS requires explicit item allowlist');
  const reviewedUrls=new Set();
  for(const reviewed of item.reviewed_items) {
   const url=new URL(reviewed.url);
   if(url.protocol!=='https:'||url.username||url.password||url.hostname!==new URL(item.website_url).hostname||reviewedUrls.has(url.href))throw new Error('Invalid reviewed item URL');
   reviewedUrls.add(url.href);
   if(!['scholarships','grants','other'].includes(reviewed.category)||!['programme-overview','institutional-grant'].includes(reviewed.kind))throw new Error('Invalid reviewed item classification');
  }
 }
}
console.log(`Validated ${ids.size} sources`);
