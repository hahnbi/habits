import firebaseui from 'firebaseui';
import * as React from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { Redirect } from 'react-router-dom';
import firebase from 'src/app_init/firebase';
import pathBuilder from 'src/utilities/path_builder';

class Login extends React.Component {
  public state = {
    loggedIn: false
  };

  private uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult: firebase.User) => {
        this.handleSignInSuccess(authResult);
      },
    },
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  }

  public handleSignInSuccess = (authResult: firebase.User) => {
    // tslint:disable-next-line
    console.log(authResult);
    this.setState({
      loggedIn: true
    });
  }

  public render() {
    return (
      <div>
        {this.renderLogin()}
      </div>
    )
  }

  public renderLogin = () => {
    if (this.state.loggedIn) {
      return (
        <Redirect to={pathBuilder.buildPath('dashboard')} />
      );
    }

    return (
      <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
    );
  }
}

export default Login;
