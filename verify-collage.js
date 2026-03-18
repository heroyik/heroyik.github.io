const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the local server
    await page.goto('http://localhost:8080/');

    // Wait for the JS to execute
    await page.waitForTimeout(500);

    // Verify the heading text
    const heading = await page.$eval('h1', el => el.textContent.trim());
    console.log(`Found heading: "${heading}"`);

    if (heading.includes('Welcome to Maison de nIcK')) {
        console.log('Success: Page loaded with correct heading.');
    } else {
        console.error(`Error: Expected heading to include "Welcome to Maison de nIcK", but found "${heading}"`);
        process.exit(1);
    }

    await browser.close();
})();
