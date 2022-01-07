import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
// import { get } from 'lodash'
import { pathOr  } from 'ramda'

import type { Events } from '../types';
import { queryKeys } from '../../../react-query/query-keys';
import { useGraphqlRequest } from '../../../hooks/user-request-graphql'
import { graphqlRequestClient } from '../../../api';

import { useGetPersonByIdQueryQuery } from '../../../generated/graphql'


// // for when we need a query function for useQuery
// async function getEvents(request: any): Promise<Events[]> {
//   return await request(useGetPersonByIdQueryQuery, { id: 1 })
// }

export function useEvents(): Events[] {
  const request = useGraphqlRequest();
  const fallback = [];
  // surpass the referch
  // const { data = fallback } = useQuery(queryKeys.events, () => useGetPersonByIdQueryQuery(graphqlRequestClient, { getPersonById : 1}));
  const { data, isLoading, isSuccess } = useGetPersonByIdQueryQuery(graphqlRequestClient, { getPersonById : 1});
  console.log('data', data)
  // return eventsget(data, 'events', [])
  return pathOr([], ['events'])(data)
}

// export function usePrefetchEvents(): void {
//   const queryClient = useQueryClient();
//   queryClient.prefetchQuery(queryKeys.events, getEvents);
// }
