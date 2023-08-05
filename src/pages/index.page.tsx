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
  const [comment, setComment] = useState<string[]>([]);
  const [myMessages, setMyMessages] = useState<string[]>([]);
  const [otherMessages, setOtherMessages] = useState<string[]>([]);

  const createUserdata = async () => {
    await apiClient.create.$post();
  };
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
  };

  const LookRoom = async (roomId: string) => {
    const room = await apiClient.room.post({ body: { roomId } });
    setComment(room.body.comment);
  };

  const LookMessage = useCallback(async () => {
    const messages = await apiClient.message_get.$post({ body: { roomId } });
    console.log(message)
    const myId = user?.id;
    const myMessages = messages?.filter((message: MessageModel) => message.sender_Id === myId);
    console.log(myMessages);
    console.log('asd');
    const otherMessages = messages?.filter((message: MessageModel) => message.sender_Id !== myId);
    if (myMessages === undefined || otherMessages === undefined) {
      console.log('自分のmessageがありません');
      console.log('相手のmessageがありません');
    } else {
      const allmyContentMess = myMessages.map((message) => message.contentmess);
      setMyMessages(allmyContentMess);
      console.log(myMessages);
      const allotherMessages = otherMessages.map((message) => message.contentmess); // <- 修正: otherMessagesを使う
      setOtherMessages(allotherMessages);
    }
  }, [message, roomId, user?.id]);

  useEffect(() => {
    createUserdata();
    LookMessage();
  }, [LookMessage]);

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div>
        <p>User: {user.id}</p>
        <div>
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
        <p>自分のコメント</p>
        {myMessages.map((comment) => (
          <p key={comment}>{comment}</p>
        ))}
        <p>他の人のコメント</p>
        {otherMessages.map((comment) => (
          <p key={comment}>{comment}</p>
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
