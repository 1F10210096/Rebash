import { useAtom } from 'jotai';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [roomId, setRoomId] = useState('');
  const [aroom, setARoomId] = useState<string[]>([]);
  const [acomment, setaComment] = useState('');
  const [comment, setComment] = useState<string[]>([]);
  const [chat, setChat] = useState([]);
  // const [roomIdasse, setRooomIdasse] = useState(['a', 'b']);

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
    const a = await apiClient.user.post({ body: { roomId, userId } });
    await apiClient.roomcreate.post({ body: { roomId } });
    setARoomId(a.body.roomId);
  };

  const inputcomment = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const a = await apiClient.createcomment.post({ body: { roomId, acomment } });
    setComment(a.body.comment);
  };

  const LookRoom = async (roomId: string) => {
    const room = await apiClient.room.post({ body: { roomId } });
    console.log(room.body.comment);
    setComment(room.body.comment);
  };

  useEffect(() => {
    createUserdata();
  }, []);

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
        <p>Comment:</p>
        {comment.map((cmt) => (
          <p key={cmt}>{cmt}</p>
        ))}
      </div>
      <div className={styles.form}>
        <form style={{ marginLeft: '700px' }} onSubmit={inputcomment}>
          <input value={acomment} type="text" onChange={inputComment} />
          <input type="submit" value="  createcomment  " />
        </form>
      </div>
    </>
  );
};

export default Home;
