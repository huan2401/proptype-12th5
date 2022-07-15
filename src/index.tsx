import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/vi';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Providers
import StoreProvider from '@/providers/StoreProvider';
import I18Provider from '@/providers/I18Provider';
import AntdThemeProvider from '@/providers/AntdThemeProvider';

import { getCurrentLanguage } from '@/utils/i18n';

const lang = getCurrentLanguage();
if (lang === 'vi') {
  moment.locale('vi');
} else {
  moment.locale('en-gb');
}

ReactDOM.render(
  <AntdThemeProvider>
    <StoreProvider>
      <I18Provider>
        <App />
      </I18Provider>
    </StoreProvider>
  </AntdThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
