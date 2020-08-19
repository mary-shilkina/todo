import React,{ useState } from 'react';
import './index.scss';
import List from './components/List/index.jsx';
import listsvg from './assets/img/list.svg';
import AddButtonList from './components/AddList';
import DB from './assets/db.json';

function App() {
  return (
  <div className="todo">
      <div className="todo__sidebar">
      <List items={[
        {
          icon: <img src={listsvg} alt=""List icon/>,
          name:'Все задачи',
          active:false
        }
      ]}/>
       <List items={[
        {
          color:'green',
          name:'Покупки',
          active: true
        },
        {
          color:'blue',
          name:'Фронтенд'
        },
        
      ]}
      isRemovable={true}
      />
      <AddButtonList colors={DB.colors}/>
      </div> 
      <div className="todo__tasks"></div>
  </div>
  );
}

export default App;
