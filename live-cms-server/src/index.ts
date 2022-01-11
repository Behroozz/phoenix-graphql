import { app } from './app'

const start = async () => {
  app.listen(4000, () => {
    console.log('Server listening on port 4000')
  })
}

start()
