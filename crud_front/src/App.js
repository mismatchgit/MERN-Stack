import logo from './logo.svg';
import './App.css';


import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import AsifInc from './components/AsifInc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
        <Route path ='/' element={<AsifInc/>}/>
        <Route path ='/all' element={<AllUsers/>}/>
        <Route path ='/add' element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
