import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Chat, ChatMessage} from './ChatTypes';

interface ChatState {
  chatMessages: ChatMessage[];
  chatData: Chat[];
  selectedChatId: string | null;
  userId: string | null;
  userTitle: string | null;
  countUnread: number | null;
}

const initialState: ChatState = {
  chatMessages: [],
  chatData: [],
  selectedChatId: null,
  userId: "",
  userTitle: "",
  countUnread: 0,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.chatMessages = action.payload;
    },
    setChatData: (state, action: PayloadAction<Chat[]>) => {
      state.chatData = action.payload;
    },
    setSelectedChatId: (state, action: PayloadAction<string | null>) => {
      state.selectedChatId = action.payload;
    },
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload;
    },
    setUserTitle: (state, action: PayloadAction<string | null>) => {
      state.userTitle = action.payload;
    },
    setCountUnread: (state, action: PayloadAction<number | null>) => {
      state.countUnread = action.payload;
    }
  },
});

export default chatSlice.reducer;
