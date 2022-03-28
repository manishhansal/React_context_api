import './App.css';
import {Navbar} from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { LoginStatus } from './Components/LoginStatus';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/loginstatus' element={<LoginStatus/>} />
      </Routes>
    </div>
  );
}

export default App;
