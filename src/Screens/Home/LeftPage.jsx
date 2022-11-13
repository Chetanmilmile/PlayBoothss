import React from 'react'
import styled from 'styled-components'

const LeftStylePage = styled.div`
    position:fixed;
    top:0;
    left:0;
    width : 40%;
    height :100vh;
    background: linear-gradient(316deg, black, #80808000);
    display:flex;
    justify-content:center;
    align-items:center;
`
const LeftContainer = styled.div`
    text-align:center;
`
const Heading = styled.h1`
    color:white;
    font-weight:1500;
    font-size:2.2rem; 
    margin-bottom:0.8rem; 
`
const SubHeading = styled.h1`
    color:white;
    font-weight:300;
    font-size:1.2rem;
    margin-bottom:1rem;     
`
const Play =styled.button`
    padding:0.4rem 1.5rem;
    border-radius:30px;
    font-size:1.rem;
    display:flex;
    align-items:center;
    gap:1rem;
    
    span{
        font-weight:700;
        font-size:1.5rem;
    }
    &:hover{
        cursor:pointer;
    }
`


const LeftPage=()=> {

    const Type = 5;
  return (
    <LeftStylePage>
        <LeftContainer>
            <img src="/spider.png" alt=""/>
            <Heading>Spider Code</Heading>
            <SubHeading>Code.  Compile.  Develop.</SubHeading>
            <Play onClick={Type}><span>+</span> Create CodeBooth</Play>
        </LeftContainer>
    </LeftStylePage>
    
  )
}

export default LeftPage