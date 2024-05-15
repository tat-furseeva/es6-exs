var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const added = [0, 1, 2, 3, 4].map((item) => item + 1);