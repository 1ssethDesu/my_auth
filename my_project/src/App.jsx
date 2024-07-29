
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Register from "./Pages/Auth/Register"
import Login from "./Pages/Auth/Login"
import { useContext } from 'react';
import { AppContext } from './Context/appContext';

export default function App() {
  const {user} = useContext(AppContext);

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>} />

       <Route path='/register' element={user ? <Home/>:<Register/>}></Route>
       <Route path='/login' element={user ? <Home/>:<Login/>}></Route>


      </Route>
    </Routes>
  </BrowserRouter> ;
}


