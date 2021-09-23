import React, { useState } from 'react';
import styled from "styled-components";
import '../index.css'

import buttonAdd from "../assets/images/add.svg";
import bin from "../assets/images/men-bin.svg";


const WrapDoing = styled.section`
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
color: #fff;
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
color:#3a4844;
border:none;
font-size:1.75rem;
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
width:25px;
height:25px;
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

const ButtonBin = styled.button`
width:5%;
height:100%;
background-color:transparent;
border:none;
display:flex;
justify-content: center;
align-items: center;
`;

const ImageBin = styled.img`
height:25px;
border:none;
`;

const Task = () => {

  const [doing, setDoing] = useState("");
  const [list, setList] = useState([]);
  
    const add = () => {
      const newDoing = {
       doing: doing,
        id: Date.now()
      };
      setList([...list, newDoing]); 
    };
  
    const garbage = (id) => {
      setList(list.filter((item) => item.id !== id));
    };
    

  return (
      <WrapDoing>
        <BoxSubTitle>
          <SubTitle>Doing</SubTitle>
        </BoxSubTitle>
          <BoxInputButton>
            <Input 
              type="text"
              value={doing}
              onChange={evento => setDoing(evento.target.value)} 
              placeholder="Add a task"/>
            <Button onClick={add}>
              <Image src={buttonAdd} alt="adicionar" />
            </Button>
          </BoxInputButton>
          <WrapList>
          {list.map((item) => (
            <BoxList>
              <Item>
                {item.doing}   
              </Item>
              <ButtonBin onClick={() => garbage(item.id)}>
                  <ImageBin src={bin} alt="adicionar" />
                </ButtonBin>
            </BoxList>
          ))}
        </WrapList>
        </WrapDoing>
  );
};  

export default Task;
