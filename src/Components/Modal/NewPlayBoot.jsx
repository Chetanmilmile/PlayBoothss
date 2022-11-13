import React from 'react'
import styled from 'styled-components'

const Header=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Heading = styled.p`
color:blue;
font-weight:1500;
font-size:1rem;
padding: 0.5rem;
`



const Input = styled.input`
border: none;
border-bottom:2px solid red;
background-color:  #adadad;
height:30px;

color: white;
`
const CreateNewPlayBoot =styled.button`
width:300px;
height :30px;
padding:0.1rem 2rem;
background-color:black;
font-size:15px;
color:white;
margin:20px 5px 20px 5px;
&:hover{
    cursor:pointer;
}
`
const Language = styled.select`
width : 130px;
height :30px;
background-color:  #adadad;
`
const Mood = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:10px;
  gap:2rem;
  
  `

function NewPlayBoot() {
  return (
    <>
    <Header>
    <Heading>Create New PlayBooth</Heading>
    <p>X</p>
    </Header>
    <hr/>
    <Mood>
    <Input type="text" placeholder='Enter Playbooth Name'/>
    <Language name = "" id="">
      <option value="1">C++</option>
      <option value="2">Pathan</option>
      <option value="3">JavaScript</option>
      <option value="4">Java</option>
    </Language>
    </Mood>
    <CreateNewPlayBoot>Create PlayBooth</CreateNewPlayBoot>
    
</>
  )
}

export default NewPlayBoot