import { GraphQLClient } from 'graphql-request'

const apiEndpoint = process.env.API_ENDPOINT || 'https://live-event-manager.dev/graphql';

console.log('apiEndpoint : ', apiEndpoint)

export const graphqlRequestClient = new GraphQLClient(
  apiEndpoint,
)
