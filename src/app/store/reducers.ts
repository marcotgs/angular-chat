import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { chatReducer } from './chat/reducer/chat.reducer';

export const reducers: ActionReducerMap<AppState> = {
  chat: chatReducer,
};
