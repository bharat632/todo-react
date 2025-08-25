import './App.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import dummyData from '../src/data';

import Header from './components/header/header';
import Todo from './components/todo/todo';
import Modal from './components/modal/modal';
import Backdrop from './components/backdrop/backdrop';
import Completed from './pages/completed/completed';
import YetToStart from './pages/yettostart/yettostart';
import InProgress from './pages/inprogress/inprogress';

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
    <div className="container-fluid" style={containerFluid}>
        <Header />
        {/* <Todo title={'Learn React'} description={'React used to create SPA.'} status={'inprogress'} onDelete={ confirmModalHandler } />
        <Todo title={'Learn Angular'} description={'Angular used to create SPA.'} status={'completed'} onDelete={ confirmModalHandler } />
        <Todo title={'Learn NodeJS'} description={'Node JS used to create server with express js.'} status={'yettostart'} onDelete={ confirmModalHandler } />
        { currentState && <Modal onCancel={ closeModal } /> }
        { currentState && <Backdrop onCancel={ closeModal }/> } */}

        {
          dummyData.map((task)=>{
            if(task.status == 'inprogress'){
              return <Todo todo={task} />
            }
          })
        }
        

      <Routes>
        <Route path="/" element={<InProgress />} />
        <Route path="/inprogress" element={<InProgress />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/yet-to-start" element={<YetToStart />} />
      </Routes>

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
