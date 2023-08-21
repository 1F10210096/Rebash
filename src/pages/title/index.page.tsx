import type { FC } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Sample5 from '../index.page';
import './index.module.css';

const App: FC = () => (
  <BrowserRouter>
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '24px' }}>
        Rebash
      </Link>
    </header>
    <main style={{ textAlign: 'center', padding: '20px' }}>
      <Link to="/sample5" style={{ textDecoration: 'none' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Start
        </button>
      </Link>
    </main>
    <Routes>
      <Route path="/sample5" element={<Sample5 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
