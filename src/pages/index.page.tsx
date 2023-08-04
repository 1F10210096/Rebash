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
  const [chat, setChat] = useState([]);
  // const [roomIdasse, setRooomIdasse] = useState(['a', 'b']);

  const createUserdata = async () => {
    const newGame = await apiClient.create.$post();
  };
  const inputRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };
  const inputId = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const userId = user.id;
    const a = await apiClient.user.post({ body: { roomId, userId } });
    const room = await apiClient.roomcreate.post({ body: { roomId } });
    console.log(a.body.roomId);
    console.log(room.body.roomid);
    setARoomId(a.body.roomId);
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
                <p key={roomId}>{roomId}</p>
              </>
            ))}
          </div>
        </div>
      </div>
      <form style={{ textAlign: 'left', marginTop: '400px' }} onSubmit={inputId}>
        <input value={roomId} type="text" onChange={inputRoomId} />
        <input type="submit" value="  create  " />
      </form>
    </>
  );
};

export default Home;
