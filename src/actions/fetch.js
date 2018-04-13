import ApiClient from '../api/client'

export const FETCHED_OFFICES = 'FETCHED_OFFICES'

const api = new ApiClient()

export const fetchOffices = (location) => {
  return(dispatch) => {
    api.get(location)
      .then((res) => {
        dispatch({
          type: FETCHED_OFFICES,
          payload: res.body
        })
      })
      .catch((err) => {
        dispatch({
          payload: err.message
        })
      })
  }
}
