import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

const outDir = '/Users/pandu/Documents/GitHub/porto-web/public/projects';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sites = [
  { url: 'https://ngawi-teknik.netlify.app/', name: 'ngawi-teknik', type: 'simple' },
  { url: 'https://company-profile-mni.vercel.app/', name: 'mni', type: 'simple' },
  { url: 'https://asco-dewi-sartika.netlify.app/', name: 'asco', type: 'simple' },
  { url: 'https://wecare-mentalcare.netlify.app/', name: 'wecare', type: 'simple' },
  { url: 'https://www.mitrakawanbersama.com/', name: 'mitra', type: 'simple' },
  { url: 'https://workfrom-fe.vercel.app/', name: 'workfrom', type: 'simple' },
  { url: 'https://sit.crescentrating.com/', name: 'crescentrating', type: 'simple' },
  { url: 'http://mudahdigital.id/', name: 'mudahdigital', type: 'simple' },
  { url: 'https://oils.patralogistik.com/login', name: 'oils', type: 'login', user: 'admin', pass: '12345' }
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  for (const site of sites) {
    console.log("Capturing:", site.name);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
      
      if (site.type === 'login') {
        const usernameSelector = 'input[type="text"], input[name="username"], input[name="email"], #email';
        const passwordSelector = 'input[type="password"]';
        
        await page.waitForSelector(usernameSelector, { timeout: 10000 }).catch(() => {});
        const uInput = await page.$(usernameSelector);
        if (uInput) await uInput.type(site.user);

        const pInput = await page.$(passwordSelector);
        if (pInput) await pInput.type(site.pass);

        const buttons = await page.$$('button, input[type="submit"]');
        for (const btn of buttons) {
            const text = await page.evaluate(el => el.textContent || el.value, btn);
            if (text && (text.toLowerCase().includes('login') || text.toLowerCase().includes('masuk') || text.toLowerCase().includes('sign in'))) {
                await btn.click();
                break;
            }
        }
        await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 15000 }).catch(() => {});
        await new Promise(r => setTimeout(r, 2000));
      } else {
        await new Promise(r => setTimeout(r, 3000)); 
      }

      await page.screenshot({ path: path.join(outDir, `${site.name}.png`), fullPage: false });
      console.log('Success:', site.name);
      await page.close();
    } catch (e) {
      console.error('Failed:', site.name, e.message);
    }
  }
  await browser.close();
})();
