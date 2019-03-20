export const getDuration = function (start, end, displayMonths) {
  const startDate = new Date(start)
  const endDate = end === 'today' ? new Date() : new Date(end)
  let yearDuration = endDate.getFullYear() - startDate.getFullYear()
  let monthDuration = endDate.getMonth() - startDate.getMonth()
  if (monthDuration < 0 || (monthDuration === 0 && endDate.getDate() < startDate.getDate())) {
    yearDuration--
    monthDuration = 12 + monthDuration
  }
  return displayMonths ? [yearDuration, monthDuration] : [yearDuration]
}
