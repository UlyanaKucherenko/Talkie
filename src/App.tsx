import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';
import { auth } from './store/user';
import './App.css';
import Home from './pages/home';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(auth.currentUser());

  return <Home />;
}

export default App;
