const USER_TOKEN = 'userToken';

export const saveToken = (token: string): void => {
  localStorage.setItem(USER_TOKEN, token);
};

export const getToken = (): string | null => {
  const token = localStorage.getItem(USER_TOKEN);
  return token;
};

export const deleteToken = (): void => {
  localStorage.removeItem(USER_TOKEN);
};
