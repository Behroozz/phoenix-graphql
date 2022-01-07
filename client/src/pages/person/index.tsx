import React from 'react'
import { usePersonByID } from 'services/hooks'

const Persons = () => {
  const { data, isLoading, isFetched } = usePersonByID(1);
  return(
    <div>{isFetched && !isLoading && JSON.stringify(data)}</div>
  )
}

export default Persons
