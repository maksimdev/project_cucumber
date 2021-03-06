import { ADD_ARTICLE } from '../actions/articleActions';

const initialState = {
  articles: [{id: 1, title: 'one'}]
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
        return {
          ...state,
          articles: [ ...state.articles, action.payload ]
        };
    }
    default:
      return state;
  }
};
export default articleReducer;