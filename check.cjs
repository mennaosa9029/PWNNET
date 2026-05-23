const fs = require('fs');
const content = fs.readFileSync('FINAL_ANDROID_APP.html', 'utf8');

const pos = content.indexOf('Advanced Network Exploitation Toolkit');
if (pos !== -1) {
    console.log(content.substring(pos - 1000, pos + 200));
}
