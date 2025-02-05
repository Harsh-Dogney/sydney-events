const cron = require('cron');
const scrapeEvents = require('../scraper/eventScraper');

const job = new cron.CronJob('0 0 * * *', async () => {
  console.log('Starting scheduled scrape...');
  try {
    await scrapeEvents();
    console.log('Daily scrape completed successfully');
  } catch (error) {
    console.error('Scheduled scrape failed:', error);
  }
});

module.exports = job;