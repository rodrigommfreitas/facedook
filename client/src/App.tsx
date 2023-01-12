import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';

export const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />}></Route>
      <Route index element={<Home />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>

      <Route path='/profile/:username' element={<Profile />}></Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  );
};
