import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Login from 'src/access/components/login';
import userActions from 'src/store/actions/user';
import { IGlobalState } from 'src/store/root_slice';

function mapStateToProps(state: IGlobalState) {
  return {
    user: state.user.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const boundUserActions = bindActionCreators(userActions, dispatch);

  return {
    clearUser: boundUserActions.clearUser,
    setUser: boundUserActions.setUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
