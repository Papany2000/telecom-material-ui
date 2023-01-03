export const serverUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const defaultAxiosOptions = {
  baseURL: serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};
