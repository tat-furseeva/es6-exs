var c = new Counter(); c.add(); c.add(); c.add();
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';