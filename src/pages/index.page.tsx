import type { MessageModel } from '$/commonTypesWithClient/models';
import { useAtom } from 'jotai';
import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [roomId, setRoomId] = useState('');
  const [aroom, setARoomId] = useState<string[]>([]);
  const [message, setaComment] = useState('');
  const [myId, setmyId] = useState<string>('');
  const [comment, setComment] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [myMessages, setMyMessages] = useState<string[]>([]);
  const [otherMessages, setOtherMessages] = useState<string[]>([]);

  const createUserdata = useCallback(async () => {
    if (user === null) {
      await apiClient.create.$post();
    } else {
      const userId = user.id;
      const userroom = await apiClient.usercheck.$post({ body: { userId } });
      console.log(userroom);
    }
  }, [user]);
  const inputRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };
  const inputComment = (e: ChangeEvent<HTMLInputElement>) => {
    setaComment(e.target.value);
  };
  const inputId = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const userId = user.id;
    aroom.push(roomId);
    setARoomId(aroom);
    const a = await apiClient.user.post({ body: { aroom, userId } });
    console.log(roomId);
    await apiClient.roomcreate.post({ body: { roomId } });
    setARoomId(a.body.roomId);
  };

  const inputcomment = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const sender_id = user.id;
    const content = message;
    const a = await apiClient.message.post({ body: { roomId, sender_id, content } });
    await LookMessage();
  };
  const LookRoom = async (roomId: string) => {
    const room = await apiClient.room.post({ body: { roomId } });
    const comments = room.body.map((roomModel) => roomModel.comment);
    setComment(comments.flat());
  };
  const LookMessage = async () => {
    const messages = await apiClient.message_get.$post({ body: { roomId } });
    if (messages === undefined) {
      console.log('messagesがありません');
    } else {
      setMessages(messages);
      setmyId(user?.id || '');
    }
  };

  useEffect(() => {
    createUserdata();
  }, [createUserdata]);

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div>
        <p>User: {user.id}</p>
        <div>
          <div className={styles.currentroomId}>
            {/* 他のコンテンツ */}
            <p>現在のRoom ID: {roomId}</p>
            {/* 他のコンテンツ */}
          </div>
          <div className={styles.roomIds}>
            <p>Room IDs:</p>
            {aroom.map((roomId) => (
              <>
                <p key={roomId} onClick={() => LookRoom(roomId)}>
                  {roomId}
                </p>
              </>
            ))}
            <form style={{ textAlign: 'left', marginTop: '400px' }} onSubmit={inputId}>
              <input value={roomId} type="text" onChange={inputRoomId} />
              <input type="submit" value="  create  " />
            </form>
          </div>
          <div />
        </div>
      </div>
      <div className={styles.comment}>
        {/* メッセージを時間順にソート */}
        {messages
          .sort((a, b) => a.sent_at - b.sent_at)
          .map((message) => (
            <div
              key={message.id2}
              className={`${styles.commentBubble} ${
                message.sender_Id === myId ? styles.myMessage : styles.otherMessage
              }`}
            >
              {message.contentmess}
            </div>
          ))}
      </div>

      <div className={styles.form}>
        <form style={{ marginLeft: '700px' }} onSubmit={inputcomment}>
          <input value={message} type="text" onChange={inputComment} />
          <input type="submit" value="  createcomment  " />
        </form>
      </div>
    </>
  );
};

export default Home;
