export const formatDate = (date: string) => {
  const jsDate = new Date(date);

  return new Intl.DateTimeFormat("pt-BR").format(jsDate);
};
