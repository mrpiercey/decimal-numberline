/**
 * Decimal Number Line - Google Apps Script web app wrapper.
 *
 * The whole tool lives in index.html. This file just serves it.
 *
 * To deploy inside Google:
 *   1. Go to script.google.com and make a new project.
 *   2. Paste this file into Code.gs.
 *   3. Add a file named index.html (File > New > HTML) and paste in index.html from this repo.
 *   4. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 *   5. Share the web app URL with students.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Decimal Number Line')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
