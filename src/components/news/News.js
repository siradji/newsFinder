/* eslint-disable consistent-return */
import React, { useContext } from 'react'
import Styled from 'styled-components'
import device from '../../utils/size'
import AppContext from '../../state/AppContext'
import Spinner from '../layout/Spinner'
import NewsItem from './NewsItem'

const News = () => {
  const state = useContext(AppContext)
  const { posts, filterString, sortBy, loading } = state

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

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {posts.length ? (
        <div style={{ marginTop: '20px' }}>
          <Heading>
            Showing <Span>{posts.length}</Span> articles
          </Heading>
        </div>
      ) : null}
      <GridWrapper>
        {posts.length > 0
          ? filtered.map(article => <NewsItem key={article.url} post={article} />)
          : null}
      </GridWrapper>
    </>
  )
}

const GridWrapper = Styled.div`
margin-top: 50px;
display:grid;
grid-template-columns: 1fr;
grid-gap: 20px;
@media ${device.mobileL} {
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 15px;
}
`

const Span = Styled.span`
font-weight: bold;
font-size: 30px;
margin: 0 2px;
`

const Heading = Styled.p`
color: #E1F2FE;
font-size: 20px;
`
export default News
