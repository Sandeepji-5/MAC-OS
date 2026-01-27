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

export const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>{formatDateTime(now)}</div>
  )
}
    