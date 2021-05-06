import moment from 'moment'

const MONDAY = 1
const TUESDAY = 2
const WEDNESDAY = 3
const THURSDAY = 4
const FRIDAY = 5
const SATURDAY = 6
const SUNDAY = 0

const ODD_PLATE_NUMBER_RESTRICTED_DAYS = [MONDAY, WEDNESDAY, FRIDAY]

const PAIR_PLATE_NUMBER_RESTRICTED_DAYS = [TUESDAY, THURSDAY, SATURDAY]

const NO_CIRCULATION = [SUNDAY]

const isOdd = (num) => {
  return num & 1
}

const checkTimeRestriction = (time) => {
  const format = 'HH:mm'

  if (time.isBetween(moment('7:00', format), moment('9:30', format))) {
    return true
  }

  if (time.isBetween(moment('14:00', format), moment('19:30', format))) {
    return true
  }

  return false
}

const checkDayRestriction = (date, time, daysArray) => {
  const hasDayRestriction = daysArray.includes(date.day())

  if (hasDayRestriction) {
    return checkTimeRestriction(time)
  }

  return false
}

const hasRestriction = (lastDigit, date, time) => {
  if (NO_CIRCULATION.includes(date.day())) {
    return true
  }

  if (isOdd(lastDigit)) {
    return checkDayRestriction(date, time, ODD_PLATE_NUMBER_RESTRICTED_DAYS)
  } else {
    return checkDayRestriction(date, time, PAIR_PLATE_NUMBER_RESTRICTED_DAYS)
  }
}

export { hasRestriction }
