import * as React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom'
import Login from 'src/components/access/login';
import Dashboard from 'src/components/dashboard/dashboard';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Log in</Link></li>
            <li><Link to="/habits">Habits</Link></li>
          </ul>

          <hr/>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/habits" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
