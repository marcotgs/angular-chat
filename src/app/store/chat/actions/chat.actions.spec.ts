import { TypedAction } from '@ngrx/store/src/models';
import { Message } from '@shared/models';
import { PERSON } from '@shared/constants';

import {
  addMessage,
  addMessageSuccess,
  readMessages,
  readMessagesSuccess,
} from './chat.actions';
import { ChatActionsTypes } from '../chat.types';

describe('ChatActions', () => {
  const message = {
    date: new Date('2020-07-09'),
    message: 'test',
    person: {
      name: 'Person 1',
      id: 1,
    },
  };

  const messagePayloadResult = <T extends string>(
    type: T,
  ): Message & TypedAction<T> => ({
    type,
    ...message,
  });

  it('should call `addMessage` action', () => {
    expect(addMessage(message)).toEqual(
      messagePayloadResult(ChatActionsTypes.AddMessage),
    );
  });

  it('should call `addMessageSuccess` action', () => {
    expect(addMessageSuccess(message)).toEqual(
      messagePayloadResult(ChatActionsTypes.AddMessageSuccess),
    );
  });

  it('should call `readMessages` action', () => {
    expect(readMessages({ personId: PERSON.FIRST_PERSON.id })).toEqual({
      type: ChatActionsTypes.ReadMessages,
      personId: PERSON.FIRST_PERSON.id,
    });
  });

  it('should call `readMessagesSuccess` action', () => {
    expect(readMessagesSuccess({ personId: PERSON.FIRST_PERSON.id })).toEqual({
      type: ChatActionsTypes.ReadMessagesSuccess,
      personId: PERSON.FIRST_PERSON.id,
    });
  });
});
