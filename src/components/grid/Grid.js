import React from 'react'
import PropTypes from 'prop-types'

import Styled from 'styled-components'

const Grid = ({ children, grid }) => {
  return <GridWrapper grid>{children}</GridWrapper>
}

const GridWrapper = Styled.div`
display: grid; 
grid-template-columns: ${props => (props.primary ? '1fr 1fr 1fr' : '1fr 1fr')};

`

export default Grid
