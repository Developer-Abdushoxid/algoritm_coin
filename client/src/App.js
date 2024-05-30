import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login, Register, Main } from './components';


const App = () => {
  const {loggedIn} = useSelector((state) => state.auth);

  return (
      <div className="flex items-center justify-center h-screen w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={loggedIn ? <Main/> : <Navigate to="/login" />}>
            <Route path="/*" element={<Main />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
};

export default App;
