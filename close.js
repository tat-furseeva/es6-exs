const executableName = getExecutableName(channel, appName);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';