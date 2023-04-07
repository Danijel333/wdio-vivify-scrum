class Page {
  openUrl(path) {
    return browser.url(path);
  }
}

export default new Page();
