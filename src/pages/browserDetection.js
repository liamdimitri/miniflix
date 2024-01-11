export const logBrowserInfo = () => {
  // Check if the user is using Google Chrome by examining the user agent and vendor information
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (isChrome) {
    console.log("This website is being viewed in Google Chrome.");
  } else {
    console.log("This website is not being viewed in Google Chrome.");
  }
};
