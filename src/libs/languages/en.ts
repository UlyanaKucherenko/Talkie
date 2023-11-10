export const enTranslation = {
  main: {
    title: 'Welcome to chat',
    description: 'Chat, connect, Stay in touch and make communication simple.',
    Rooms: 'Rooms',
    About: 'About',
    ourTeem: 'Our Team',
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
      'The username must have at least 2 characters, but no more than 26.',
  },
} as const;
