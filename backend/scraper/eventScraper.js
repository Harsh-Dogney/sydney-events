const puppeteer = require('puppeteer');
const Event = require('../models/Event');

const scrapeEvents = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({ 
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    await page.goto('https://www.eventbrite.com/d/australia--sydney/all-events/', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Scroll to load more content (adjust as needed)
    await autoScroll(page);

    const events = await page.evaluate(() => {
      const eventCards = Array.from(document.querySelectorAll('.search-event-card-wrapper'));
      return eventCards.map(card => ({
        title: card.querySelector('.eds-event-card__formatted-name')?.innerText?.trim(),
        date: card.querySelector('.eds-event-card__sub-title')?.innerText?.trim(),
        location: card.querySelector('.eds-event-card__formatted-name')?.innerText?.trim(),
        description: card.querySelector('.eds-event-card__content')?.innerText?.trim(),
        image: card.querySelector('img')?.src,
        ticketLink: card.querySelector('a')?.href
      }));
    });

    await Event.deleteMany({});
    await Event.insertMany(events.filter(e => e.title && e.date));
    console.log(`Inserted ${events.length} events`);

  } catch (error) {
    console.error('Scraping failed:', error);
  } finally {
    if (browser) await browser.close();
  }
};

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

module.exports = scrapeEvents;