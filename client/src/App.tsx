import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

export const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path='*' element={<Home />}></Route>
            <Route index element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/profile/:username' element={<Profile />}></Route>
          </>
        ) : (
          <>
            <Route path='*' element={<Login />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
