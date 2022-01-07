import React from 'react'
import { pathOr  } from 'ramda'
import { useEvents } from './hooks/useEvents'
import { graphqlRequestClient } from '../../client';

import { useGetPersonByIdQueryQuery } from '../../generated/graphql'

const Events = () => {
  // const data = useEvents()
  const { data, isLoading, isFetched } = useGetPersonByIdQueryQuery(graphqlRequestClient, { getPersonById : 1});

  // return (
  //   <ul>{data && data?.events && data?.events.map((eventItem) => (
  //     <li key={eventItem.id.toString()}>{eventItem.eventName}</li>
  //   ))}</ul>
  // )
  return(
    <div>{isFetched && JSON.stringify(data)}</div>
  )
}

export default Events
