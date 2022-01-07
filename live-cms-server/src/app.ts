import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'
import { errorHandler, NotFoundError } from '@vrshared/common'
import dotenv from 'dotenv'
import { setUpApolloServer } from './graphql/apollo-server'
dotenv.config()

// express server
const app = express()
setUpApolloServer(app)

// to let express know that is behind the proxy of express nginx
app.set('trust proxy', true)
app.use(json())
// we set the cookie and set it to user
// Cookie
// Transport Mechanism to move any kind of data between browser and server and automarically manager by browser

app.all('*', async (req, res, next) => {
  // TODO how to handle this case? 
  if (req.url === '/graphql') return next()

  throw new NotFoundError()
})

app.use(errorHandler)

export { app }


