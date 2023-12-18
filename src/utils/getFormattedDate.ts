const todayText = 'TODAY';
const yesterdayText = 'YESTERDAY';

export const getFormattedDate = (messageDate: string): string => {
  const today = new Date();
  const messageDateObject = messageDate;

  const isToday = new Date().toLocaleDateString('uk-UA') === messageDateObject;
  const isYesterday =
    new Date(today.getTime() - 86400000).toLocaleDateString('uk-UA') ===
    messageDateObject;

  if (isToday) return todayText;
  if (isYesterday) return yesterdayText;

  return messageDateObject;
};
