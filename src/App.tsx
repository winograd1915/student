import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Личный кабинет студента</h1>
      <table>
        <tr>
          <td>Пара</td>
          <td>Предмет</td>
          <td>Аудитория</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Дифференциальные уравнения</td>
          <td>414</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Уравнения математическрй физики</td>
          <td>317</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Компьтерная безопасность</td>
          <td>420</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Физкультура</td>
          <td>112</td>
        </tr>
      </table>
      
    </div>
  );
}

export default App;
