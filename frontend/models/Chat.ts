export interface Chat {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface ChatMember {
  id: number;
  chat_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: number;
  content: string;
  file_id: number;
}
