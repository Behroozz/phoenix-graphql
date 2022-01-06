import { gql } from 'apollo-server-express'

export const typeDef = gql`
  extend type Query {
    events: [Event]
  }

  type Event {
    id: Int!
    eventName: String
  }
`

export const input = gql`
  extend type Mutation {
    createEvent(input: EventInput!): String
  }

  input EventInput {
    eventName: String
  }
`

export const resolvers = {
  Query: {
    events: () => [
      { id: 1, eventName: 'event1'},
      { id: 2, eventName: 'event2'}
    ],
  },
  Mutation: {
    createEvent: (_root: any, {input}: {input: any}) => {
        return 'created'
    }
  }
};
