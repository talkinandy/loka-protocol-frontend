const puppeteer = require('./loka-frontend/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  try {
    console.log('Navigating to development server...');
    await page.goto('http://localhost:5175', { waitUntil: 'networkidle0', timeout: 10000 });
    
    console.log('Taking screenshot of landing page...');
    await page.screenshot({ path: 'landing-current.png', fullPage: true });
    
    // Navigate to dashboard
    console.log('Clicking dashboard link...');
    const dashboardButton = await page.$('nav button[data-view="dashboard"], nav a[href*="dashboard"], button:has-text("Dashboard")');
    if (dashboardButton) {
      await dashboardButton.click();
    } else {
      console.log('Dashboard button not found, trying alternative selector...');
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button, a'));
        const dashButton = buttons.find(btn => btn.textContent?.includes('Dashboard'));
        if (dashButton) dashButton.click();
      });
    }
    await page.waitForTimeout(2000);
    
    console.log('Taking screenshot of dashboard...');
    await page.screenshot({ path: 'dashboard-current.png', fullPage: true });
    
    console.log('Screenshots saved successfully!');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();