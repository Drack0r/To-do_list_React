function getCurrentDate() {
  /* ========== Logic ========== */
  const month = {
    1: "Janvier",
    2: "Février",
    3: "Mars",
    4: "Avril",
    5: "Mai",
    6: "Juin",
    7: "Juillet",
    8: "Août",
    9: "Septembre",
    10: "Octobre",
    11: "Novembre",
    12: "Décembre",
  };

  const currentDate = new Date();

  const date = {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  };

  /* ========== Return ========== */
  return `${date.day} ${month[date.month + 1]} ${date.year}`;
}

export default getCurrentDate;
