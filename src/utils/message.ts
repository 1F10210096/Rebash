import { useAtom } from 'jotai';
import { useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from './apiClient';

export function useInputComment() {
  const [user] = useAtom(userAtom);

  async function inputComment(roomId: string, value: string) {
    if (!user) return;

    const sender_id = user.id;
    const content = value;
    const name = user.displayName;
    if (name === undefined) {
      console.log('usernameなし');
    } else {
      const message = await apiClient.message.post({ body: { roomId, sender_id, content, name } });
      return message;
    }
  }

  return inputComment;
}

export function useLookRoom() {
  const [user] = useAtom(userAtom);

  async function lookRoom(roomId3: string) {
    if (!user) return;
    console.log(roomId3);
    const roomId = await apiClient.room.$post({ body: { roomId3 } });
    console.log(roomId);
    return roomId;
  }

  return lookRoom;
}

export function useLookMessage() {
  const [user] = useAtom(userAtom);

  async function lookMessage(roomId: string) {
    if (!user) return;

    const messages = await apiClient.message_get.$post({ body: { roomId } });
    return messages;
  }

  return lookMessage;
}

// const handleInfo = async (messageId: string) => {
//   try {
//     const infomessage = await apiClient.infomessage.$post({ body: { messageId } });
//     setInfoName(infomessage.sender_Id);
//     // console.log(infoname)
//     await LookMessage();
//   } catch (error) {
//     await LookMessage();
//   }
// };
// const handleDelete = async (messageId: string) => {
//   try {
//     await apiClient.deleteMessage.$post({ body: { messageId } });
//     await LookMessage();
//   } catch (error) {
//     await LookMessage();
//   }
// };
export function useDelete() {
  const [user] = useAtom(userAtom);

  async function delete_messe(messageId: string) {
    if (!user) return;

    await apiClient.deleteMessage.$post({ body: { messageId } });
  }

  return delete_messe;
}

// const handleEdit = (messageId: string, contentmess: string) => {
//   setEditingMessageId(messageId);
//   setEditedMessage(contentmess);
//   setContextMenuVisible(false);
//   setEditMenuVisible(true);
//   setComent(contentmess);
// };
// const handleSaveEdit = async () => {
//   setEditMenuVisible(false);
//   if (editingMessageId === null) {
//     console.log('id2なし');
//   }
//   {
//     await apiClient.edit.$post({ body: { editingMessageId, editedMessage } });
//     await LookMessage();
//     setEditingMessageId(null);
//     setEditedMessage('');
//   }
// };
export const useRightClickHandler = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editedMessage, setEditedMessage] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleRightClick =
    (messageId: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setContextMenuVisible(true);
      setSelectedMessageId(messageId);
      setContextMenuPosition({ x: e.clientX, y: e.clientY });
      setEditingMessageId(messageId);
    };

  return {
    contextMenuVisible,
    selectedMessageId,
    contextMenuPosition,
    editingMessageId,
    editedMessage,
    comment,
    handleRightClick,
  };
};
