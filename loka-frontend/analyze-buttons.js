import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  try {
    console.log('Navigating to development server...');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 15000 });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Analyze buttons specifically
    const buttonAnalysis = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const links = Array.from(document.querySelectorAll('a'));
      
      const analyzeElement = (el, type) => {
        const styles = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        
        return {
          type,
          text: el.textContent?.trim().slice(0, 50) || '',
          styles: {
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            padding: styles.padding,
            margin: styles.margin,
            borderRadius: styles.borderRadius,
            border: styles.border,
            minHeight: styles.minHeight,
            lineHeight: styles.lineHeight
          },
          dimensions: {
            width: rect.width,
            height: rect.height
          },
          className: el.className,
          visible: rect.width > 0 && rect.height > 0 && styles.display !== 'none'
        };
      };
      
      return {
        buttons: buttons.map(btn => analyzeElement(btn, 'button')),
        links: links.filter(link => link.textContent?.trim()).map(link => analyzeElement(link, 'link'))
      };
    });
    
    console.log('Button Analysis:', JSON.stringify(buttonAnalysis, null, 2));
    
    // Take screenshots focusing on button areas
    await page.screenshot({ path: 'buttons-analysis.png', fullPage: false });
    
    // Also check hero section specifically
    await page.screenshot({ 
      path: 'hero-buttons.png', 
      clip: { x: 0, y: 100, width: 1280, height: 500 }
    });
    
    console.log('Button analysis complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();