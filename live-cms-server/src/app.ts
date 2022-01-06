import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'
import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler, NotFoundError } from '@vrshared/common'
import cookieSession from 'cookie-session'
import dotenv from 'dotenv'
// import { setUpApolloServer } from './graphql/apollo-server'
dotenv.config()

// express server
const app = express()
// setUpApolloServer(app)

// to let express know that is behind the proxy of express nginx
app.set('trust proxy', true)
app.use(json())
// we set the cookie and set it to user
// Cookie
// Transport Mechanism to move any kind of data between browser and server and automarically manager by browser
app.use(
  cookieSession({
    signed: false,
    // only send cookie over https request unless it is test, jest set this env variable
    secure: process.env.NODE_ENV !== 'test'
  })
)

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.all('*', async (req, res, next) => {
  // TODO how to handle this case?
  if (req.url === '/graphql') return next()

  throw new NotFoundError()
})

app.use(errorHandler)

export { app }


