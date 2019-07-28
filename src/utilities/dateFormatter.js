const formatDate = date => {
  date = date.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  date = new Date(date);
  return (
    date.getDate() +
    "-" +
    monthNames[date.getMonth()] +
    "-" +
    date.getFullYear()
  );
};

export default formatDate;
