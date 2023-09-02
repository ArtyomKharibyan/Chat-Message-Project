export interface ChatMessage {
  id: string;
  created_at: number;
  user: {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    you: boolean;
  };
  message: string;
  is_new: boolean;
}

export interface ILastMessage {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
}

export interface Chat {
  id: string;
  created_at: number;
  title: string;
  avatar: string;
  private: boolean;
  last_message: ILastMessage;
  users: Array<{
    id: string;
    name: string;
    surname: string;
    avatar: string;
  }>;
  count_unread: number;
}

export interface MessageDateProps {
  date: string;
}
