import * as DetailsActions from '../actions/details';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  item: {},
  listening: false,
  incoming: false,
  received: null,
  error: null,
});

export default function(state = initialState, action) {
  switch (action.type) {
    case DetailsActions.DETAILS_RESET:
      return state.merge(initialState);

    case DetailsActions.DETAILS_LISTENING:
      return state.merge({
        listening: true,
      });

    case DetailsActions.DETAILS_INCOMING:
      return state.merge({
        incoming: true,
      });

    case DetailsActions.DETAILS_RECEIVED:
      return state.merge({
        item: action.data,
        incoming: false,
        received: true,
        error: null,
      });

    case DetailsActions.DETAILS_FAILED:
      return state.merge({
        item: null,
        incoming: false,
        received: false,
        error: action.error,
      });

    default:
      return state;
  }
}
