import { combineReducers } from 'redux';

import ChatItemList from '../components/chat/ChatItemList';
import MessageDisplay from '../components/messages/MessageDisplay';

const rootReducer = combineReducers({
  chat: ChatItemList,
  Message: MessageDisplay,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
