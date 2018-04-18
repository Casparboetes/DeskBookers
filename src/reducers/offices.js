import { FETCHED_OFFICES } from '../actions/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_OFFICES :
      return payload.rows

    default :
      return state
  }
}
