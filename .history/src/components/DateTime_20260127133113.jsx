import React, { useEffect, useState } from 'react'

function formatDateTime(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dt = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  const meridian = hour >= 12 ? 'pm' : 'am'
  
  // 12-hour format
  hour = hour % 12 || 12
  // Pad minutes
  min = min < 10 ? `0${min}` : min

  return `${day} ${month} ${dt} ${hour}:${min}${meridian}`
}

// DateTime is a React functional component that displays the current date and time,
// updating itself every second.
export const DateTime = () => {
  // 'now' holds the current date object, initialized to the time when the component mounts.
  // 'setNow' is used to update 'now' with the current time.
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    // setInterval runs a function every 1000 milliseconds (1 second),
    // updating the 'now' state to trigger a re-render with the current date/time.
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)
    // Cleanup: when the component unmounts, the interval is cleared to prevent memory leaks.
    return () => clearInterval(interval)
  }, [])

  return (
    <div>{formatDateTime(now)}</div>
  )
}
    