import React, { useState } from 'react';
import styled from "styled-components";
import './index.css'

import buttonAdd from "./assets/images/add.svg";
import bin from "./assets/images/men-bin.svg";

const App = () => {

  return (
    <section>
    <div>
      <h1>To Do</h1>
    </div>
    <section>
      <div>
        <div>
          <h2>Backlog</h2>
        </div>
          <div>
            <input 
               />
            <button>
              <img src={buttonAdd} alt="adicionar" />
            </button>
          </div>
          <div>
            <div>
              <p></p>
              <button>
                  <img src={bin} alt="adicionar" />
                </button>
            </div>
        </div>
        </div>
    </section>
  </section>
  );
};  

export default App;
