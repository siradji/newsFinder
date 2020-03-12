// eslint-disable-next-line import/no-unresolved
import { SEARCH, FILTER, SORT, RESET, SET_TOPIC } from './types'

export default (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        posts: action.payload,
      }

    case FILTER:
      return {
        ...state,
        filterString: action.payload,
      }
    case SORT:
      return {
        ...state,
        sortBy: action.payload,
      }
    case RESET:
      return {
        ...state,
        posts: [],
      }
    case SET_TOPIC:
      return {
        ...state,
        topic: action.payload,
      }

    default:
      return state
  }
}
