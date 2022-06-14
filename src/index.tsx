import { createRoot } from 'react-dom/client';
import App from './App';
import { initContract } from './utils';

const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);

window.nearInitPromise = initContract()
  .then(() => {
    root.render(
      <App />,
    );
  })
  .catch(console.error);
