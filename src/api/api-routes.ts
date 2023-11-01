const baseUrl: string = `${import.meta.env.VITE_SERVER_HOST}/api`;

export const apiRoutes = {
  register: `${baseUrl}/users/register`,
  logout: `${baseUrl}/users/logout`,
  current: `${baseUrl}/users/current`,
} as const;
