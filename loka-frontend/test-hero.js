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
  
  page.on('pageerror', (error) => {
    console.log('PAGE ERROR:', error.message);
  });
  
  try {
    console.log('Navigating to development server...');
    await page.goto('http://localhost:5175', { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Wait for React to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check for hero section elements specifically
    const heroAnalysis = await page.evaluate(() => {
      const heroSection = document.querySelector('section:first-child');
      const h1Elements = document.querySelectorAll('h1');
      const buttons = document.querySelectorAll('button');
      const shimmerButtons = document.querySelectorAll('[class*="shimmer"]');
      const blurFadeElements = document.querySelectorAll('[class*="blur-fade"]');
      
      return {
        heroSection: heroSection ? {
          className: heroSection.className,
          innerHTML: heroSection.innerHTML.slice(0, 500),
          childrenCount: heroSection.children.length,
          visible: getComputedStyle(heroSection).display !== 'none'
        } : null,
        h1Count: h1Elements.length,
        h1Texts: Array.from(h1Elements).map(h => h.textContent?.slice(0, 50)),
        h1Styles: Array.from(h1Elements).map(h => ({
          display: getComputedStyle(h).display,
          opacity: getComputedStyle(h).opacity,
          fontSize: getComputedStyle(h).fontSize,
          color: getComputedStyle(h).color
        })),
        buttonCount: buttons.length,
        shimmerButtonCount: shimmerButtons.length,
        blurFadeCount: blurFadeElements.length
      };
    });
    
    console.log('Hero section analysis:', JSON.stringify(heroAnalysis, null, 2));
    
    // Take a focused screenshot of just the hero area
    await page.screenshot({ 
      path: 'hero-focused.png', 
      clip: { x: 0, y: 0, width: 1280, height: 600 }
    });
    
    console.log('Analysis complete! Check hero-focused.png');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();