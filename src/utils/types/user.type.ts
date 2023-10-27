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

export type UserState = {
  user: UserResponse | null;
  status: 'loading' | 'succeeded' | 'failed' | null;
  error: string | null;
};
