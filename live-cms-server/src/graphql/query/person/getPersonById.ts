
   
import { PersonGraphQLType } from '../../entities';

// TODO input types
export default {
    type: PersonGraphQLType,
    args: {
      id: `Int!`,
    },
    resolve: async (_:any, args:any, { dataSources }: { dataSources: any}) => {
      const resp = await dataSources.personService.getPersonById(args.id)
      return resp
    }
}
