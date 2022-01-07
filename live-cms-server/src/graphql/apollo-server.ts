import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'
import graphqlSchema from './schema'
import { SchemaComposer } from 'graphql-compose';

import EventService from './services/eventService'

// TODO should we setup http server with subscription?
const setUpApolloServer = async(app: Application) => {
  try {
    const apolloServer = new ApolloServer({ schema: graphqlSchema,
      introspection: true,
      dataSources: () => {
        return {
          eventService: new EventService(),
        };
      },    
     })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app, path: '/graphql' })
  } catch(ex) {
    console.log('ex', ex)
  }
}

export {
  setUpApolloServer
}