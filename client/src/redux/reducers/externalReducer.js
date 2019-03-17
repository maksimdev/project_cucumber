import {
  EXTERNAL_CONNECTED,
  EXTERNAL_CLOSED,
  EXTERNAL_TERMINATED,
  EXTERNAL_ERROR
} from '../actions/externalActions';

const initialState = { status: 'online' };

function externalReducer(state = initialState, action) {
  switch (action.type) {
    case EXTERNAL_CONNECTED: {
      return {
        status: 'online'
      };
    }
    case EXTERNAL_CLOSED: {
      return {
        status: 'offline'
      };
    }
    case EXTERNAL_TERMINATED: {
      return {
        status: 'offline'
      };
    }
    case EXTERNAL_ERROR: {
      return {
        status: 'error'
      };
    }
    default:
      return state;
  }
};
export default externalReducer;