export const uaTranslation = {
  main: {
    title: 'Вітаємо у чаті',
    description:
      "Спілкуйтеся, підключайтеся, залишайтеся на зв'язку і робіть спілкування простим.",
    ourTeem: 'Наша команда',
    version: 'Версія',
  },
  sidebar: {
    publicRooms: 'Публічні кімнати',
    myPublicRooms: 'Мої Публічні кімнати',
    privateRooms: 'Приватні кімнати',
    createRoom: 'Створити кімнату',
  },
  auth: {
    join: 'Приєднатися',
    logout: 'Вихід',
    inputPlaceholder: "Ім'я",
    formText: "Введіть своє ім'я",
    formDesc:
      'Якщо ви хочете приєднатися до кімнати, то ви повинні зареєструватися',
    greetingText: 'Дякуємо, що приєдналися до Talkie',
    logoutWarningTitle: 'Ви впевнені що хочете вийти?',
    logoutWarningDescription: 'Ви більше не зможете зайти в цей акаунт',
    logoutWarningCloseButton: 'Закрити',
    logoutWarningConfirmButton: 'Добре',
  },
  rooms: {
    public: 'Публічні кімнати',
    private: 'Приватні кімнати',
    title: 'Назва',
    description: 'Опис',
    topic: 'Тема',
    titlePlaceholder: 'Введіть назву кімнати',
    descriptionPlaceholder: 'Введіть опис кімнати',
    topicPlaceholder: 'Виберіть тему кімнати',
  },
  chat: {
    placeholder: 'Напишіть повідомлення...',
  },
  errors: {
    userNameLengthValidation: "Ім'я тільки з 2-30 символів",
    userNameCharacterValidation: "Введіть тільки допустимі символи('’._-)",
    publicRoomTitleLengthValidation: 'Заголовок тільки з 2-30 символів',
    publicRoomTitleCharacterValidation:
      "Введіть тільки допустимі символи('’._-)",
    publicRoomDescriptionLengthValidation:
      'Опис не повинен бути довше 300 символів',
    publicRoomDescriptionCharacterValidation: `Введіть тільки допустимі символи(.,&@'’():;!?"$*+/%-=_)`,
    publicRoomTopicValidation: 'Виберіть тему',
  },
} as const;
