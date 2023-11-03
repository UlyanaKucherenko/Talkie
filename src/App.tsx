import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import type { AppDispatch } from './store';
import { authThunks } from './store/user';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';

const App = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => (theme === 'light' ? 'dark' : 'light');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authThunks.currentUser());
  }, [dispatch]);

  return (
    <div className={`app ${theme === 'light' ? 'lightTheme' : ''}`}>
      <Layout>
        <button
          type="button"
          onClick={() => {
            setTheme(toggleTheme);
          }}
        >
          toggle theme
        </button>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
