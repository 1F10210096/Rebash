import { useAtom } from 'jotai';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';
import { userAtom } from 'src/atoms/user';

const Home = () => {
  const user =false;
  if (!user) return <Loading visible />;

  return (
      <div className={styles.title} style={{ marginTop: '160px' }}>
        Welcome to room
      </div>
    
  );
};

export default Home;
