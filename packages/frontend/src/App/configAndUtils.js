export const URLS = {
  apiUrl: 'http://localhost:8080/api',
};

export const isDevMode =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default {
  isDevMode,
  reduxLogging: isDevMode,
};
