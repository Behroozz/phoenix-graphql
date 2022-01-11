import { composeWithJson } from 'graphql-compose-json'

const restApiResponse =
  {
    "ID": 0,
    "thumbnail": "",
    "name": "",
    "franchise": "",
    "title": "",
    "short_name": "",
    "description": "",
    "infrastructure": {
      "metadata_id": 0,
      "encryption": "",
      "caption": "",
    }
  }


export const LeagueTC = composeWithJson('League', restApiResponse)
export const LeagueGraphQLType = LeagueTC.getType()


 
