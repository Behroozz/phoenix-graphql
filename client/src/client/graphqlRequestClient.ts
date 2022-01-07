import { GraphQLClient } from 'graphql-request';

const adminAPIEndpoint = 'https://live-event-manager.dev/graphql';

console.log('adminAPIEndpoint : ', adminAPIEndpoint);

export const graphqlRequestClient = new GraphQLClient(
  adminAPIEndpoint,
);
