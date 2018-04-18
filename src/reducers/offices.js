import { FETCHED_OFFICES } from '../actions/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_OFFICES :
    const mapCenter = {
              lat: ((payload.bounds.n + payload.bounds.s) / 2),
              lng: ((payload.bounds.w + payload.bounds.e) / 2)
            }
    console.log(mapCenter)
    return {center: mapCenter, rows: payload.rows}

    default :
      return state
  }
}
