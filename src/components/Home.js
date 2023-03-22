import React from 'react'
import ImageSlider from './ImageSlider'
import Header from './Header'
import styled from 'styled-components'
const Home = () => {
  return (
    <Container>
      <Header />
      <ImageSlider />
    </Container>
  )
}

export default Home


const Container = styled.main`
    background-color: rgb(0,0,0);
    background: url("/images/background.jpg");
    background-size: 100%;
    height:2048px;
    background-repeat: repeat-y;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow: hidden;
`