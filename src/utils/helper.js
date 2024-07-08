// Helper functions

//subtracts a specified number of hours from the current date and time and returns the resulting date object.
export function subtractHours(hours) {
    var date = new Date()
    date.setHours(date.getHours() - hours)
    date.setMinutes(date.getMinutes() - Math.floor(Math.random() * 60))
    return date
  }
  