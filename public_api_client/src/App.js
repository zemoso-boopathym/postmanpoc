import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import { AuthContext } from './firebase/auth';
import CoinList from './pages/CoinList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          element={currentUser ? <CoinList /> : <Login />}
        />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
