export const leagueQuery = /* GraphQL */ `
query getLeagueByName($name: String!) {
  getLeagueByName(name: $name) {
    title
    ID
    thumbnail
    name
    franchise
    short_name
    description
    infrastructure {
      caption
      encryption
      metadata_id
    }
  }
}
`
