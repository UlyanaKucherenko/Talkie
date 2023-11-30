import { Status } from '../enums/status.enum';

export type UserRequest = {
  name: string;
};

export type User = {
  _id: string;
  name: string;
  avatarURL: string;
};

export type UserResponse = {
  token: string;
  user: User;
};

export type UserState = {
  userData: UserResponse | null;
  status: Status;
  error: string | null;
};
