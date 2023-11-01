import { useDispatch } from 'react-redux';
import { useState } from 'react';

import type { AppDispatch } from './store';
import { authThunks } from './store/user';
import './App.css';
import Home from './pages/home';

const App = () => {
  const [theme, setTheme] = useState<string>('light');
  const toggleTheme = () => (theme === 'light' ? 'dark' : 'light');

  const dispatch = useDispatch<AppDispatch>();
  dispatch(authThunks.currentUser());

  return (
    <div className={`app ${theme === 'light' ? 'lightTheme' : ''}`}>
      <button
        type="button"
        onClick={() => {
          setTheme(toggleTheme);
        }}
      >
        toggle theme
      </button>
      <Home />
    </div>
  );
};

export default App;
