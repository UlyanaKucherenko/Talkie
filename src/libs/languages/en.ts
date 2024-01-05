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
    myPublicRooms: 'My Public rooms',
    title: 'Title',
    description: 'Description',
    topic: 'Topic',
    titlePlaceholder: 'Enter room title',
    descriptionPlaceholder: 'Enter room description',
    topicPlaceholder: 'Select room topic',
  },
  search: {
    title: 'Search Result',
    notFound: 'No results found',
    placeholder: 'Search...',
  },
  chat: {
    placeholder: 'Write a message...',
    noMessagesYet: 'No messages yet',
    members: 'members',
    owner: 'owner',
    today: 'today',
    yesterday: 'yesterday',
  },
  pageError: {
    pageNotFound: 'page not found',
    returnHome: 'Return to the main page',
  },
  errors: {
    userNameLengthValidation: 'Username must be 2-30 characters',
    userNameCharacterValidation: "Input only valid symbols('’._-)",
    publicRoomTitleLengthValidation: 'Title must be 2-30 characters',
    publicRoomTitleCharacterValidation: "Input only valid symbols('’._-)",
    publicRoomDescriptionLengthValidation:
      'Description must be 1-300 characters',
    publicRoomDescriptionCharacterValidation: `Input only valid symbols(.,&@'’():;!?"$*+/%-=_)`,
    publicRoomTopicValidation: 'Choose a topic',
    inputValidation:
      'The username must have at least 2 characters, but no more than 30.',
  },
} as const;
