import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from 'react-router-dom';
import io, { Socket } from 'socket.io-client';

import App from './App';
import store from './store';
import './index.css';
import Home from './pages/home';
import './libs/i18n';
import { userSelector } from './store/user';
import { IMessage } from './store/chat';

const socket: Socket = io('http://localhost:3001');

const Room = () => {
  const params = useParams();
  const { userData } = useSelector(userSelector);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const roomId = params.id;

  useEffect(() => {
    // Subscribe to the new message event
    socket.on('message', (message: IMessage) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Subscribe to the event of receiving the list of messages
    socket.on('messageList', (messageList: IMessage[]) => {
      setMessages(messageList);
    });

    // Send a request to enter the room
    socket.emit('joinRoom', roomId);

    // Unsubscribe from events when unmounting the component
    return () => {
      socket.off('message');
      socket.off('messageList');
    };
  }, [roomId]);

  const sendMessage = () => {
    socket.emit('sendMessage', {
      id: Date.now(),
      msg: inputMessage,
      roomId,
      nick: userData?.user.name,
      date: Date.now(),
    });
    setInputMessage('');
  };

  return (
    <div>
      <h3>Room-ID: {params.id}</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="massage.."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="button" onClick={sendMessage}>
          send
        </button>
      </div>
      <hr />

      <div>
        {messages.map((item) => (
          <p key={item.id}>
            <span>
              <b>{item.nick}</b>: {item.msg}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

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
        path: '/public-chat/:id',
        element: <Room />,
      },

      {
        path: '*',
        element: <div style={{ textAlign: 'center' }}>Error 404</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
