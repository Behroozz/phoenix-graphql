import { composeWithJson } from 'graphql-compose-json'

const restApiResponse = {
  employee_name: '',
  employee_salary: 0,
  employee_age: 0,
  profile_image: ''
}

export const PersonTC = composeWithJson('Person', restApiResponse)
export const PersonGraphQLType = PersonTC.getType()



 
