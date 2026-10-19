const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const base = 'C:\\Users\\Torie Almaraz\\Downloads\\WEB DEVELOPMENT\\brightsmile_dental';
const out = path.join(base, 'output');

// Remove existing output dir
if (fs.existsSync(out)) {
    fs.rmSync(out, { recursive: true, force: true });
}
fs.mkdirSync(out, { recursive: true });

// Copy all files and folders
const entries = fs.readdirSync(base);
for (const item of entries) {
    const src = path.join(base, item);
    const dst = path.join(out, item);
    if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dst, { recursive: true });
    } else {
        fs.copyFileSync(src, dst);
    }
}

console.log('output/ rebuilt from source');
console.log('Files:', fs.readdirSync(out).length);
