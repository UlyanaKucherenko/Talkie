import { Status } from '../enums/status.enum';
import { Topic } from '../enums/topic.enum';
import { User } from './user.type';

export type Room = {
  _id: string;
  title: string;
  img?: string;
  topic: Topic;
  type: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  users: User[];
  owner: User | string;
};

export type PublicRoomsData = {
  page: number;
  perPage: number;
  totalPages: number;
  rooms: Room[];
};

export type CreateRoomData = {
  title: string;
  topic: Topic;
  description?: string;
};

// private rooms
export type PrivateRoom = {
  _id: string;
  title: string;
  description: string;
  img: string;
  type: string;
  owner: {
    _id: string;
    name: string;
    avatarURL: string;
  };
  users: string[];
  createdAt: string;
  updatedAt: string;
};

export type PrivateRoomsData = {
  page: number;
  perPage: number;
  totalPages: number;
  rooms: PrivateRoom[];
};

export type SearchRoomData = {
  page: number;
  perPage: number;
  totalPages: number;
  rooms: PrivateRoom[] | Room[];
};

export type RoomsState = {
  publicRoomsData: PublicRoomsData | null;
  status: Status;
  error: string | null;
  myPublicRoomsData: PublicRoomsData | null;
  myPublicRoomsStatus: Status;
  myPublicRoomsError: string | null;
  privateRoomsData: PrivateRoomsData | null;
  privateRoomsStatus: Status;
  privateRoomsError: string | null;
  privateRoomsIds: string[];
  foundRoomsData: SearchRoomData | null;
  foundRoomsStatus: Status;
  foundRoomsError: string | null;
};

export type GetRoomsProps = {
  currentPage: number;
  topic?: typeof Topic | '';
};
