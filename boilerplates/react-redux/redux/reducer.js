
import {
  INCREMENT
} from './actions';


const initialState = {
  count: 0
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case INCREMENT:
      const newState = {
        ...state,
        count: state.count + 1
      }
      return newState

    default:
      return state;
  }
}

export default reducer;
