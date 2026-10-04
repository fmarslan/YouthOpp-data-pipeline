import { readFile } from 'node:fs/promises';
const manifests=JSON.parse(await readFile('data/sources/sources.json','utf8'));const ids=new Set();
for(const item of manifests){
 if(!/^[a-z0-9-]+$/.test(item.source)||ids.has(item.source))throw new Error('Invalid or duplicate source');ids.add(item.source);
 for(const field of ['source_url','website_url'])if(new URL(item[field]).protocol!=='https:' || new URL(item[field]).username || new URL(item[field]).password || /^(localhost|127\.|0\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.|169\.254\.|\[)/.test(new URL(item[field]).hostname))throw new Error('Source requires HTTPS');
 if(typeof item.enabled!=='boolean'||item.adapter!=='rss'||typeof item.language!=='string')throw new Error('Invalid adapter manifest');
}
console.log(`Validated ${ids.size} sources`);
