import React, { useReducer } from 'react'
import axios from 'axios'

import AppContext from './AppContext'
import AppReducer from './AppReducer'

// importing Types

import { SEARCH, FILTER, SORT, RESET, SET_TOPIC, SET_LOADING } from './types'

const AppState = props => {
  const initialState = {
    posts: [],
    filterString: '',
    sortBy: '',
    topic: '',
    loading: false,
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)

  // set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }
  const fetchArticles = async parameter => {
    setLoading()
    const response = await axios(
      `https://newsapi.org/v2/everything?q=${parameter}&apiKey=a5863a3ead424003805e8293c6068b4a`,
    )

    dispatch({
      type: SEARCH,
      payload: response.data.articles,
    })
    console.log(response.data)
    dispatch({
      type: SET_TOPIC,
      payload: parameter,
    })
  }

  const filterArticles = topic => {
    dispatch({
      type: FILTER,
      payload: topic,
    })
  }

  const getSortBy = parameter => {
    dispatch({
      type: SORT,
      payload: parameter,
    })
  }

  const reset = () => {
    dispatch({ type: RESET })
  }

  const { children } = props

  const { posts, loading, filterString, sortBy, topic } = state

  return (
    <AppContext.Provider
      value={{
        posts,
        fetchArticles,
        filterArticles,
        filterString,
        sortBy,
        reset,
        getSortBy,
        topic,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
