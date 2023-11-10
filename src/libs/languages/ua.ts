export const uaTranslation = {
  main: {
    title: 'Вітаємо у чаті',
    description:
      "Спілкуйтеся, підключайтеся, залишайтеся на зв'язку і робіть спілкування простим.",
    Rooms: 'Кімнати',
    About: 'Про нас',
    ourTeem: 'Наша команда',
  },
  auth: {
    join: 'Приєднатися',
    logout: 'Вихід',
    inputPlaceholder: "Ім'я",
    formText: "Введіть своє ім'я",
    greetingText: 'Дякуємо, що приєдналися до Talkie',
  },
  rooms: {
    public: 'Публічні кімнати',
    private: 'Приватні кімнати',
  },
  errors: {
    inputValidation: 'Імя має бути не менше 2 символів і не більше 26',
  },
} as const;
