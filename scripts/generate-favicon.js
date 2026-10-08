const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const portfolioSvgPath = path.resolve(__dirname, '../AssetsAndReferences/SubIcons/Portfolio_icon.svg');
const svgRaw = fs.readFileSync(portfolioSvgPath, 'utf8');

// Extract the path data
const match = svgRaw.match(/<path d="([^"]+)"/);
if (!match) {
  console.error('Could not find path in Portfolio_icon.svg');
  process.exit(1);
}
const pathD = match[1];

// Create square 256x256 SVG with dark background tile and centered white tag icon
const squareSvg = `<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="256" height="256" rx="56" fill="#09090b"/>
  <g transform="translate(46.5, 61)">
    <path d="${pathD}" fill="#ffffff"/>
  </g>
</svg>`;

async function main() {
  const appDir = path.resolve(__dirname, '../src/app');
  const publicDir = path.resolve(__dirname, '../public');

  // 1. Write icon.svg to src/app and public
  fs.writeFileSync(path.join(appDir, 'icon.svg'), squareSvg);
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), squareSvg);

  // 2. Generate PNG frames for ICO
  const png16 = await sharp(Buffer.from(squareSvg)).resize(16, 16).png().toBuffer();
  const png32 = await sharp(Buffer.from(squareSvg)).resize(32, 32).png().toBuffer();
  const png48 = await sharp(Buffer.from(squareSvg)).resize(48, 48).png().toBuffer();

  function createIco(images) {
    const count = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = ICO
    header.writeUInt16LE(count, 4); // count

    const dirEntries = [];
    let offset = 6 + (16 * count);

    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width, 0);
      entry.writeUInt8(img.height, 1);
      entry.writeUInt8(0, 2); // palette
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bpp
      entry.writeUInt32LE(img.buffer.length, 8); // size
      entry.writeUInt32LE(offset, 12); // offset
      dirEntries.push(entry);
      offset += img.buffer.length;
    }

    const buffers = [header, ...dirEntries, ...images.map(i => i.buffer)];
    return Buffer.concat(buffers);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Also write standard icon.png (32x32)
  fs.writeFileSync(path.join(appDir, 'icon.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), png32);

  console.log('Favicon and icon files successfully generated!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
