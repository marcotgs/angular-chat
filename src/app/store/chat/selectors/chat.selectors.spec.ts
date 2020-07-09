import { selectChatCurrentPerson } from './chat.selectors';
import { PERSON } from '@shared/constants';

describe('ChatSelectors', () => {
  it('should return current person', () => {
    expect(
      selectChatCurrentPerson({
        chat: { currentPerson: PERSON.FIRST_PERSON, messages: [] },
      }),
    ).toBe(PERSON.FIRST_PERSON);
  });
});
