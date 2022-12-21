import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Home,
  MyPage,
  Payment,
  PaymentComplete,
  StudyDetail,
  UpdateMyPage,
  NewStudy,
} from './pages';
import Login from './components/Modal/Login';
import Register from './components/Modal/Register';
import Layout from './components/Layout';

function App() {
  const loginIsOpen = useSelector((state) => state.modal.loginIsOpen);
  const registerIsOpen = useSelector((state) => state.modal.registerIsOpen);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='study' element={<StudyDetail />} />
          <Route path='new' element={<NewStudy />} />
          <Route path='mypage' element={<MyPage />} />
          <Route path='payment' element={<Payment />} />
          <Route path='payment/complete' element={<PaymentComplete />} />
          <Route path='update-mypage' element={<UpdateMyPage />} />
        </Route>
      </Routes>
      {loginIsOpen ? <Login /> : null}
      {registerIsOpen ? <Register /> : null}
    </div>
  );
}
export default App;
