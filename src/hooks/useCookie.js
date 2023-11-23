import { useEffect, useState } from 'react';

const getRandomCookieKey = () => {
  const cookieLen = 15;
  const randomNum = Math.floor(Math.random() * cookieLen);
  // randomNum => 0 ~ 14
  return `cookie_${randomNum + 1}`;
};

export const useCookie = () => {
  const [cookieKey, setCookieKey] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const randomCookie = getRandomCookieKey();
      setCookieKey(randomCookie);
    }, 4000);
  }, []);

  return { cookieKey };
};
