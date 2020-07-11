import { createReducer, on, Action } from '@ngrx/store';
import { ChatState } from '../chat.state';
import { PERSON } from '@shared/constants';
import {
  addMessageSuccess,
  readMessagesSuccess,
  setPerson,
} from '../actions/chat.actions';

const initialState: ChatState = {
  currentPerson: PERSON.FIRST_PERSON,
  messages: [],
};

const _chatReducer = createReducer(
  initialState,
  on(addMessageSuccess, (state, { type, ...payload }) => ({
    ...state,
    messages: [...state.messages, { ...payload, person: state.currentPerson }],
  })),

  on(readMessagesSuccess, (state, payload) => {
    return {
      ...state,
      messages: state.messages.map((message) =>
        !message.read && message?.person?.id !== payload.personId
          ? { ...message, read: true }
          : message,
      ),
    };
  }),

  on(setPerson, (state, payload) => {
    return {
      ...state,
      currentPerson: payload.person,
    };
  }),
);

export function chatReducer(state: ChatState | undefined, action: Action) {
  return _chatReducer(state, action);
}
