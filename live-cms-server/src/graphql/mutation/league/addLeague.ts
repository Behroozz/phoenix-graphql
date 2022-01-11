import { LeagueGraphQLType } from '../../entities'

// TODO input types
export default {
    type: LeagueGraphQLType,
    args: {
      thumbnail: 'String!',
      name: 'String!',
      franchise: 'String!',
      title: 'String!',
      short_name: 'String!',
      description: 'String!'
    },
    resolve: async (_:any, { thumbnail,name, franchise, title, short_name, description  } : any, { dataSources }: { dataSources: any}) => {
      const newLeague = {
        ID: 3,
        thumbnail,
        name,
        franchise,
        title,
        short_name,
        description
      }
      // update the DB
      return newLeague
    }
}
