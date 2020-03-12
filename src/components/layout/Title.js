import React, { useContext } from 'react'

import Styled from 'styled-components'
import AppContext from '../../state/AppContext'

import device from '../../utils/size'

const Title = () => {
  const state = useContext(AppContext)
  const { posts, reset, topic } = state
  if (posts.length > 0) {
    return (
      <Notifiction>
        <p>{`You searched for: "${topic}"`}</p>
        <Button type="button" onClick={reset}>
          Search Again?
        </Button>
      </Notifiction>
    )
  }
  return (
    <TitleWrapper>
      <h1>
        News<span style={{ color: '#E1F2FE' }}>Finder</span>
      </h1>
    </TitleWrapper>
  )
}

const TitleWrapper = Styled.div`
@media ${device.mobileL} {
font-size: 36px;
}
font-size:20px ; 
margin-top: 50px ;
text-align:center ;
font-style: normal;
font-weight: bold;
line-height: 40px;
`

const Notifiction = Styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #E1F2FE;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
font-size:20px ; 
margin-top: 50px ; 
`

const Button = Styled.button`
background: transparent;
color:#F97618;
border: none;
margin-top:10px;
`

export default Title
