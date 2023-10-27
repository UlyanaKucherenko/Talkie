export type UserRequest = {
  name: string;
};

export type User = {
  _id: string;
  name: string;
  avatarUrl: string;
};

export type UserResponse = {
  token: string;
  user: User;
};
