import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from  './reducers';

export default (initialState) => {
  return createStore(
    reducer,
    applyMiddleware(thunk),
    initialState
  );
};
