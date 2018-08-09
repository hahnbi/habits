import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'src/app_init/firebase';
import App from 'src/components/app';
import 'src/index.css';
import registerServiceWorker from 'src/registerServiceWorker';
import 'src/store/store_provider';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
