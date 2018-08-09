import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'src/app';
import 'src/app_init/firebase';
import 'src/index.css';
import registerServiceWorker from 'src/registerServiceWorker';
import 'src/store/store_provider';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
