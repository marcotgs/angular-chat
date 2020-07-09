import { createSelector } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Person } from '@shared/models/person';

export const selectChat = (state: AppState) => state.chat;

export const selectChatCurrentPerson = createSelector(
  selectChat,
  (state) => state.currentPerson as Person,
);

export const selectChatMessages = createSelector(
  selectChat,
  (state) => state.messages,
);
