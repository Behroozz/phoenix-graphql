
   
import { PersonGraphQLType } from '../../entities/person';

// TODO input types
export default {
    type: PersonGraphQLType,
    args: {
      id: `Int!`, // equals to `new GraphQLNonNull(GraphQLInt)`
    },
    resolve: async (_:any, args:any, { dataSources }: { dataSources: any}) => {
      const resp = await dataSources.eventService.getPersonById(args.id)
      console.log('resp', resp)
      return resp
    }
}
