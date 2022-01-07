import { graphqlRequestClient } from 'services/utils/request-client/graphqlRequestClient'
import { useGetPersonByIdQueryQuery, GetPersonByIdQueryQuery } from 'services/generated/schema'

interface PersonByIdInterface {
  data: GetPersonByIdQueryQuery
  isLoading: boolean
  isFetched: boolean
}
// TODO Require Wrapper for generate and none generated use queries
export function usePersonByID(id: number): PersonByIdInterface {
  const { data, isLoading, isFetched } = useGetPersonByIdQueryQuery(graphqlRequestClient, { getPersonById : id});
  return {
    data, isLoading, isFetched
  }
}
