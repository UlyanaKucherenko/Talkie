import { Status } from '../enums/status.enum';
import { Topic } from '../enums/topic.enum';
import { User } from './user.type';

export type Room = {
  _id: string;
  title: string;
  topic: string;
  type: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  users: User[];
  owner: User;
};

export type PublicRoomsData = {
  page: number;
  perPage: number;
  totalPages: number;
  rooms: Room[];
};

export type RoomsState = {
  publicRoomsData: PublicRoomsData | null;
  myPublicRoomsData: PublicRoomsData | null;
  status: Status;
  error: string | null;
};

export type CreateRoomData = {
  title: string;
  topic: Topic;
  description?: string;
};
