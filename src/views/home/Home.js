import React from 'react'
import Styled from 'styled-components'

// Importing Components

import ShowCase from '../../components/showCase/ShowCase'
import Grid from '../../components/grid/Grid'
import Search from '../../components/Search'

// Background image
// import background from '../../assets/background.jpg'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Search />
        <Content>
          <ShowCase />
          <Grid grid="primary">
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </Grid>
        </Content>
      </Wrapper>
    </>
  )
}

const Wrapper = Styled.div`
height: 100vh;

`

const Content = Styled.div`
width: 80%;
margin: auto ;
`

export default Home
