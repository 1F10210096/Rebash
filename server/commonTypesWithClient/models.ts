import type { TaskId, UserId } from './branded';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export type TaskModel = {
  id: TaskId;
  label: string;
  done: boolean;
  created: number;
};

export type RoomModel = {
  roomid: string;
  comment: string[];
  created: number;
  user: string[];
};

export type User1Model = {
  id: string;
  comment: string;
  roomId: string[];
  birth: string;
  sex: number;
  status: number;
  sender_id: string[];
  receive_id: string[];
  friend: string[];
};

export type MessageModel = {
  id2: string;
  room: string;
  sender_Id: string;
  contentmess: string;
  sent_at: number;
  username: string;
};

export type InfoMessageModel = {
  id2: string;
  room: string;
  sender_Id: string;
  contentmess: string;
  sent_at: number;
  username: string;
};

export type DMModel = {
  roomId: string;
  comment: string[];
  created: number;
  myId: string;
  partnerId: string;
};

export type DMMsgModel = {
  id2: string;
  room: string;
  sender_Id: string;
  contentmess: string;
  sent_at: number;
  username: string;
};
