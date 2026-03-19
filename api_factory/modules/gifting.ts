import { GATEWAY_ENDPOINT } from '../axios.config'

export const gifting_api = {
  $_create_gifting_request: (payload: any) => {
    return GATEWAY_ENDPOINT.post('/gifting', payload)
  }
}
