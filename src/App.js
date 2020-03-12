import React from 'react'
import Styled from 'styled-components'
import Title from './components/layout/Title'
import Search from './components/layout/Search'
import News from './components/news/News'
import AppState from './state/AppState'

import './App.css'

const App = () => (
  <>
    <AppState>
      <Wrapper>
        <Title />
        <Search />
        <News />
      </Wrapper>
    </AppState>
  </>
)

const Wrapper = Styled.div`
position: relative;
margin: auto;
max-width: 80%;
overflow: hidden;

`
export default App
