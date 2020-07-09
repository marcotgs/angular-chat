import { createReducer, on, State, Action } from '@ngrx/store';
import { ChatState } from '../chat.state';
import {
  addMessageSuccess,
  readMessagesSuccess,
} from '../actions/chat.actions';

const initialState: ChatState = {
  messages: [],
};

const _chatReducer = createReducer(
  initialState,
  on(addMessageSuccess, (state, { type, ...payload }) => ({
    ...state,
    messages: [...state.messages, payload],
  })),

  on(readMessagesSuccess, (state, payload) => {
    return {
      ...state,
      messages: state.messages.map((message) =>
        !message.read && message.person.id === payload.personId
          ? { ...message, read: true }
          : message,
      ),
    };
  }),
);

export function chatReducer(state: ChatState | undefined, action: Action) {
  return _chatReducer(state, action);
}
