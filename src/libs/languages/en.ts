export const enTranslation = {
  main: {
    title: 'Welcome to chat',
    description: 'Chat, connect, Stay in touch and make communication simple.',
    ourTeem: 'Our Team',
    version: 'Version',
  },
  sidebar: {
    publicRooms: 'Public Rooms',
    myPublicRooms: 'My Public rooms',
    privateRooms: 'Private Rooms',
    createRoom: 'Create Room',
  },
  auth: {
    join: 'Join',
    logout: 'Log Out',
    inputPlaceholder: 'Name',
    formText: 'Enter your name to start',
    formDesc: 'If you want to enter the room, you must be logged in',
    greetingText: 'Thank you for joining Talkie',
    logoutWarningTitle: 'Are you sure you want to log out?',
    logoutWarningDescription:
      'You will not be able to log in with this account',
    logoutWarningCloseButton: 'Close',
    logoutWarningConfirmButton: 'Сonfirm',
  },
  rooms: {
    public: 'Public Rooms',
    private: 'Private Rooms',
  },
  chat: {
    placeholder: 'Write a message...',
  },
  errors: {
    userNameLengthValidation: 'Username must be 2-30 characters',
    userNameCharacterValidation: "Input only valid symbols('’._-)",
  },
} as const;
