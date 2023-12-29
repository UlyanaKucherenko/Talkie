const baseUrl: string = `${import.meta.env.VITE_SERVER_HOST}/api`;

export const apiRoutes = {
  register: `${baseUrl}/users/register`,
  logout: `${baseUrl}/users/logout`,
  current: `${baseUrl}/users/current`,
  publicRooms: `${baseUrl}/rooms/public`,
  privateRooms: `${baseUrl}/rooms/private`,
  ownPublicRooms: `${baseUrl}/rooms/public/owner`,
  publicRoomsWithoutOwn: `${baseUrl}/rooms/public/notown`,
  rooms: `${baseUrl}/rooms`,
  messages: `${baseUrl}/messages`,
} as const;
