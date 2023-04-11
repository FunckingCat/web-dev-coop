import { type FC } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { AppRouter } from 'pages';
import { store } from 'store';

import './design/index.scss';

export const App: FC = () => (
  <HashRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </HashRouter>
);
