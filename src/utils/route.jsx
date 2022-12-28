/* eslint-disable react/react-in-jsx-scope */
import {
  Home,
  MyPage,
  Payment,
  FirstPayment,
  PaymentComplete,
  StudyDetail,
  UpdateMyPage,
  NewStudy,
  NotFound,
} from '../pages';

export const ROUTE = {
  HOME: {
    path: '/',
    link: '/',
    element: <Home />,
  },
  STUDY_PAGE: {
    path: 'study/:id',
    link: '/study/:id',
    element: <StudyDetail />,
  },
  NEW_STUDY_PAGE: {
    path: 'new',
    link: '/new',
    element: <NewStudy />,
  },
  MY_PAGE: {
    path: 'mypage',
    link: '/mypage',
    element: <MyPage />,
  },
  USER_UPDATE_PAGE: {
    path: 'update-mypage',
    link: '/update-mypage',
    element: <UpdateMyPage />,
  },
  PAYMENT: {
    path: 'payment/:id',
    link: '/payment/:id',
    element: <Payment />,
  },
  FIRST_PAYMENT: {
    path: 'payment',
    link: '/payment',
    element: <FirstPayment />,
  },
  PAYMENT_COMPLETE: {
    path: 'payment/complete',
    link: '/payment/complete',
    element: <PaymentComplete />,
  },
  NOT_FOUND: {
    path: '*',
    link: '/*',
    element: <NotFound />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
