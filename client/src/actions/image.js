import * as socketService from '../services/socket';
import * as detailsActions from './details';

export const IMAGE_RESET = 'IMAGE_RESET';
export const IMAGE_LISTENING = 'IMAGE_LISTENING';
export const IMAGE_SEND = 'IMAGE_SEND';
export const IMAGE_RECEIVED = 'IMAGE_RECEIVED';
export const IMAGE_FAILED = 'IMAGE_FAILED';

export function reset () {
  return {
    type: IMAGE_RESET,
  };
}

export function listen () {
  return (dispatch) => {
    dispatch({
      type: IMAGE_LISTENING,
    });

    socketService.bind(IMAGE_SEND, (image) => {
      dispatch({
        type: detailsActions.DETAILS_INCOMING,
      });

      dispatch({
        type: IMAGE_RECEIVED,
        data: image,
      });
    });
  };
}
