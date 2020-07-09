import { selectChatCurrentPerson, selectChatMessages } from './chat.selectors';
import { PERSON } from '@shared/constants';
import { Message } from '@shared/models';

describe('ChatSelectors', () => {
  it('should return current person', () => {
    expect(
      selectChatCurrentPerson({
        chat: { currentPerson: PERSON.FIRST_PERSON, messages: [] },
      }),
    ).toBe(PERSON.FIRST_PERSON);
  });

  it('should return messages', () => {
    const message: Message = {
      date: new Date('2020-07-09'),
      message: 'test',
      person: {
        name: 'Person 1',
        id: 1,
      },
    };
    expect(
      selectChatMessages({
        chat: { currentPerson: PERSON.FIRST_PERSON, messages: [message] },
      }),
    ).toEqual([message]);
  });
});
