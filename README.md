# Decimal Number Line

A simple classroom tool for figuring out how to round decimals.

**Live tool:** https://mrpiercey.github.io/decimal-numberline/

Students type the two numbers their number is between (for example `3.7` and `3.8`),
choose how to break the line up (whole numbers, tenths, hundredths, or thousandths),
type the number they are looking for (for example `3.785`), then click or tap on the
number line to put a dot where they think it goes. The dot shows its value, so they can
see which tick mark it is closest to. "Show the halfway marks" draws the midpoint between
each pair of ticks, and "Check my dot" reveals where the number really is and which two
tick marks it sits between.

There are no questions built in. It is just the number line, so it works with any
rounding problem you give them.

## Files

- `index.html` - the whole tool. Works on its own in any browser.
- `Code.gs` - a one-function Google Apps Script wrapper that serves `index.html` as a web app.
- `appsscript.json` - Apps Script project settings (optional, used by clasp).

## Run it as a Google Apps Script web app

1. Go to https://script.google.com and create a new project.
2. Replace the contents of `Code.gs` with the `Code.gs` from this repo.
3. Add a new HTML file named `index` (File > New > HTML) and paste in `index.html`.
4. Click **Deploy > New deployment**, pick **Web app**, set *Execute as* to **Me** and
   *Who has access* to **Anyone**, then deploy.
5. Share the web app URL.

If you use [clasp](https://github.com/google/clasp), `clasp create --type webapp` in this
folder followed by `clasp push` does the same thing.

## Run it anywhere else

Open `index.html` in a browser, or host the repo on GitHub Pages (that is what the live link above is).
