import { GraphQLClient } from 'graphql-request'

// TODO figure out the env variables
const prodEndpoint = process.env.API_ENDPOINT || 'https://live-event-manager.dev/graphql'
const apiEndpoint = process.env.ENV == 'development' ? 'http://localhost:4000/graphql' : prodEndpoint

export const graphqlRequestClient = new GraphQLClient(
  apiEndpoint,
)