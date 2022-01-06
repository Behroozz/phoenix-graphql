import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
// import { get } from 'lodash'
import { pathOr  } from 'ramda'

import type { Events } from '../types';
import { queryKeys } from '../../../react-query/query-keys';
import { useGraphqlRequest } from '../../../hooks/user-request-graphql'
import { eventsQuery } from '../schema/events-query'

// for when we need a query function for useQuery
async function getEvents(request: any): Promise<Events[]> {
  return await request(eventsQuery)
}

export function useEvents(): Events[] {
  const request = useGraphqlRequest();
  const fallback = [];
  // surpass the referch
  const { data = fallback } = useQuery(queryKeys.events, () => getEvents(request));
  // return eventsget(data, 'events', [])
  return pathOr([], ['events'])(data)
}

// export function usePrefetchEvents(): void {
//   const queryClient = useQueryClient();
//   queryClient.prefetchQuery(queryKeys.events, getEvents);
// }
