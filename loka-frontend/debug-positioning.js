import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  try {
    console.log('Navigating to development server...');
    await page.goto('http://localhost:5175', { waitUntil: 'networkidle0', timeout: 15000 });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Click dashboard
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, a'));
      const dashButton = buttons.find(btn => btn.textContent?.includes('Dashboard'));
      if (dashButton) dashButton.click();
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Debug positioning
    const positioning = await page.evaluate(() => {
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const dashboardH1 = document.querySelector('h1');
      const container = document.querySelector('.container');
      
      const getElementInfo = (el, name) => {
        if (!el) return { name, found: false };
        const rect = el.getBoundingClientRect();
        const styles = getComputedStyle(el);
        return {
          name,
          found: true,
          position: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            bottom: rect.bottom
          },
          styles: {
            display: styles.display,
            position: styles.position,
            zIndex: styles.zIndex,
            padding: styles.padding,
            margin: styles.margin,
            transform: styles.transform,
            opacity: styles.opacity
          },
          className: el.className
        };
      };
      
      return {
        viewport: { width: window.innerWidth, height: window.innerHeight },
        header: getElementInfo(header, 'header'),
        main: getElementInfo(main, 'main'),
        dashboardH1: getElementInfo(dashboardH1, 'dashboard-h1'),
        container: getElementInfo(container, 'container'),
        scrollPosition: { x: window.scrollX, y: window.scrollY }
      };
    });
    
    console.log('Positioning analysis:', JSON.stringify(positioning, null, 2));
    
    // Try scrolling to see if content is below viewport
    await page.evaluate(() => window.scrollTo(0, 200));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await page.screenshot({ path: 'dashboard-scrolled.png', fullPage: false });
    console.log('Took scrolled screenshot');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();