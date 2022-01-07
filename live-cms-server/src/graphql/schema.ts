import { schemaComposer } from './schemaComposer';
import getPersonById from './query/getPersonById'

schemaComposer.Query.addFields({
  getPersonById: getPersonById
})

const graphqlSchema = schemaComposer.buildSchema()
export default graphqlSchema
