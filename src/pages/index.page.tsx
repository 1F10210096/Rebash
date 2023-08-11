import type { MessageModel } from '$/commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const router = useRouter(); // Next.js のルーターを取得
  const [roomId1, setRoomId1] = useState(''); // 状態変数 roomId を宣言
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | undefined>();

  useEffect(() => {
    const initializeVideo = async () => {
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStreamRef.current;
      }
    };

    const cleanupMediaStream = () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks()[0].stop();
      }
    };

    initializeVideo();

    return () => {
      cleanupMediaStream();
    };
  }, []);

  const createUserdata = useCallback(async () => {
    if (user === null) {
      console.log('a');
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
    console.log('a');
    if (!user) return;
    const userId = user.id;
    const a = await apiClient.user.post({ body: { roomId, userId } });
    console.log(roomId);
    setARoomId(a.body.roomId);
  };

  const inputcomment = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const sender_id = user.id;
    const content = message;
    const name = user.displayName;
    if (name === undefined) {
      console.log('usernameなし');
    } else {
      const a = await apiClient.message.post({ body: { roomId, sender_id, content, name } });
    }
    await LookMessage();
  };

  const LookRoom = async (roomId: string) => {
    const room = await apiClient.room.post({ body: { roomId } });
    setRoomId(roomId);
    await LookMessage();
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
      <form style={{ textAlign: 'left', marginTop: '300px' }} onSubmit={inputId}>
        <input value={roomId} type="text" onChange={inputRoomId} />
        <input type="submit" value="  create  " />
      </form>
      <div className="video-container">
        <video ref={videoRef} style={{ width: '100%', maxWidth: '100%' }} autoPlay playsInline />
      </div>
    </>
  );
};

export default Home;
