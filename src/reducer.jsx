import {
  NEW_MESSAGE
} from './actions';

// create message from action
const buildMessage = (action) => ({
  id:   action.id,
  text: action.text,
  from: action.from,
  to:   action.to,
});

const reducer = (state = [], action) => {
  if (action.type === NEW_MESSAGE) {
    return [...state, buildMessage(action)];
  }

  return state;
};

export default reducer;
