import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import type { AppDispatch } from './store';
import { authThunks } from './store/user';
import { themeSelector } from './store/theme';
import './App.css';
import Layout from './components/layout';
import { ThemeEnum } from './utils/const';

const App = () => {
  const { mode } = useSelector(themeSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authThunks.currentUser());
  }, [dispatch]);

  return (
    <div className={`app ${mode === ThemeEnum.LIGHT ? 'lightTheme' : ''}`}>
      <Layout />
    </div>
  );
};

export default App;
