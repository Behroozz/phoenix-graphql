import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
// import { get } from 'lodash'

class PersonService extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://dummy.restapiexample.com/api/v1/'
  }

  willSendRequest(request: RequestOptions) {
    console.log('request', request)
  }

  async getPersonById(id: number) {
    const resp = await this.get(`employee/${id}`)
    return resp.data
    // return get(resp, 'data')
  }
}

export default PersonService
