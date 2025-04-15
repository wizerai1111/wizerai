const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 384, 512];
const inputFile = path.join(__dirname, '../public/logo.svg');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
  try {
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(path.join(outputDir, `logo${size}.png`));
      console.log(`Generated ${size}x${size} icon`);
    }
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons(); 