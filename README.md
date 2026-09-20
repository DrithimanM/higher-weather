# Higher Weather

Personal weather for your kitchen tablet, phone, and laptop.

## Use it on your devices

Serve this folder from a secure local URL, then open `HigherWeather.html` in each device's browser. Once opened, use the browser's **Install app** or **Add to Home Screen** option.

The app shell and logo remain available after the first successful load, even if the device temporarily loses internet. Live weather, air quality, location names, and Weather Journal stories still need an internet connection.

> Opening the file directly with `file://` is fine for viewing, but browsers cannot install it as a PWA or run its offline cache that way. Use HTTPS for installation and reliable location access.

## Keep it safe

Before a change:

```bash
git status
git add -A
git commit -m "Describe the change"
```

To go back to a known-good version, use Git history rather than overwriting the working page.
