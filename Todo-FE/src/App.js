import logo from './logo.svg';
import './App.scss';

import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={containerFluid}>
        <Header></Header>
      </div>
    </div>
  );
}


const containerFluid={
    padding: "0",
    margin: "0",
    width: "100%",
    height: "100%",
}

export default App;
