// // import R from 'ramda'
// import { merge } from 'lodash';
// import { makeExecutableSchema } from '@graphql-tools/schema'
// import { typeDef as Event, input as EventInput, resolvers as eventResolvers,
// } from './resolvers/event/event'

// // If you had Query fields not associated with a
// // specific type you could put them here
// const Query = `
//   type Query {
//     _empty: String
//   }
// `;

// const Mutation = `
//   type Mutation {
//     _empty: String
//   }
// `;

// const resolvers = {}

// export const schema = makeExecutableSchema({
//   typeDefs: [ Query, Mutation, Event, EventInput ],
//   resolvers: merge(resolvers, eventResolvers),
// })

import { schemaComposer } from './schemaComposer';
import getPersonById from './entrypoints/query/getPersonById'

schemaComposer.Query.addFields({
  getPersonById: getPersonById
})

const graphqlSchema = schemaComposer.buildSchema()
export default graphqlSchema
