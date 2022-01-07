import { schemaComposer } from './schemaComposer';
import getPersonById from './entrypoints/query/getPersonById'

schemaComposer.Query.addFields({
  getPersonById: getPersonById
})

const graphqlSchema = schemaComposer.buildSchema()
export default graphqlSchema
