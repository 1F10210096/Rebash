import type { FC } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styles from '../index.module.css';
import Sample5 from '../index.page';
import './index.module.css'; // スタイルファイルをインポート

const App: FC = () => (
  <BrowserRouter>
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <h1>React WebRTC </h1>
    </Link>
    <span className="msr_btn12">
      <Link to="/sample5" className={styles.ribbon2}>
        Start
      </Link>
    </span>
    <Route path="/sample5" Component={Sample5} />
  </BrowserRouter>
);

export default App;
