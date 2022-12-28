import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Modal/Login';
import Register from './components/Modal/Register';
import Layout from './components/Layout';
import getCurrentUserInfo from './utils/getCurrentUserInfo';
import { tempSetUser } from './redux/userSlice';
import { ROUTE_ARR } from './utils/route';

const token = localStorage.getItem('userToken');
const config = {
  Authorization: `Bearer ${token}`,
};

function App() {
  const dispatch = useDispatch();

  // App 실행과 동시에 token 확인 및 store에 유저 정보 전달
  if (token) {
    getCurrentUserInfo(config).then((response) => {
      const userInfo = response.data[0];
      dispatch(
        tempSetUser({
          user_id: userInfo.user_id,
          nickname: userInfo.nickname,
          email: userInfo.email,
          point: userInfo.point,
        }),
      );
    });
  }

  const loginIsOpen = useSelector((state) => state.modal.loginIsOpen);
  const registerIsOpen = useSelector((state) => state.modal.registerIsOpen);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {ROUTE_ARR.map((route, index) => {
            return (
              <Route path={route.path} element={route.element} key={index} />
            );
          })}
        </Route>
      </Routes>
      {loginIsOpen && <Login />}
      {registerIsOpen && <Register />}
    </div>
  );
}

export default App;
