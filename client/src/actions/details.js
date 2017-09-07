import * as socketService from '../services/socket';

export const DETAILS_RESET = 'DETAILS_RESET';
export const DETAILS_LISTENING = 'DETAILS_LISTENING';
export const DETAILS_SEND = 'DETAILS_SEND';
export const DETAILS_INCOMING = 'DETAILS_INCOMING';
export const DETAILS_RECEIVED = 'DETAILS_RECEIVED';
export const DETAILS_FAILED = 'DETAILS_FAILED';

export function reset () {
  return {
    type: DETAILS_RESET,
  };
}

export function listen () {
  return (dispatch) => {
    dispatch({
      type: DETAILS_LISTENING,
    });

    socketService.bind(DETAILS_SEND, (details) => {
      dispatch({
        type: DETAILS_RECEIVED,
        data: details,
      })
    });
  };
}
