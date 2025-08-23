import puppeteer from 'puppeteer';

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
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, a'));
      const dashButton = buttons.find(btn => btn.textContent?.includes('Dashboard'));
      if (dashButton) dashButton.click();
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Taking screenshot of dashboard...');
    await page.screenshot({ path: 'dashboard-current.png', fullPage: true });
    
    console.log('Screenshots saved successfully!');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();