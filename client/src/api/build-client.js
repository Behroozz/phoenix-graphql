import axios from 'axios'

const clusterSvcUrl = process.env.CLUSTER_SVC_URL 

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL:
      clusterSvcUrl,
      headers: req.headers
    })
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: '/'
    })
  }
}
