export const enTranslation = {
  main: {
    title: 'Welcome to chat',
    description: 'Chat, connect, Stay in touch and make communication simple.',
    ourTeem: 'Our Team',
    version: 'Version',
  },
  sidebar: {
    publicRooms: 'Public Rooms',
    privateRooms: 'Private Rooms',
    createRoom: 'Create Room',
  },
  auth: {
    join: 'Join',
    logout: 'Logout',
    inputPlaceholder: 'Name',
    formText: 'Enter your name to start',
    greetingText: 'Thank you for joining Talkie',
  },
  rooms: {
    public: 'Public Rooms',
    private: 'Private Rooms',
  },
  errors: {
    inputValidation:
      'The username must have at least 2 characters, but no more than 30.',
  },
} as const;
