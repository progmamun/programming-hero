/*
document.cookie.split('; ').find(c => c.includes('IR_1111'));
document.cookie
  .split('; ')
  .find(c => c.includes('IR_1111'))
  .split('=');
document.cookie
  .split('; ')
  .find(c => c.includes('IR_1111'))
  .split('=')[1];

document.cookie.split('; ');
*/
const getCookie = name => {
  const cookie = document.cookie;
  const allCookie = cookie.split('; ');
  const findCookie = allCookie.find(c => c.includes(name));
  if (findCookie) {
    ('country=US');
    const cookieNameValue = findCookie.split('=');
    return cookieNameValue;
  }
};
