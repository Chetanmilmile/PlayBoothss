import React from 'react'
import { icons } from 'react-icons'
import styled from 'styled-components'
import {IoTrashOutline} from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'

const RightStylePage = styled.div`
    position:absolute;
    top:0;
    right:0;
    width : 60%;
    padding:2rem;
    heigth: 100vh;   
` 
const Header =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    // border-bottom : 2px solid red;
`
const Heading = styled.h3`
    font-size:${props=> props.size==="small"? "1" : "1.75rem"};
  

    span{
        font-weigth: 1500;
    }
`
const NewFolder = styled.div`
font-size:0.8rem;
    font-weigth:200;
    border-radius:30px;
    padding:0.5rem 1.75rem;
    display:flex;
    align-items:center;
    gap: 0.5rem;
    span{
        font-size: 1rem;
        font-weight: 700;
    }
    &:hover{
        curser: pointer;
    }
`
const Folder = styled.div`
    margin-bottom: 1rem;
`
const FolderIcons = styled.div`
display: flex;
align-items:center;
gap:0.8rem;

`
const Logo = styled.img`
heigth: 80px;
width :80px;
border-radius:10px;
`
const PlayBoothCards = styled.div`
display :grid;
grid-template-columns:1fr 1fr;
gap:2rem;
margin:2px;



`
const CardContainer = styled.div`
border:2px solid red;
border-radius:15px;
padding:0.5rem;
background:grey;
display:flex;
justify-content:space-between;
    
`
const CardContent = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
    

`
const Content = styled.div`
color:white;

`



const RightPage=()=> {
  return (
    <RightStylePage>
        <Header>

            <Heading size="large"> My<span> PlayBooth</span></Heading>
            
            <NewFolder ><span>+</span>New Folder</NewFolder>
        </Header>
        <hr/>
        <Folder>
            <Header>
                <Heading size="small"> Folder Name</Heading>
            
                <NewFolder >
                <FolderIcons>
                    <IoTrashOutline/>
                    <BiEditAlt/>
                </FolderIcons>
                    <span>+</span>New PlayBooth</NewFolder>
            </Header>

            
                
                <PlayBoothCards>
                 {
                 Array.from({length:4}).map(() => (
                    <CardContainer>
                         <CardContent>
                                 <Logo src="/spider.png" alt=""/>
                             <Content>
                                 <p>Folder Name</p>
                                 <p>Language: C++</p>
                             </Content>         
                         </CardContent>
                         <FolderIcons>
                             <IoTrashOutline/>
                             <BiEditAlt/>
                         </FolderIcons>
                    </CardContainer>
                 ))
}
                </PlayBoothCards>
                
            


            
        </Folder>
    </RightStylePage>
  )
}

export default RightPage