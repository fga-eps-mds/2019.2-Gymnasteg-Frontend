const MS_PER_DAY = 1000 * 60 * 60 * 24;
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.abs(Math.floor((utc2 - utc1) / MS_PER_DAY));
}

export default function closestDateToToday(dates) {
  if (dates.length === 0) {
    return '';
  }

  let closestDateString = dates[0];
  let closestDateDifference = Infinity;

  dates.forEach((date) => {
    const initialDate = new Date(date);
    const dateDiff = dateDiffInDays(initialDate, new Date());

    if (dateDiff < closestDateDifference) {
      closestDateString = date;
      closestDateDifference = dateDiff;
    }
  });

  return closestDateString;
}
