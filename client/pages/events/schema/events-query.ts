import { gql } from 'graphql-request'

export const eventsQuery = gql`
  {
    events {
      id
      eventName
    }
  }
`

