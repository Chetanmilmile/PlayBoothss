import React from 'react'
import styled from 'styled-components'
import LeftPage from './LeftPage'
import RightPage from './RightPage'
import Model from '../../Components/Model'


const Myhome = styled.div`
    width: 100%;
    height: 100vh;
    
`

const Home=()=> {
  return (
  <Myhome>
    <LeftPage/>
    <RightPage/>
    <Model/>
  </Myhome>
  )
}

export default Home