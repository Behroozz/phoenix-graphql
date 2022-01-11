
   
import { LeagueGraphQLType } from '../../entities'
import { leagueMetadata, leagueInfrastructure } from '../../utils/mocks/mocks'

// TODO input types
export default {
    type: [LeagueGraphQLType],
    args: {
      name: 'String!',
    },
    resolve: async (_:any, args:any, { dataSources }: { dataSources: any}) => {
      const result = leagueMetadata.map((metadata: any) => {
        const infrObj = leagueInfrastructure.find((infra: any) => infra.metadata_id === metadata.ID)
        return {
          ...metadata,
          infrastructure: {
            ...infrObj
          }
        }
      })
      return result
    }
}
