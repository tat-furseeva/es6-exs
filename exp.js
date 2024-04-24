const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const result = await makeHttpRequest(url);
console.log( "A" - "B" + "2");
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);