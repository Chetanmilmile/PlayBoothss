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


const Mood = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:10px;
  gap:2rem;
  
  `

function EditFolder() {
  return (
    <>
    <Header>
    <Heading>Edit Folder Title</Heading>
    <p>X</p>
    </Header>
    <hr/>
    <Mood>
    <Input type="text" placeholder='Enter Folder Name'/>
    <CreateNewPlayBoot>Create Folder</CreateNewPlayBoot>
    </Mood>
    
</>
  )
}

export default EditFolder