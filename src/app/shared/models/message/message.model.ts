import { Person } from '../person';

export interface Message {
  message: string;
  date: Date;
  person?: Person;
  read?: boolean;
}
