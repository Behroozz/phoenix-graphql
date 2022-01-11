import { graphqlRequestClient } from 'services/utils/request-client/graphqlRequestClient'
import { useGetLeagueByNameQuery, GetLeagueByNameQuery } from 'services/generated/schema'

interface LeagueByNameInterface {
  data: GetLeagueByNameQuery
  isLoading: boolean
  isFetched: boolean
}
// TODO Require Wrapper for generate and none generated use queries
export function useLeagueByName(name: string): LeagueByNameInterface {
  const { data, isLoading, isFetched } = useGetLeagueByNameQuery(graphqlRequestClient, { name });
  return {
    data, isLoading, isFetched
  }
}
