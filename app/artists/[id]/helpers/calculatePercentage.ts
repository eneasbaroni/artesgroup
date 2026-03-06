/* Helper para calcular el porcentaje */
export const calculatePercentage = (value: number, total: number) => {
  return ((value / total) * 100).toFixed(2);
};
