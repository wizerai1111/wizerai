const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceIcon = path.join(__dirname, '../public/logo512.png');
const outputDir = path.join(__dirname, '../public');

const sizes = [16, 24, 32, 48, 64, 72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
    try {
        // Check if source icon exists
        if (!fs.existsSync(sourceIcon)) {
            throw new Error(`Source icon not found: ${sourceIcon}`);
        }

        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Generate icons for each size
        for (const size of sizes) {
            const outputPath = path.join(outputDir, `icon-${size}.png`);
            
            // Skip if output path is the same as source
            if (outputPath === sourceIcon) {
                console.log(`Skipping size ${size}x${size} to avoid overwriting source`);
                continue;
            }

            await sharp(sourceIcon)
                .resize(size, size)
                .toFile(outputPath);
            
            console.log(`Generated ${size}x${size} icon: ${outputPath}`);
        }

        // Generate favicon.ico
        const faviconSizes = [16, 32, 48];
        const faviconBuffers = await Promise.all(
            faviconSizes.map(size => 
                sharp(sourceIcon)
                    .resize(size, size)
                    .toBuffer()
            )
        );

        const faviconPath = path.join(outputDir, 'favicon.ico');
        await sharp(faviconBuffers[0])  // Use the 16x16 as base
            .toFile(faviconPath);

        console.log(`Generated favicon.ico: ${faviconPath}`);
        console.log('Icon generation completed successfully!');

    } catch (error) {
        console.error('Error generating icons:', error.message);
        process.exit(1);
    }
}

generateIcons(); 