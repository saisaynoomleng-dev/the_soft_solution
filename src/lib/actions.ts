export const capitalizeText = (text: string) => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-Us', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });
};
