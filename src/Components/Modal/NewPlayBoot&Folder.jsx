import React from 'react'
import styled from 'styled-components'

const Header=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const Heading = styled.p`
color:blue;
font-weigth:1500;
font-size:1rem;
padding: 0.5rem;
`
const Foldername =styled.p`
color:black;
font-weight:500;
padding:10px;
font-size:0.9rem;
margin:5px;

`
const Input = styled.input`
border: none;
padding:5px;
margin:5px;
border-bottom:1px solid red;
background-color:  #adadad;

color: white;
`
const CreateNewPlayBoot =styled.button`
width:200px;
height :30px;
padding:0.1rem 2rem;
background-color:black;
font-size:10px;
color:white;
display:flex;
align-items:center;
gap:1rem;
display:flex;
margin:5%20% 5% 20% ;
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
  justify-content:left;
  align-items:center;
  gap:2rem;
  
  `

function NewPlayBootAndFolder () {
  return (
    <>
    <Header>
    <Heading>Create New PlayBoot & Create New Folder</Heading>
    <p>X</p>
    </Header>
    <hr/>
    <Foldername>Enter Folder Name : <span><Input type="text" placeholder='Enter Folder Name'/></span></Foldername>
    <Foldername>Enter PlayBoot Name : <span><Input type="text" placeholder='Enter Playboot Name'/></span></Foldername>
    <Mood>
    <Language name = "" id="">
      <option value="1">C++</option>
      <option value="2">Pathan</option>
      <option value="3">JavaScript</option>
      <option value="4">Java</option>
    </Language><span>
    <CreateNewPlayBoot>Create PlayBoot</CreateNewPlayBoot></span>
    </Mood>
</>
      )
}

export default  NewPlayBootAndFolder