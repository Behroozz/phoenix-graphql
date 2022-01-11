import React from 'react'
import { useLeagueByName } from 'services/hooks'

const League = () => {
  const { data, isLoading, isFetched } = useLeagueByName('Test');
  return(
    <div>{isFetched && !isLoading && JSON.stringify(data)}</div>
  )
}

export default League
