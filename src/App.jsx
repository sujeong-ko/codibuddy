import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Payment from './pages/Payment/Payment';
import PaymentComplete from './pages/Payment/PaymentComplete';
import NewStudy from './pages/NewStudy/NewStudy.jsx';
import Login from './components/Modal/Login';
import Register from './components/Modal/Register';
import StudyDetail from './pages/StudyDetail/StudyDetail.jsx';
import UpdateMyPage from './pages/UpdateMyPage/UpdateMyPage';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
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
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='update-mypage' element={<UpdateMyPage />} />
        </Route>
      </Routes>
      {isOpen ? <Login /> : null}
    </div>
  );
}
export default App;
