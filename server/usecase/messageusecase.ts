import type { InfoMessageModel, MessageModel } from '$/commonTypesWithClient/models';
import { messageRepository } from '$/repository/messageRepositry';
import assert from 'assert';
import { randomUUID } from 'crypto';
export const messageUsecase = {
  create: async (roomId: string, sender_id: string, content: string, name: string) => {
    console.log(content);
    const newMessage: MessageModel = {
      id2: randomUUID(),
      room: roomId,
      sender_Id: sender_id,
      contentmess: content,
      sent_at: Date.now(),
      username: name,
    };
    await messageRepository.save(newMessage);
    console.log(newMessage);
    console.log('a');
    return newMessage;
  },
  createinfo: async (
    Id: string,
    roomId: string,
    sender_id: string,
    content: string,
    sent_at_time: number,
    name: string
  ) => {
    const newinfoMessage: InfoMessageModel = {
      id2: Id,
      room: roomId,
      sender_Id: sender_id,
      contentmess: content,
      sent_at: sent_at_time,
      username: name,
    };
    await messageRepository.infosave(newinfoMessage);
    return newinfoMessage;
  },
  room: async (roomId: string): Promise<MessageModel[]> => {
    const roomList = await messageRepository.findMessage(roomId);
    assert(roomList && roomList.length > 0, 'コメントが見つかりません');
    await Promise.all(roomList.map(messageRepository.save)); // すべてのコメントを保存
    return roomList;
  },
  edit: async (editingMessageId: string | null, editedMessage: string): Promise<MessageModel> => {
    const message = await messageRepository.editMessage(editingMessageId);
    assert(message, 'コメントが見つかりません');
    message.contentmess = editedMessage;
    await messageRepository.save(message);
    return message;
  },
  delete: async (messageId: string): Promise<MessageModel> => {
    const message = await messageRepository.delete(messageId);
    assert(message, 'コメントが見つかりません');
    return message;
  },
  infoMessage: async (messageId: string): Promise<InfoMessageModel> => {
    const message = await messageRepository.editMessage(messageId);
    // console.log(message)
    assert(message, 'コメントが見つかりません');
    const infoMessage = await messageUsecase.createinfo(
      message.id2,
      message.room,
      message.sender_Id,
      message.contentmess,
      message.sent_at,
      message.username
    );
    console.log(infoMessage);
    await messageRepository.infosave(infoMessage);
    console.log('daaw');
    return infoMessage;
  },
};
