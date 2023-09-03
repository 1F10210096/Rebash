import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const webSocketRef = useRef<WebSocket>();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');
    webSocketRef.current = socket;

    socket.addEventListener('message', (event) => {
      setMessage(event.data);
    });

    return () => socket.close();
  }, []);

  const [inputText, setInputText] = useState('');
  const submit: React.FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      webSocketRef.current?.send(inputText);
    },
    [inputText]
  );

  return (
    <div className="App">
      <h1>{JSON.stringify(message)}</h1>
      <form onSubmit={submit}>
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button>送信</button>
      </form>
    </div>
  );
}

export default App;
