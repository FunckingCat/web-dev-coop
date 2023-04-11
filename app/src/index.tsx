import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'app';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Element with id root not found');
}

const reactRoot = createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
