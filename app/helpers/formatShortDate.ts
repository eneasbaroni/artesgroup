export const formatShortDate = (isoDate: string) => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const date = new Date(isoDate);
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  return `${day} ${month}`;
};
