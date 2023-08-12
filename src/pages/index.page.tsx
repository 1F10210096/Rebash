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
  const [roomId2, setRoomId2] = useState('');
  const [aroom, setARoomId] = useState<string[]>([]);
  const [message, setaComment] = useState('');
  const [myId, setmyId] = useState<string>('');

  const [userasse, setuserasse] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [myMessages, setMyMessages] = useState<string[]>([]);
  const [otherMessages, setOtherMessages] = useState<string[]>([]);
  const router = useRouter(); // Next.js のルーターを取得
  const [roomId1, setRoomId1] = useState(''); // 状態変数 roomId を宣言
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | undefined>();
  const [showForm, setShowForm] = useState(false);
  const [searchRoomId, setSearchRoomId] = useState('');
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editedMessage, setEditedMessage] = useState('');
  //a
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

  const Roomlist = useCallback(async () => {
    const roomlist = await apiClient.roomlist.$post();
    console.log(roomlist);
    setARoomId(roomlist.roomId);
  }, []);

  const createUserdata = useCallback(async () => {
    const user1 = await apiClient.roomlist.$post();
    console.log(user1);
    if (user1 === null) {
      console.log('a');
      await apiClient.create.$post();
    } else {
      if (user === null) {
        console.log(user);
      } else {
        const userId = user.id;
        const userroom = await apiClient.usercheck.$post({ body: { userId } });
        console.log(userroom);
      }
    }
  }, [user]);
  const inputRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };
  const serchRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchRoomId(e.target.value);
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
    const b = await apiClient.roomcreate.post({ body: { roomId, userId } });
    console.log(roomId);
    setARoomId(a.body.roomId);
  };
  const serchId = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const userId = user.id;
    console.log(searchRoomId);
    const a = await apiClient.serchroom.post({ body: { searchRoomId, userId } });
    await apiClient.userroomcreate.post({ body: { searchRoomId, userId } });
    console.log(a.body.user);
    // const userasse = a.user
    console.log(roomId);
    setRoomId2(a.body.roomid);
    setuserasse(a.body.user);
    await Roomlist();
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

  const LookRoom = async (roomId3: string) => {
    setRoomId(roomId3);
    await apiClient.room.post({ body: { roomId3 } });
    console.log(roomId3);
    console.log(roomId);
    const messages = await apiClient.message_get2.$post({ body: { roomId3 } });
    console.log(messages);
    if (messages === undefined) {
      console.log('messagesがありません');
    } else {
      setMessages(messages);
      setmyId(user?.id || '');
    }
  };

  const LookMessage = async () => {
    const messages = await apiClient.message_get.$post({ body: { roomId } });
    console.log(messages);
    if (messages === undefined) {
      console.log('messagesがありません');
    } else {
      setMessages(messages);
      setmyId(user?.id || '');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleRightClick =
    (messageId: string, contentmess: string) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setEditingMessageId(messageId);
      setEditedMessage(contentmess);
    };
  const handleSaveEdit = async () => {
    console.log(editingMessageId);
    console.log(editedMessage);
    if (editingMessageId === null) {
      console.log('id2なし');
    }
    {
      await apiClient.edit.$post({ body: { editingMessageId, editedMessage } });
      await LookMessage();
      setEditingMessageId(null);
      setEditedMessage('');
    }
  };

  useEffect(() => {
    createUserdata();
    Roomlist();
  }, [Roomlist, createUserdata]);

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
            <p>{userasse}</p>
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
        {messages
          .sort((a, b) => a.sent_at - b.sent_at)
          // eslint-disable-next-line complexity
          .map((message) => (
            <div
              key={message.id2}
              className={`${styles.commentBubble} ${
                message.sender_Id === myId ? styles.myMessage : styles.otherMessage
              }`}
              onContextMenu={(e) => handleRightClick(message.id2, message.contentmess)(e)}
            >
              {editingMessageId === message.id2 ? (
                <textarea
                  value={editedMessage}
                  onChange={(e) => setEditedMessage(e.target.value)}
                />
              ) : (
                <>
                  <div className={styles.username}>
                    {message.sender_Id === myId ? null : message.username}
                  </div>
                  <div className={styles.username}>
                    {message.sender_Id === myId ? message.username : null}
                  </div>
                  <div className={styles.messageContent}>{message.contentmess}</div>
                </>
              )}
              {editingMessageId === message.id2 && <button onClick={handleSaveEdit}>Save</button>}
            </div>
          ))}
      </div>
      <div className={styles.form}>
        <form style={{ marginLeft: '700px' }} onSubmit={inputcomment}>
          <input value={message} type="text" onChange={inputComment} />
          <input type="submit" value="  createcomment  " />
        </form>
      </div>

      <div>
        <button
          className={styles.btn_25}
          onClick={handleToggleForm}
          style={{ marginLeft: '100px', marginTop: '500px' }}
        >
          Toggle Form
        </button>
        <div className={styles.crateButton}>
          {showForm && (
            <div>
              <form style={{ textAlign: 'left', marginTop: '50px' }} onSubmit={inputId}>
                <input value={roomId} type="text" onChange={inputRoomId} placeholder="Room ID" />
                <input type="submit" value="Create" />
              </form>

              <form style={{ textAlign: 'left', marginTop: '50px' }} onSubmit={serchId}>
                <input
                  value={searchRoomId}
                  type="text"
                  onChange={serchRoomId}
                  placeholder="Search Room ID"
                />
                <input type="submit" value="Search" />
              </form>
            </div>
          )}
        </div>
      </div>
      {/* <div className="video-container">
        <video ref={videoRef} style={{ width: '100%', maxWidth: '100%' }} autoPlay playsInline />
      </div> */}
    </>
  );
};

export default Home;
