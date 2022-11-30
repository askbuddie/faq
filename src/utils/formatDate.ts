const formatDate = (date: string) => {
  const newDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [monthAndDay, year] = newDate.split(",");

  return {
    monthAndDay,
    year: year.trim(),
  };
};

export default formatDate;
