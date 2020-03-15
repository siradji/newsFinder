// eslint-disable-next-line import/no-unresolved
import { SEARCH, FILTER, SORT, RESET, SET_TOPIC, SET_LOADING } from './types'

export default (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        posts: action.payload,
        loading: false,
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
        filterString: '',
        sortBy: '',
      }
    case SET_TOPIC:
      return {
        ...state,
        topic: action.payload,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
