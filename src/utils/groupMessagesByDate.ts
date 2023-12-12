import { Message } from './types/chat.type';

type TypeGroupedMessages = {
  [date: string]: Message[];
};

export const groupMessagesByDate = (messages: Message[]) => {
  const groupedMessages: TypeGroupedMessages = {};

  messages.forEach((message: Message) => {
    const messageDate = new Date(message.createdAt).toLocaleDateString('uk-UA');

    if (!groupedMessages[messageDate]) {
      groupedMessages[messageDate] = [];
    }

    groupedMessages[messageDate].push(message);
  });

  return groupedMessages;
};
