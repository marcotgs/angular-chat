import { createAction, props } from '@ngrx/store';
import { Message } from '@shared/models';
import { ChatActionsTypes } from '../chat.types';
import { Person } from '@shared/models/person';

export const addMessage = createAction(
  ChatActionsTypes.AddMessage,
  props<Message>(),
);

export const addMessageSuccess = createAction(
  ChatActionsTypes.AddMessageSuccess,
  props<Message>(),
);

export const readMessages = createAction(
  ChatActionsTypes.ReadMessages,
  props<{ personId: number }>(),
);

export const readMessagesSuccess = createAction(
  ChatActionsTypes.ReadMessagesSuccess,
  props<{ personId: number }>(),
);

export const setPerson = createAction(
  ChatActionsTypes.SetPerson,
  props<{ person: Person }>(),
);
