import * as React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom'
import Login from 'src/components/access/login';
import Dashboard from 'src/components/dashboard/dashboard';
import pathBuilder from 'src/utilities/path_builder';

class App extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default App;
