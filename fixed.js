const resultingPromises = urls.map((url) => makHttpRequest(url));
const copyToClipboard = (text) => navigator.clipboard.writeText(text);