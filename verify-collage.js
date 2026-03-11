const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the local server
    await page.goto('http://localhost:3000/');

    // Wait for the JS to execute mapping
    await page.waitForTimeout(500);

    // Verify there are 11 tiles
    const tiles = await page.$$('.hero-collage .tile');
    if (tiles.length !== 11) {
        console.error(`Error: Expected 11 tiles, but found ${tiles.length}`);
        process.exit(1);
    }

    // Count empty vs assigned backgrounds
    let assignedCount = 0;
    for (const tile of tiles) {
        const bgImage = await tile.evaluate((el) => el.style.backgroundImage);
        if (bgImage && bgImage.includes('url(')) {
            assignedCount++;
        }
    }

    if (assignedCount === 11) {
        console.log('Success: All 11 tiles have background images dynamically assigned.');
    } else {
        console.error(`Error: Expected 11 assigned background images, found ${assignedCount}`);
        process.exit(1);
    }

    await browser.close();
})();
