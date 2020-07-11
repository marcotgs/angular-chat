import { createSelector } from '@ngrx/store';
import { Person } from '@shared/models/person';
import { AppState } from './../../app.state';
import { ChatState } from '../chat.state';

export const selectChat = (state: AppState) => state.chat;

export const selectChatCurrentPerson = createSelector(
  selectChat,
  (state) => state.currentPerson as Person,
);

export const selectChatMessages = createSelector(
  selectChat,
  (state) => state.messages,
);

export const selectNumberUnreadMessages = createSelector(
  selectChat,
  (state: ChatState, personId: number) =>
    state.messages.filter(
      (message) => !message.read && message.person?.id === personId,
    ).length,
);
