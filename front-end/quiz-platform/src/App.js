import React from 'react';
import classes from './App.module.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/pages/authentifcations/Signup';
import Login from './components/pages/authentifcations/Login';
import { useAuthContext } from './hooks/useAuthContext';
import Trainer from './components/pages/trainer/Trainer';
import Home from './components/Home/Home';
import { TestContextProvider } from './context/TestContext';

function App() {
  const { user } = useAuthContext()
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          { /* a modifier */}

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {/* a modifier */}
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          {/* a modifier */}
          <Route
            path="/trainer"
            element={<TestContextProvider> <Trainer /></TestContextProvider>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
{
  //element={user ?  <TestContextProvider> <Trainer /></TestContextProvider> : <Navigate to="/login" />}
}