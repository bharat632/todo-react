import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header';
import Completed from './pages/completed/completed';
import YetToStart from './pages/yettostart/yettostart';
import InProgress from './pages/inprogress/inprogress';
import Important from './pages/Important/important';
import Auth from './pages/auth/auth';

function App() {

  return (
    <div className="container-fluid" style={containerFluid}>

      

      
      <Header />

      <div className='App'>
        <Routes>
          <Route path="/" element={ <Auth /> }  />
          {/* <Route path="/" element={<Important />} /> */}
          <Route path="/inprogress" element={<InProgress />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/yet-to-start" element={<YetToStart />} />
        </Routes>
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
