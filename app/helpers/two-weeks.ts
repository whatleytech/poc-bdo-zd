export const twoWeeks = () =>
  Array.from({ length: 14 }, (_, i) => {
    const date = new Date(2023, 11, 25);
    date.setDate(date.getDate() + i);
    return date; // returns date in 'YYYY-MM-DD' format
  });
