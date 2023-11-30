export type Message = {
  _id: string;
  roomId: string;
  content: string;
  owner: {
    _id: string;
    name: string;
    avatarURL: string;
  };
  replys: [
    {
      _id: string;
      content: string;
      owner: {
        _id: string;
        name: string;
        avatarURL: string;
      };
      createdAt: string;
      updatedAt: string;
    },
  ];
  createdAt: string;
  updatedAt: string;
};

export type ResponseMessages = {
  page: number;
  perPage: number;
  totalPages: number;
  messages: Message[];
};

export type SendMessage = {
  content: string;
};
