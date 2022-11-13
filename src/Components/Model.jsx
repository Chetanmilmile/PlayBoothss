import React from 'react'
import styled from 'styled-components'
import { NewFolder , NewPlayBootAndFolder, NewPlayBoot, EditFolder } from './Modal'
import EditPlayBoot from './Modal/EditPlayboot'
const ModelContainer =styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items: center;
`
const ModelContent = styled.div`
background-color: #adadad;
border:2px solid red;
border-radius:15px;
padding:0.5rem;
box-shadow: 5px 10px #2f2f2f;

`

const Model = ()=>{


  const type =5;
  return (
    <ModelContainer>
        <ModelContent>
          {type ===1 && <EditPlayBoot/>}
          {type ===2 &&<EditFolder/>} 
          {type ===3 && <NewFolder/>} 
          {type ===4 &&<NewPlayBoot/> } 
          {type ===5 && <NewPlayBootAndFolder/>}
        </ModelContent>
    </ModelContainer>
  )
}

export default Model