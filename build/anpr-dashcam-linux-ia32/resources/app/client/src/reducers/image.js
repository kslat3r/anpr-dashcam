import * as ImageActions from '../actions/image';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  item: null,
  listening: false,
  received: null,
  error: null,
});

export default function(state = initialState, action) {
  switch (action.type) {
    case ImageActions.IMAGE_RESET:
      return state.merge(initialState);

    case ImageActions.IMAGE_LISTENING:
      return state.merge({
        listening: true,
      });

    case ImageActions.IMAGE_RECEIVED:
      return state.merge({
        item: action.data,
        received: true,
        error: null,
      });

    case ImageActions.IMAGE_FAILED:
      return state.merge({
        item: null,
        received: false,
        error: action.error,
      });

    default:
      return state;
  }
}
