// Configuration for the prod server
export const environment = {
  name: 'prod',
  production: true,
  local: false,
  useMockData: false,
  cors_origin: process.env.FRONTEND_URI,
};
