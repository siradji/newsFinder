/* eslint-disable consistent-return */
import React, { useContext } from 'react'
import Styled from 'styled-components'
import device from '../../utils/size'
import AppContext from '../../state/AppContext'

import NewsItem from './NewsItem'

const Alert = () => (
  <div>
    {' '}
    <h1> Search for something...</h1>
  </div>
)

const News = () => {
  const state = useContext(AppContext)
  const { posts, filterString, sortBy } = state

  const filtered = posts.filter(({ title, description }) => {
    const titleString = title.toLowerCase()
    const desString = description.toLowerCase()
    return titleString.includes(filterString) || desString.includes(filterString)
  })

  if (sortBy.length) {
    // eslint-disable-next-line array-callback-return
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          if (a.title < b.title) {
            return 1
          }
          if (a.title > b.title) {
            return -1
          }
          break
        case 'date':
          if (a.publishedAt < b.publishedAt) {
            return 1
          }
          if (a.publishedAt > b.publishedAt) {
            return -1
          }
          break
        default:
          return 0
      }
    })
  }

  return (
    <Wrapper>
      {posts.length > 0 ? (
        filtered.map(article => <NewsItem key={article.title} post={article} />)
      ) : (
        <Alert />
      )}
    </Wrapper>
  )
}

const Wrapper = Styled.div`
margin-top: 50px;
display:grid;
grid-template-columns: 1fr;
grid-gap: 20px;
@media ${device.mobileL} {
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 15px;
}

`

export default News
