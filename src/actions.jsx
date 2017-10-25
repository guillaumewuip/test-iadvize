import uuid from 'uuid/v4';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const newMessage = (text, from, to) => ({
  type: NEW_MESSAGE,
  id:   uuid(),
  text,
  from,
  to,
});

