/*
 * @Author: your name
 * @Date: 2021-01-17 11:42:40
 * @LastEditTime: 2021-01-17 11:43:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js-file-server/src/puppeteer/init-puppeteer.js
 */
const puppeteer = require('puppeteer-core');

const REVISION = '818858';

const initPuppeteer = async () => {
  const browserFetcher = puppeteer.createBrowserFetcher();
  const revisions = await browserFetcher.localRevisions();
  // const info = browserFetcher.revisionInfo(REVISION);
  // console.log(info);
  if (revisions.length === 0) {
    const result = await browserFetcher.download(
      REVISION,
      (downloaded, total) => {
        const progress = ((downloaded / total) * 100).toFixed(2);
        console.log(`download revision ${REVISION}, progress = ${progress}%`);
      }
    );

    console.log('download done !', result);
  } else {
    console.log('revisions = ', revisions);
  }
};

module.exports = initPuppeteer;