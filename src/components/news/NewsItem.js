import React from 'react'
import Styled from 'styled-components'
import device from '../../utils/size'

const NewsItem = props => {
  const {
    post: { title, source, description, url, urlToImage },
  } = props

  return (
    <a href={url}>
      <Card>
        <CardMedia img={urlToImage} />
        <div style={{ padding: '0 10px' }}>
          <CardHeading>{title}</CardHeading>
          <CardText>
            <p>{description}</p>
          </CardText>
          <CardFooter>
            <h6 style={{ textDecoration: 'underline' }}>{source.name}</h6>
          </CardFooter>
        </div>
      </Card>
    </a>
  )
}

export default NewsItem

const Card = Styled.div`
background: #EFF8FF;
border: 1px solid #1F3862;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
height: 360px;
position: relative;
`

const CardMedia = Styled.div`
background: url(${props => props.img});
height: 120px;

`

const CardText = Styled.div`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 18px;
color: #1F3862;
margin-top:10px ;
@media ${device.mobile} {
    font-size: 15px;
}
`
const CardHeading = Styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
margin:10px 0 ;
color: #1F3862;
`

const CardFooter = Styled.div`
display: flex;
justify-content: space-between;
position: absolute;
bottom: 20px;
`
