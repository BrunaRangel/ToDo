import React, { useState } from 'react';
import styled from "styled-components";
import './index.css'
import Task from './components/Task';
import Doing from './components/Doing';
import Done from './components/Done';
import Animation from './components/Animation';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  border: 2px solid #fff;
`;

const BoxTitle = styled.div`
  width: 100%;
  height:20vh;
  display:flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #fff;
  gap:3rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  font-family: 'Carter One', cursive;
  &:hover {
    font-size:5rem;
  }
`;

const WrapToDo = styled.div`
  width:100%;
  height:80vh;
  display:flex;
`;

const App = () => {

  return (
    <Container>
    <BoxTitle>
      <Title>To Do</Title>
      <Animation />
    </BoxTitle>
    <WrapToDo>
        <Task />
        <Doing />
        <Done />
    </WrapToDo>
  </Container>
  );
};  

export default App;
