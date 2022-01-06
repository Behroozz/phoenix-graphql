import { composeWithJson, composeInputWithJson } from 'graphql-compose-json';
import { schemaComposer } from 'graphql-compose';

const restApiResponse = {
  name: 'Anakin Skywalker',
  birth_year: '41.9BBY',
  gender: 'male',
  mass: 77,
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/5/',
    'https://swapi.co/api/films/4/',
    'https://swapi.co/api/films/6/',
  ],
  species: ['https://swapi.co/api/species/1/'],
  starships: [
    'https://swapi.co/api/starships/59/',
    'https://swapi.co/api/starships/65/',
    'https://swapi.co/api/starships/39/',
  ],
};

export const PersonTC = composeWithJson('Person', restApiResponse);
export const PersonGraphQLType = PersonTC.getType(); // GraphQLObjectType



 
