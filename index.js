const form = document.getElementById('date-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const dayValue = document.getElementById('day-input').value
  const monthValue = document.getElementById('month-input').value - 1
  const yearValue = document.getElementById('year-input').value

  if (
    dayValue > 31 ||
    dayValue < 1 ||
    monthValue > 12 ||
    monthValue < 1 ||
    yearValue < 1
  ) {
    console.log('invalid date')
  } else {
    const currentDate = new Date()
    const inputDate = new Date(yearValue, monthValue, dayValue)
    const { years, months, days } = getDateDifference(currentDate, inputDate)
    const addDay = document.getElementById('add-day')
    const addMonth = document.getElementById('add-month')
    const addYear = document.getElementById('add-year')

    addDay.textContent = days
    addMonth.textContent = months
    addYear.textContent = years
  }
})

function getDateDifference (date1, date2) {
  const millisecondsInDay = 24 * 60 * 60 * 1000
  const differenceInMilliseconds = Math.abs(date2 - date1)

  // Calculate years
  const years = Math.floor(
    differenceInMilliseconds / (365.25 * millisecondsInDay)
  )
  const remainingMilliseconds =
    differenceInMilliseconds % (365.25 * millisecondsInDay)

  // Calculate months
  const months = Math.floor(remainingMilliseconds / (30.44 * millisecondsInDay))
  const remainingDaysMilliseconds =
    remainingMilliseconds % (30.44 * millisecondsInDay)

  // Calculate days
  const days = Math.floor(remainingDaysMilliseconds / millisecondsInDay)

  return { years, months, days }
}
