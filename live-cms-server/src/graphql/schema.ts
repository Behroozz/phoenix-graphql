import { schemaComposer } from './schemaComposer'
// Queries
import getPersonById from './query/person/getPersonById'
import getLeagueByName from './query/league/getLeagueByName'
// Mutations
import addLeague from './mutation/league/addLeague'

// Queries
schemaComposer.Query.addFields({
  getPersonById: getPersonById,
  getLeagueByName: getLeagueByName
})
// Mutations
schemaComposer.Mutation.addFields({
  addLeague: addLeague,
})

const graphqlSchema = schemaComposer.buildSchema()
export default graphqlSchema
