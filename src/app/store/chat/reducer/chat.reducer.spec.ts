import { Message } from '@shared/models';
import { addMessageSuccess, readMessagesSuccess, setPerson } from '../actions';
import { chatReducer } from './chat.reducer';
import { PERSON } from '@shared/constants';

describe('ChatReducer', () => {
  const messages: Message[] = [
    {
      date: new Date('2020-07-09'),
      message: 'test',
      person: PERSON.FIRST_PERSON,
    },
    {
      date: new Date('2020-07-09'),
      message: 'test',
      person: PERSON.SECOND_PERSON,
    },
  ];

  it('should add new message to state', () => {
    expect(
      chatReducer({ messages: [] }, addMessageSuccess(messages[0])),
    ).toEqual({
      messages: [messages[0]],
    });
  });

  it('should set messages as read', () => {
    chatReducer(
      { messages },
      readMessagesSuccess({ personId: PERSON.FIRST_PERSON.id }),
    );

    expect(
      chatReducer(
        { messages },
        readMessagesSuccess({ personId: PERSON.FIRST_PERSON.id }),
      ),
    ).toEqual({
      messages: [{ ...messages[0], read: true }, messages[1]],
    });
  });

  it('should set messages as read', () => {
    chatReducer(
      { messages },
      readMessagesSuccess({ personId: PERSON.FIRST_PERSON.id }),
    );

    expect(
      chatReducer({ messages }, setPerson({ person: PERSON.SECOND_PERSON })),
    ).toEqual({
      messages,
      currentPerson: PERSON.SECOND_PERSON,
    });
  });
});
