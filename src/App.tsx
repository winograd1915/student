import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PersonalInfo } from './PersonalInfo';
import { Schedule } from './Schedule';
import { Actions } from './Actions';
import { AdsBoard } from './AdsBoard';

function App() {
  return (
    <div className="App">
      <h1 className="title-app">Личный кабинет студента</h1>
      <PersonalInfo />

      <div className='double-column'>
        <Schedule />
        <Actions />
      </div>

      <AdsBoard />
    </div>
  );
}

export default App;
