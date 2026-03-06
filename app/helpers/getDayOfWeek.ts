export const getDayOfWeek = (isoDate: string) => {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const date = new Date(isoDate);
  return days[date.getUTCDay()];
};
