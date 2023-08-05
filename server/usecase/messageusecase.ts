import type { MessageModel } from '$/commonTypesWithClient/models';
import { messageRepository } from '$/repository/messageRepositry';
import assert from 'assert';
import { randomUUID } from 'crypto';
export const messageUsecase = {
  create: async (roomId: string, sender_id: string, content: string) => {
    const newMessage: MessageModel = {
      id2: randomUUID(),
      room: roomId,
      sender_Id: sender_id,
      contentmess: content,
      sent_at: Date.now(),
    };
    await messageRepository.save(newMessage);
    return newMessage;
  },
  room: async (roomId: string): Promise<MessageModel[]> => {
    const roomList = await messageRepository.findMessage(roomId);
    assert(roomList && roomList.length > 0, 'コメントが見つかりません');
    console.log(roomList);
    await Promise.all(roomList.map(messageRepository.save)); // すべてのコメントを保存
    return roomList;
  },
};
