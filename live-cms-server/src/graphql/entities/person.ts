import { composeWithJson, composeInputWithJson } from 'graphql-compose-json';
import { schemaComposer } from 'graphql-compose';

const restApiResponse = {
  employee_name: 'Tiger Nixon',
  employee_salary: 320800,
  employee_age: 61,
  profile_image: ''
};

export const PersonTC = composeWithJson('Person', restApiResponse);
export const PersonGraphQLType = PersonTC.getType(); // GraphQLObjectType



 
