import React, { useState, useContext } from 'react'
import Styled from 'styled-components'
import AppContext from '../../state/AppContext'
import device from '../../utils/size'

const Search = () => {
  const [topic, setTopic] = useState('')
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')

  const state = useContext(AppContext)

  const { fetchArticles, filterArticles, posts, getSortBy } = state

  const handleTopic = e => {
    const { value } = e.target
    setTopic(value)
  }

  const handleSort = e => {
    const { value } = e.target
    setSort(value)
    getSortBy(sort)
  }

  const handleFilter = e => {
    const { value } = e.target
    setFilter(value)
    if (filter !== '') {
      filterArticles(filter)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (topic !== '') {
      fetchArticles(topic)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {posts.length > 0 ? null : (
          <Input
            placeholder="Search for a topic.."
            value={topic}
            onChange={handleTopic}
            margin
          />
        )}
        {posts.length > 0 ? (
          <FilterWrapper>
            <div>
              <Label>Sort by</Label>
              <Select onChange={handleSort}>
                <option value="defult">Sort By</option>
                <option value="date">Date</option>
                <option value="title">Title</option>
              </Select>
            </div>
            <div>
              <Label>Filter</Label>
              <Input
                placeholder="Find Articles Containing.."
                value={filter}
                onChange={handleFilter}
              />
            </div>
          </FilterWrapper>
        ) : null}
        {posts.length > 0 ? null : (
          <ButttonWrapper>
            <Button> Find Articles</Button>
          </ButttonWrapper>
        )}
      </form>
    </div>
  )
}

// styled elements
const Input = Styled.input`
margin: ${props => (props.margin ? '20px 0' : '10px 0 ')} ;
background: #1F3862;
border-radius: 100px;
border: none;
width: 100%;
height: 48px;
display: block;
color: white;
font-size: 18px;
line-height: 20px;
padding: 0 20px;
@media ${device.mobileL} {
    width: 100%;
}
`

const Button = Styled.button`
background: #F97618;
border-radius: 5px;
width: 168px;
height: 48px;
border: none;
display: block;
color: white;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 20px;
@media ${device.mobileL} {
    width: 100%;
}

`

const FilterWrapper = Styled.div`
display: flex;
flex-direction: column;

`

const Select = Styled.select`
background: #1F3862;
border-radius: 5px;
width: 100%;
height: 36px;
color: white;
font-size: 14px;
line-height: 18px;
margin: 10px 0 ;
@media ${device.mobileL} {
font-size: 20px;

} 
`
const Label = Styled.label`
font-size: 16px;
color: white ;
@media ${device.mobileL} {
font-size: 20px;

}
`
const ButttonWrapper = Styled.div`
display: flex;
align-items: center;
justify-content: center;

`
export default Search
