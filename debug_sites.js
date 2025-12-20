const fs = require('fs');
let content = fs.readFileSync('sites.json', 'utf16le');
if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
}
const sites = JSON.parse(content);
sites.forEach(s => {
    console.log(`Name: ${s.name}, URL: ${s.url}, ID: ${s.id}`);
});
