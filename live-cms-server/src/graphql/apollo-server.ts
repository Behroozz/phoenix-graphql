import { ApolloServer } from 'apollo-server-express'
import { Application } from 'express'
import graphqlSchema from './schema'
import PersonService from './services/person/person.service'
import { mocks } from './utils'

// TODO should we setup http server with subscription?
// TODO Do we need to have introspection
const setUpApolloServer = async(app: Application) => {
  try {
    const apolloServer = new ApolloServer({ schema: graphqlSchema,
      introspection: true,
      mocks,
      mockEntireSchema: false,
      dataSources: () => {
        return {
          personService: new PersonService(),
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