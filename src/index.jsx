import { createRoot } from 'react-dom/client';
import { MainPage } from './pages/MainPage';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<MainPage />);
