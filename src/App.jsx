import React from 'react';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Payment from './pages/Payment';
import NewStudy from './pages/NewStudy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/new' element={<NewStudy />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
