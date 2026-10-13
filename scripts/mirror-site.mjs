import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';

const origin = 'http://www.postcodelite.com/';
const output = join(process.cwd(), 'public');
const pages = [
  'default.htm', 'DesktopSoftware.htm', 'SDK.htm', 'WebIntegration.htm',
  'Purchase.htm', 'Prices.htm', 'Terms.htm', 'FAQ.htm', 'contact.htm',
  'privacy-policy.htm', 'Software/SDK_basics.htm', 'Software/SDK_Street.htm',
  'Software/SDK_Full.htm', 'Software/SDK_FullDiag.htm', 'Software/SDK_Long.htm',
  'Software/AjaxASPstreet/AJAXStreet.htm',
  'Software/AjaxASPstreet/AJAXStreet_PHP.htm',
  'Software/AjaxASPstreet/AJAXStreet_ASP.htm',
  'Software/AjaxASPstreet/AJAXStreet_NET.htm',
  'Software/AjaxASPFull/AJAXFull.htm',
  'Software/AjaxASPFull/AJAXFull_PHP.htm',
  'Software/AjaxASPFull/AJAXFull_ASP.htm',
  'Software/AjaxASPFull/AJAXFull_NET.htm', 'Software/HTTPXML.htm',
  'Software/HTTP_basics.htm', 'Software/HTTP_Street.htm',
  'Software/HTTP_Full.htm', 'Software/HTTP_Long.htm'
];

const assets = new Set(['style.css']);

function removePhone(html) {
  return html
    .replace(/\s*<img[^>]+Postcode_Lite_Phone\.gif[^>]*\/?>/gi, '')
    .replace(/<h2[^>]*>Contact by Phone\s*<\/h2>[\s\S]*?(?=<h2[^>]*>Remote Support<\/h2>)/gi, '')
    .replace(/Our support is offered by phone during office hours or contacting us using/gi, 'Our support is offered by contacting us using')
    .replace(/If you want us to call you back then please provide your\s+name and number/gi, 'Please provide your name and email address if you would like a reply')
    .replace(/After installation you will have to ring us for an unlock code/gi, 'After installation, contact support for an unlock code')
    .replace(/you must ring us during\s+office hours, or e-mail/gi, 'email')
    .replace(/Phone, Mobile \(optional\) number,?/gi, '')
    .replace(/<script[^>]*src=["'][^"']*(?:google|analytics)[^"']*["'][^>]*><\/script>/gi, '');
}

function collectAssets(html, page) {
  const base = new URL(page, origin);
  for (const match of html.matchAll(/(?:src|href)\s*=\s*["']([^"'#?]+)["']/gi)) {
    const url = new URL(match[1], base);
    if (url.origin !== new URL(origin).origin) continue;
    const path = decodeURIComponent(url.pathname.replace(/^\//, ''));
    if (path && !/\.html?$/i.test(path) && path !== '') assets.add(path);
  }
  for (const match of html.matchAll(/["']((?:\.\.\/|\.\/)?(?:images|imagesButton)\/[^"']+)["']/gi)) {
    const url = new URL(match[1], base);
    assets.add(decodeURIComponent(url.pathname.replace(/^\//, '')));
  }
}

async function save(path, data) {
  const target = join(output, path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, data);
}

for (const page of pages) {
  const response = await fetch(new URL(page, origin));
  if (!response.ok) throw new Error(`${response.status} ${page}`);
  const html = removePhone(await response.text());
  collectAssets(html, page);
  await save(page, html);
  if (page === 'default.htm') await save('index.html', html);
}

for (const asset of assets) {
  const response = await fetch(new URL(asset, origin));
  if (!response.ok) {
    console.warn(`Skipped ${response.status}: ${asset}`);
    continue;
  }
  const data = asset === 'style.css' ? Buffer.from(await response.text()) : Buffer.from(await response.arrayBuffer());
  await save(asset, data);
}

console.log(`Mirrored ${pages.length} pages and ${assets.size} assets.`);
