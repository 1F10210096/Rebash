import { Loading } from 'src/components/Loading/Loading';
import styles from './index.module.css';

const Home = () => {
  const user = false;
  if (!user) return <Loading visible />;

  return (
    <div className={styles.title} style={{ marginTop: '160px' }}>
      Welcome to room
    </div>
  );
};

export default Home;
