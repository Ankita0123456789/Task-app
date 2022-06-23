import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import Index from './modules/user/Index';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Tasks from './modules/tasks/Tasks';
import AuthContext from './modules/UserContext';


function App() {
  // const [auth, toggle] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!auth ) {
  //     navigate("/");
  //   }
  // }, [auth])
  return (
    <>
    {/* <AuthContext.Provider value={{auth, toggle}}> */}
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Index />} />
     <Route path='/tasks' element={<Tasks/>}/>
     </Routes>
     </BrowserRouter>
     {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
