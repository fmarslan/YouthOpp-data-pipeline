import { readFile } from 'node:fs/promises';
const manifests=JSON.parse(await readFile('data/sources/sources.json','utf8'));const ids=new Set();
for(const item of manifests){
 if(!/^[a-z0-9-]+$/.test(item.source)||ids.has(item.source))throw new Error('Invalid or duplicate source');ids.add(item.source);
 for(const field of ['source_url','website_url'])if(new URL(item[field]).protocol!=='https:')throw new Error('Source requires HTTPS');
 if(typeof item.enabled!=='boolean'||item.adapter!=='rss'||typeof item.language!=='string')throw new Error('Invalid adapter manifest');
}
console.log(`Validated ${ids.size} sources`);
