import axios from 'axios';

import {chatSlice} from "../ChatSlices";
import { AppThunk, RootState } from '../Store';

export const { setChatMessages, setChatData, setSelectedChatId, setUserId, setUserTitle, setCountUnread } = chatSlice.actions;

export const fetchChatMessages = (id: string): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.lenzaos.com/message.get?chat_id=${id}&offset=0&limit=100`, {
      headers: {
        accept: 'application/json',
        version: '0.0',
      },
    });

    dispatch(setChatMessages(response.data.response.reverse()));
  } catch (error) {
    throw new Error('Error fetching chat messages:');
  }
};

export const getUserId = (userId: string | null) => ({
  type: 'chat/setUserId',
  payload: userId,
});

export const getUserTitle = (userTitle: string | null) => ({
  type: 'chat/setUserTitle',
  payload: userTitle,
});

export const getUnreadMessages = (countUnread: number | null) => ({
  type: 'chat/setCountUnread',
  payload: countUnread,
})

export const fetchChatData = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get('https://api.lenzaos.com/chat.get?offset=0&limit=20', {
      headers: {
        accept: 'application/json',
        version: '0.0',
      },
    });

    dispatch(setChatData(response.data.response.reverse()));
  } catch (error) {
    throw new Error('Error fetching chat data:');

  }
};

export const selectChatMessages = (state: RootState) => state.chat.chatMessages;
export const selectChatData = (state: RootState) => state.chat.chatData;
export const userId = (state: RootState) => state.chat.userId;
export const userTitle = (state: RootState) => state.chat.userTitle;
export const selectCountUnread = (state: RootState) => state.chat.countUnread;

