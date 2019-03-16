import { ADD_ARTICLE } from '../actions/index';

const initialState = {
  articles: [{id: 1, title: 'one'}]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
        console.log(ADD_ARTICLE, action.payload);
        return {
          ...state
        };
    }
    case 'EXTERNAL_CONNECTED': {
      console.log('CONNECTED!');
      return {
        ...state
      };
    }
    case 'EXTERNAL_ARTICLE_RECEIVED': {
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    }
    default:
      return state;
  }
};
export default rootReducer;