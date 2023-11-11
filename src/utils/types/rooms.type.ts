import { Status } from '../enums/status.enum';

export type PublicRooms = {
  _id: string;
  title: string;
  topic: string;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

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
