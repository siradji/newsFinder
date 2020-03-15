import React from 'react'
import Styled from 'styled-components'
import spinner from './spinner.gif'

const Spinner = () => (
  <>
    {' '}
    <Image src={spinner} alt="Loading... " />
  </>
)

const Image = Styled.img`
display: block;
margin: 40px auto;
width: 100px;

`
export default Spinner
