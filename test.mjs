import { JSDOM } from 'jsdom';
import fs from 'fs';

const html = fs.readFileSync('FINAL_ANDROID_APP.html', 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.console.log = (...args) => console.log('LOG:', ...args);
dom.window.console.error = (...args) => console.error('ERROR:', ...args);
dom.window.console.warn = (...args) => console.warn('WARN:', ...args);

// wait a bit for scripts to execute
setTimeout(() => {
  console.log("Done");
}, 2000);
