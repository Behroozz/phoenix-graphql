import React from 'react'
import { useEvents } from './hooks/useEvents'

const Events = () => {
  const data = useEvents()
  // return (
  //   <ul>{data && data?.events && data?.events.map((eventItem) => (
  //     <li key={eventItem.id.toString()}>{eventItem.eventName}</li>
  //   ))}</ul>
  // )
  return(
    <div>{JSON.stringify(data)}</div>
  )
}

export default Events
