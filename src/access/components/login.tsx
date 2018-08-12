import firebaseui from 'firebaseui';
import * as React from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import firebase from 'src/app_init/firebase';
import pathBuilder from 'src/utilities/path_builder';

interface IPropsFromState {
  isLoggedIn: boolean;
}

interface IPropsFromDispatch {
  clearUser(): AnyAction;
  setUser(firebaseUser: firebase.User): AnyAction;
}

type Props = IPropsFromDispatch & IPropsFromState

class Login extends React.Component<Props> {
  private uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: (authResult: firebase.auth.UserCredential) => {
        const { user } = authResult;

        if (user === null) {
          throw new Error('Unable to sign in with user "null"');
        }

        this.handleSignInSuccess(user);
      },
    },
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  }

  public handleSignInSuccess = (firebaseUser: firebase.User) => {
    this.props.setUser(firebaseUser);
  }

  public render() {
    return (
      <div>
        {this.renderLogin()}
      </div>
    )
  }

  public renderLogin = () => {
    if (this.props.isLoggedIn) {
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
