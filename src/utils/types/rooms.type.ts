import { Status } from '../enums/status.enum';
import { User } from './user.type';

export type PublicRooms = {
  _id: string;
  title: string;
  topic: string;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Room = {
  users: User[];
  owner: User;
} & PublicRooms;

export type PublicRoomsData = {
  page: number;
  perPage: number;
  totalPages: number;
  rooms: PublicRooms[];
};

export type RoomsState = {
  publicRoomsData: PublicRoomsData | null;
  status: Status;
  error: string | null;
};
