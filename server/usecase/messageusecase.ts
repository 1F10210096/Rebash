import type { MessageModel } from '$/commonTypesWithClient/models';
import { messageRepository } from '$/repository/messageRepositry';
import assert from 'assert';
import { randomUUID } from 'crypto';
export const messageUsecase = {
  create: async (roomId: string, sender_id: string, content: string, name: string) => {
    console.log(name);
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
  room: async (roomId: string): Promise<MessageModel[]> => {
    const roomList = await messageRepository.findMessage(roomId);
    assert(roomList && roomList.length > 0, 'コメントが見つかりません');
    console.log(roomList);
    await Promise.all(roomList.map(messageRepository.save)); // すべてのコメントを保存
    return roomList;
  },
  edit: async (editingMessageId: string | null, editedMessage: string): Promise<MessageModel> => {
    console.log(editedMessage);
    const message = await messageRepository.editMessage(editingMessageId);
    assert(message, 'コメントが見つかりません');
    message.contentmess = editedMessage;
    await messageRepository.save(message);
    console.log(message);
    return message;
  },
  delete: async (messageId: string): Promise<MessageModel> => {
    const message = await messageRepository.delete(messageId);
    assert(message, 'コメントが見つかりません');
    return message;
  },
};
