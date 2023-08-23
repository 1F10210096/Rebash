import { useAtom } from 'jotai';
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
    console.log(roomId3)
    const roomId = await apiClient.room.$post({ body: { roomId3 } });
    console.log(roomId)
    return roomId
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
// const handleRightClick =
//   (messageId: string, contentmess: string) =>
//   (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     e.preventDefault();
//     setContextMenuVisible(true);
//     setSelectedMessageId(messageId);
//     setContextMenuPosition({ x: e.clientX, y: e.clientY });
//     setEditingMessageId(messageId);
//     setEditedMessage(contentmess);
//     setComent(contentmess);
//   };
