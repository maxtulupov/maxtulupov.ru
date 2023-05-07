export const accentColor = '#013179';
export const bgColor = '#191B1F';

export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';
export const IS_PRODUCTION = process.env.APP_ENV === 'production';

export const SITE_URL = process.env.REACT_SITE_URL;
