import React, { useState } from 'react';
import styled from "styled-components";
import './index.css'

import buttonAdd from "./assets/images/add.svg";
import bin from "./assets/images/men-bin.svg";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  border: 2px solid #fff;
`;

const BoxTitle = styled.div`
  width: 100%;
  height:15vh;
  display:flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #fff;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #f06624;
  font-family: 'Carter One', cursive;
`;

const WrapToDo = styled.div`
  width:100%;
  height:85vh;
  display:flex;
`;

const WrapBacklog = styled.div`
  width:100%;
  height:100%;
`;

const BoxSubTitle = styled.div`
width:100%;
height:8vh;
display:flex;
justify-content: flex-start;
padding-left:1rem;
align-items: center;
`;

const SubTitle = styled.h2`
color: #f06624;
font-size:2rem;
`;

const BoxInputButton = styled.div`
width:100%;
height:6vh;
border-top: 2px solid #fff;
border-bottom: 2px solid #fff;
display:flex;
align-items: center;
background-color: transparent;
`;

const Input = styled.input`
width:95%;
height:90%;
background-color:transparent;
color:#fff;
border:none;
font-size:2rem;
font-family:Fleur De Leah;
outline:#558;
padding-left:1rem;
`;

const Button = styled.button`
width:5%;
height:100%;
background-color:transparent;
border:none;
`;

const Image = styled.img`
width:30px;
height:30px;
border:none;
`;

const WrapList = styled.div`
width:100%;
height:auto;
background-color:transparent;
display:flex;
flex-direction: column;
`;

const BoxList = styled.div`
width:100%;
height:2.25rem;
border-bottom: 2px solid #fff;
background-color:transparent;
display:flex;
justify-content: space-around;
align-items: center;
`;

const Item = styled.p`
width:95%;
height:100%;
margin: 0;
gap:12rem;
color:#fff;
font-family:Fleur De Leah;
font-size:1.5rem;
padding-left:1rem;
`;

//const ButtonBin = styled.button`
//width:5%;
//height:100%;
//background-color:transparent;
//border:none;
//display:flex;
//justify-content: center;
//align-items: center;
//`;

// const ImageBin = styled.img`
// height:25px;
// border:none;
// `;

const App = () => {


  return (
    <Container>
        <BoxTitle>
          <Title>To Do</Title>
        </BoxTitle>
        <WrapToDo>
          <WrapBacklog>
            <BoxSubTitle>
              <SubTitle>Backlog</SubTitle>
            </BoxSubTitle>
              <BoxInputButton>
                <Input  />
                <Button>
                  <Image src={buttonAdd} alt="adicionar" />
                </Button>
              </BoxInputButton>
              <WrapList>
                <BoxList>
                  <Item>
                  </Item>
                  {/*<ButtonBin>
                      <ImageBin src={bin} alt="adicionar" />
                  </ButtonBin>*/}
                </BoxList>
            </WrapList>
            </WrapBacklog>
        </WrapToDo>
      </Container>
  );
};  

export default App;
