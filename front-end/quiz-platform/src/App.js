import classes from './App.module.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home';
import Signup from './components/pages/authentifcations/Signup';
import Login from './components/pages/authentifcations/Login';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
