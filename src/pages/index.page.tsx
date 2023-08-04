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
    console.log(a.body.roomId);
    setARoomId(a.body.roomId);
  };

  useEffect(() => {
    createUserdata();
  }, []);

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.title} style={{ marginTop: '160px' }}>
        Welcome to Rebash
      </div>
      <div>
        <p>User: {user.id}</p>
        <div>
          <p>Room IDs:</p>
          {aroom.map((roomId) => (
            <>
              <p key={roomId}>{roomId}</p>
            </>
          ))}
        </div>
      </div>
      <form style={{ textAlign: 'center', marginTop: '80px' }} onSubmit={inputId}>
        <input value={roomId} type="text" onChange={inputRoomId} />
        <input type="submit" value="  in  " />
      </form>
    </>
  );
};

export default Home;
