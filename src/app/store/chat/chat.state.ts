import { Person, Message } from '@shared/models';

export interface ChatState {
  currentPerson?: Person;
  messages: Message[];
}
