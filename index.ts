/**
 * get alternate style sheet elements
 */
export function getAlternateStylesheets(): HTMLLinkElement[] {
  const links = document.getElementsByTagName('link');
  const alternateStylesheets: HTMLLinkElement[] = [];

  for (let i = 0, len = links.length; i < len; ++i) {
    const link = links[i];

    if (/stylesheet/i.test(link.rel) && link.title) {
      alternateStylesheets.push(link);
    }
  }

  return alternateStylesheets;
}

/**
 * set alternate style sheet
 *
 * @param title
 */
export function setAlternateStylesheet(title: string): boolean {
  const links = getAlternateStylesheets();
  const len = links.length;

  let targetStyleSheet: HTMLLinkElement | null = null;

  for (let i = 0, stylesheet: HTMLLinkElement; i < len; ++i) {
    stylesheet = links[i];

    if (stylesheet.title === title) {
      targetStyleSheet = stylesheet;
    }
  }

  if (targetStyleSheet === null) {
    return false;
  }

  for (let i = 0, stylesheet: HTMLLinkElement; i < len; ++i) {
    stylesheet = links[i];
    stylesheet.disabled = stylesheet.title !== title;
    // HACK: for Google Chrome and Safari
    stylesheet.disabled = !stylesheet.disabled;
    stylesheet.disabled = !stylesheet.disabled;
  }

  return true;
}
