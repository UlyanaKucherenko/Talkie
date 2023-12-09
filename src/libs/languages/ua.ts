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
  },
  rooms: {
    public: 'Публічні кімнати',
    private: 'Приватні кімнати',
  },
  chat: {
    placeholder: 'Напишіть повідомлення...',
  },
  errors: {
    userNameLengthValidation: "Ім'я має мати 2-30 символів",
    userNameCharacterValidation: 'Ви ввели не коректний символ',
  },
} as const;
