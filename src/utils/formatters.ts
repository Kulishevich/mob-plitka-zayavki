export const formatNumber = (num: number) => `№ ${num.toLocaleString("ru-RU")}`;

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(date).toLocaleString("ru-RU", options);
};

export const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);

  return days > 0 ? ` (${days} дней)` : `(${hours} часов)`;
};
