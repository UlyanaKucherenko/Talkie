/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import store from './store';
import './index.css';
import './libs/i18n';
import Home from './pages/home';
import Room from './pages/Room';
import Page404 from './pages/Page404';
import http from './api/http';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'public-chat/:roomId',
        loader: async ({ params }) => {
          const room = await http.rooms.getRoomById(params.roomId!);
          return room;
        },
        element: <Room />,
      },
      {
        path: 'private-chat/:roomId',
        loader: async ({ params }) => {
          const room = await http.rooms.getRoomById(params.roomId!);
          return room;
        },
        element: <Room />,
      },

      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{ marginTop: '60px' }}
    />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
