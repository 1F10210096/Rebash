import type { MessageModel } from '$/commonTypesWithClient/models';
import { AliwangwangOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { userAtom } from 'src/atoms/user';
import type { ChangeEvent, FormEvent } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { AutoComplete } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';

const App: React.FC = () => {
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
  const [coment, setComent] = useState('');
  const [infoname, setInfoName] = useState('');
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editedMessage, setEditedMessage] = useState('');
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [editMenuVisible, setEditMenuVisible] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState('');
  const [options, setOptions] = useState('');
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);
  const { Header, Content, Footer, Sider } = Layout;
  const roomNames = aroom;
  const items = roomNames.map((roomName, index) => ({
    key: String(index + 1),
    icon: React.createElement(AliwangwangOutlined),
    label: roomName,
    onClick: () => {
      LookRoom(roomName);
    },
  }));

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
  // const inputRoomId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setRoomId(e.target.value);
  // };
  // const serchRoomId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchRoomId(e.target.value);
  // };
  // const inputComment = (e: ChangeEvent<HTMLInputElement>) => {
  //   setaComment(e.target.value);
  // };
  // const inputId = async (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log('a');
  //   if (!user) return;
  //   const userId = user.id;
  //   const a = await apiClient.user.post({ body: { roomId, userId } });
  //   const b = await apiClient.roomcreate.post({ body: { roomId, userId } });
  //   console.log(roomId);
  //   setARoomId(a.body.roomId);
  // };
  // const serchId = async (e: FormEvent) => {
  //   e.preventDefault();
  //   if (!user) return;
  //   const userId = user.id;
  //   console.log(searchRoomId);
  //   const a = await apiClient.serchroom.post({ body: { searchRoomId, userId } });
  //   await apiClient.userroomcreate.post({ body: { searchRoomId, userId } });
  //   console.log(a.body.user);
  //   // const userasse = a.user
  //   console.log(roomId);
  //   setRoomId2(a.body.roomid);
  //   setuserasse(a.body.user);
  //   await Roomlist();
  // };

  const inputcomment = async () => {
    if (!user) return;
    console.log(value)
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
    console.log(roomId3)
    setRoomId(roomId3);
    await apiClient.room.post({ body: { roomId3 } });
    if (user === null) {
      console.log('error');
    } else {
      const userId = user.id;
      console.log(userId);
      const a = await apiClient.roomuser.post({ body: { roomId3 } });
      console.log(a.body.user);
      setuserasse(a.body.user);
    }

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
    if (messages === undefined) {
      console.log('messagesがありません');
    } else {
      setMessages(messages);
      setmyId(user?.id || '');
    }
  };

  // const handleInfo = async (messageId: string) => {
  //   try {
  //     const infomessage = await apiClient.infomessage.$post({ body: { messageId } });
  //     setInfoName(infomessage.sender_Id);
  //     // console.log(infoname)
  //     await LookMessage();
  //   } catch (error) {
  //     await LookMessage();
  //   }
  // };

  // const handleDelete = async (messageId: string) => {
  //   try {
  //     await apiClient.deleteMessage.$post({ body: { messageId } });
  //     await LookMessage();
  //   } catch (error) {
  //     await LookMessage();
  //   }
  // };

  // const handleToggleForm = () => {
  //   setShowForm(!showForm);
  // };

  // const handleEdit = (messageId: string, contentmess: string) => {
  //   setEditingMessageId(messageId);
  //   setEditedMessage(contentmess);
  //   setContextMenuVisible(false);
  //   setEditMenuVisible(true);
  //   setComent(contentmess);
  // };
  // const handleSaveEdit = async () => {
  //   setEditMenuVisible(false);
  //   if (editingMessageId === null) {
  //     console.log('id2なし');
  //   }
  //   {
  //     await apiClient.edit.$post({ body: { editingMessageId, editedMessage } });
  //     await LookMessage();
  //     setEditingMessageId(null);
  //     setEditedMessage('');
  //   }
  // };
  // const handleRightClick =
  //   (messageId: string, contentmess: string) =>
  //     (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //       e.preventDefault();
  //       setContextMenuVisible(true);
  //       setSelectedMessageId(messageId);
  //       setContextMenuPosition({ x: e.clientX, y: e.clientY });
  //       setEditingMessageId(messageId);
  //       setEditedMessage(contentmess);
  //       setComent(contentmess);
  //     };

  useEffect(() => {
    createUserdata();
    Roomlist();
  }, [Roomlist, createUserdata]);

  return (
    <Layout hasSider>
      <p>User: {user?.id}</p>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'fixed', width: 100, top: 20, left: 20 }}>
          <AutoComplete
            style={{ width: 400, top: 750, left: 600 }}
            // value={inputValue}
            // options={autoCompleteOptions}
            onSelect={onSelect}
            onSearch={onChange}
            placeholder="input here"
          />
          <br />
          <br />
          <button style={{ marginTop: '700px', marginLeft: '1000px' }} onClick={() => inputcomment()}>Save</button>
        </div>

        {/* ここに他のコンテンツが入ると仮定 */}
      </div>
      <FloatButton icon={<PlusOutlined />} type="primary" style={{ left: 32 }} />
      <FloatButton icon={<SearchOutlined />} type="primary" style={{ left: 109 }} />
    </Layout>

  );
};

export default App;
