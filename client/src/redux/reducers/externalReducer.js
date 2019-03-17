import { EXTERNAL_CONNECTED } from '../actions/externalActions';

const initialState = {
};

function externalReducer(state = initialState, action) {
  switch (action.type) {
    case EXTERNAL_CONNECTED: {
      console.log('CONNECTED!');
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
export default externalReducer;