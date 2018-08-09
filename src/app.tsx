import * as React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom'
import Login from 'src/access/components/login';
import Dashboard from 'src/dashboard/components/dashboard';
import store from 'src/store/store_provider';
import pathBuilder from 'src/utilities/path_builder';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to={pathBuilder.buildPath('homepage')}>Log in</Link></li>
              <li><Link to={pathBuilder.buildPath('dashboard')}>Habits</Link></li>
            </ul>

            <hr/>
            <Route exact={true} path={pathBuilder.buildPath('homepage')} component={Login} />
            <Route exact={true} path={pathBuilder.buildPath('dashboard')} component={Dashboard} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
