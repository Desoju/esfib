import { createRoot } from 'react-dom/client';
import { MainPage } from './pages/MainPage';
import "./global.scss";

createRoot(
  document.querySelector('#app'),
).render(<MainPage />);
