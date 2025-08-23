import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  // Enable console logging
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log('ERROR:', msg.text());
    }
  });
  
  try {
    console.log('Navigating to development server...');
    await page.goto('http://localhost:5175', { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Wait for React to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Click dashboard button
    console.log('Clicking dashboard...');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, a'));
      const dashButton = buttons.find(btn => btn.textContent?.includes('Dashboard'));
      if (dashButton) dashButton.click();
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Analyze dashboard content
    const dashboardAnalysis = await page.evaluate(() => {
      const dashboardHeader = document.querySelector('h1');
      const cards = document.querySelectorAll('[class*="card"]');
      const magicCards = document.querySelectorAll('[class*="magic"]');
      const blurFades = document.querySelectorAll('[style*="opacity"]');
      
      return {
        currentView: window.location.href,
        dashboardHeaderText: dashboardHeader?.textContent,
        dashboardHeaderVisible: dashboardHeader ? {
          display: getComputedStyle(dashboardHeader).display,
          opacity: getComputedStyle(dashboardHeader).opacity,
          fontSize: getComputedStyle(dashboardHeader).fontSize
        } : null,
        cardCount: cards.length,
        magicCardCount: magicCards.length,
        elementsWithOpacity: blurFades.length,
        mainContent: document.querySelector('main')?.children.length || 0,
        bodyClasses: document.body.className
      };
    });
    
    console.log('Dashboard analysis:', JSON.stringify(dashboardAnalysis, null, 2));
    
    // Take dashboard screenshot
    await page.screenshot({ path: 'dashboard-focused.png', fullPage: true });
    
    console.log('Dashboard analysis complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();