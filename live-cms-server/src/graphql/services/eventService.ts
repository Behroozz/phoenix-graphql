import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

class EventService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://dummy.restapiexample.com/api/v1/';
  }

  willSendRequest(request: RequestOptions) {
    console.log('request', request)
  }


  async getPersonById(id: number) {
    return await this.get(`employee/${id}`);
  }
}

export default EventService
