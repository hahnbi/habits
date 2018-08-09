import { applyMiddleware, compose, createStore } from 'redux';
import freeze from 'redux-freeze';
import {
  getInitialState,
  reducer as rootReducer,
} from 'src/store/root_slice';
import environment from 'src/utilities/environment';

const middleware: any[] = [];
const composeEnhancers = (environment.isDev() || environment.isTest()) ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose :
  compose;

if (environment.isDev() || environment.isTest()) {
  middleware.push(freeze);
}

const store = createStore(
  rootReducer,
  getInitialState(),
  composeEnhancers(applyMiddleware(...middleware))
);

store.dispatch({
  type: 'FREEZE',
});

export default store;
