const goToTop = () => window.scrollTo(0, 0);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
var c = new Counter(); c.add(); c.add(); c.add();