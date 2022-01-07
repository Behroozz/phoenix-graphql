export const eventsQuery = /* GraphQL */ `
query getPersonByIdQuery($getPersonById: Int!) {
  getPersonById(id: $getPersonById) {
    employee_name
  }
}
`
