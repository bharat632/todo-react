import './App.scss';
import { useState } from 'react';

import Header from './components/header/header';
import Todo from './components/todo/todo';
import Modal from './components/modal/modal';
import Backdrop from './components/backdrop/backdrop';

function App() {
  const [ currentState, setState ] = useState(false);
  function closeModal(){
    setState(false);
  }

  function confirmModalHandler(){
    console.log('deletion is confirmed.')
    setState(true)
  }

  return (
    <div className="App">
      <div className="container-fluid" style={containerFluid}>
        <Header />
        <Todo title={'Learn React'} description={'React used to create SPA.'} onDelete={ confirmModalHandler } />
        <Todo title={'Learn Angular'} description={'Angular used to create SPA.'} onDelete={ confirmModalHandler } />
        <Todo title={'Learn NodeJS'} description={'Node JS used to create server with express js.'} onDelete={ confirmModalHandler } />
        { currentState && <Modal onCancel={ closeModal } /> }
        { currentState && <Backdrop onCancel={ closeModal }/> }
        
      </div>
    </div>
  );
}


const containerFluid={
    padding: "0",
    margin: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden"
}

export default App;
