import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false, 
    devtools: true,
    args: ['--disable-web-security', '--disable-features=VizDisplayCompositor']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  // Enable console logging
  page.on('console', (msg) => {
    console.log('PAGE LOG:', msg.text());
  });
  
  page.on('pageerror', (error) => {
    console.log('PAGE ERROR:', error.message);
  });
  
  try {
    console.log('Navigating to development server...');
    await page.goto('http://localhost:5175', { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Wait a bit more for components to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check what's actually in the DOM
    const bodyContent = await page.evaluate(() => {
      const body = document.body;
      return {
        innerHTML: body.innerHTML.slice(0, 1000),
        childCount: body.children.length,
        firstChildTag: body.children[0]?.tagName,
        hasMainContent: !!document.querySelector('main'),
        hasLandingPage: !!document.querySelector('[class*="LandingPage"]'),
        sections: Array.from(document.querySelectorAll('section')).length
      };
    });
    
    console.log('Body content analysis:', bodyContent);
    
    // Check computed styles of main elements
    const styles = await page.evaluate(() => {
      const main = document.querySelector('main');
      const sections = document.querySelectorAll('section');
      return {
        mainDisplay: main ? getComputedStyle(main).display : 'not found',
        sectionCount: sections.length,
        sectionVisibility: Array.from(sections).map(s => ({
          className: s.className,
          display: getComputedStyle(s).display,
          visibility: getComputedStyle(s).visibility,
          opacity: getComputedStyle(s).opacity
        }))
      };
    });
    
    console.log('Computed styles:', styles);
    
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'debug-landing.png', fullPage: true });
    
    console.log('Debug complete! Check debug-landing.png and console output.');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();