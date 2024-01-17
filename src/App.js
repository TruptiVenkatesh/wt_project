import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import Socse from './socse'; 
import StructurePage from './StructurePage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !user ? (
              <LoginForm onLogin={handleLogin} />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />
        {/* <Route path="/" element={<LoginForm/>}/> */}
        <Route path="/Home" element={<Home userRole={user?.role} />}>
          {/* Nested routs for Home */}
          
        </Route>
        <Route path='/socse' element=<Socse/> />
        <Route path="/batch/:batch/:option" element={<StructurePage/>} />      
      </Routes>
    </Router>
  );
};

export default App;