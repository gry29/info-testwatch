export const users = [
  { id: 1, userName: "Вася" },
  { id: 2, userName: "Коля" },
  { id: 3, userName: "Света" },
  { id: 4, userName: "Петя" },
  { id: 5, userName: "Вован" }
];

export const groups = [
  { id: 1, groupName: "Администраторы", users: [1, 2, 3, 4], rights: [1] },
  { id: 2, groupName: "Аналитики", users: [1, 2, 3], rights: [1, 2, 3] },
  { id: 3, groupName: "Менеджеры по продажам", users: [1, 2], rights: [1] },
  { id: 4, groupName: "Клиенты", users: [1, 2, 4], rights: [2] }
];

export const rights = [
  { id: 1, rightName: "Можно открывать страницу админа" },
  { id: 2, rightName: "Можно добавлять пользователя" },
  { id: 3, rightName: "Могут иметь доступ к данным бугалтерии" },
  { id: 4, rightName: "Можно покупать товар" },
  { id: 5, rightName: "Можно совершать звонки клиентам" }
];
