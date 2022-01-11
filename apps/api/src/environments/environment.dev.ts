// Configuration for the dev server
export const environment = {
  name: 'dev',
  production: false,
  local: false,
  useMockData: false,
  cors_origin: process.env.FRONTEND_URI,
};