import type { MessageModel } from '$/commonTypesWithClient/models';
import {
  AppstoreOutlined,
  MailOutlined,
  PlusOutlined,
  SearchOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { DatePickerProps, MenuProps } from 'antd';
import {
  AutoComplete,
  Avatar,
  Button,
  Divider,
  FloatButton,
  Input,
  Layout,
  Menu,
  Popconfirm,
  theme,
} from 'antd';
import type { RcFile } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';
dayjs.extend(customParseFormat);
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
  const [birth, setBirth] = useState('2015/01/05');
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [popconfirmVisible, setPopconfirmVisible] = useState(false);
  const [popsearchVisible, setsearchVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const backgroundColor = '#02021e';
  const { Header, Content, Footer, Sider } = Layout;
  const roomNames = aroom;
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const dateFormat = 'YYYY/MM/DD';

  const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  const handleCancel = () => setPreviewOpen(false);
  // const handlePreview = async (file: UploadFile) => {
  //   if (file.url === null && file.preview === null) {
  //     file.preview = await getBase64(file.originFileObj as RcFile);
  //   }
  //   const previewImageUrl = (file.url !== null) || file.preview;
  //   if (previewImageUrl !== undefined) {
  //     // ここを修正
  //     setPreviewImage(previewImageUrl);
  //     setPreviewOpen(true);
  //     setPreviewTitle(
  //       file.name || previewImageUrl.substring(previewImageUrl.lastIndexOf('/') + 1) || 'Untitled'
  //     );
  //   }
  // };
  const onChange2: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setBirth(dateString);
    console.log(dateString);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onChange3 = (data: string) => {
    setValue(data);
  };
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const showDrawer = () => {
    setOpen(true);
    lookmystatus();
  };
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
  const handleConfirm = async () => {
    setRoomId(inputValue);
    console.log('User input:', inputValue);
    if (!user) return;
    const userId = user.id;
    const a = await apiClient.user.post({ body: { roomId, userId } });
    const b = await apiClient.roomcreate.post({ body: { roomId, userId } });
    console.log(roomId);
    setARoomId(a.body.roomId);
  };
  const serchId = async () => {
    if (!user) return;
    const userId = user.id;
    console.log(searchRoomId);
    const a = await apiClient.serchroom.post({ body: { searchRoomId, userId } });
    await apiClient.userroomcreate.post({ body: { searchRoomId, userId } });
    console.log(a.body.user);
    // const userasse = a.user
    console.log(roomId);
    setRoomId2(a.body.roomid);
    setuserasse(a.body.user);
    await Roomlist();
  };
  const mymessage = async () => {
    if (!user) return;
    const userId = user.id;
    const comment = message;
    console.log(comment);
    const usermessage = await apiClient.createcomment.$post({ body: { userId, comment } });
    setaComment(usermessage.comment);
  };
  const lookmystatus = async () => {
    if (!user) return;
    console.log('234');
    const userId = user.id;
    const usermessage = await apiClient.usercheck.$post({ body: { userId } });
    if (usermessage === undefined) {
      console.log('usernasi');
    } else {
      console.log(usermessage.comment);
      setaComment(usermessage.comment);
      console.log(usermessage.birth);
      console.log('asdaw');
      setBirth(usermessage.birth);
      console.log(birth);
    }
  };
  const inputcomment = async () => {
    if (!user) return;
    console.log(user.photoURL);
    console.log(value);
    const sender_id = user.id;
    const content = value;
    const name = user.displayName;
    if (name === undefined) {
      console.log('usernameなし');
    } else {
      const a = await apiClient.message.post({ body: { roomId, sender_id, content, name } });
    }
    await LookMessage();
  };
  const LookRoom = async (roomId3: string) => {
    console.log('a');
    console.log(roomId3);
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
  const { TextArea } = Input;
  const handleInfo = async (messageId: string) => {
    try {
      const infomessage = await apiClient.infomessage.$post({ body: { messageId } });
      setInfoName(infomessage.sender_Id);
      // console.log(infoname)
      await LookMessage();
    } catch (error) {
      await LookMessage();
    }
  };
  useEffect(() => {
    createUserdata();
    Roomlist();
  }, [Roomlist, createUserdata]);
  return (
    <Layout hasSider>
      {/* <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </> */}
      <div
        style={{
          width: 300,
          height: 120,
          background: backgroundColor,
        }}
      />
      <div className={styles.box1} onClick={showDrawer} />
      <Avatar style={{ backgroundColor: '#87d068', right: 500, top: 40 }} icon={<UserOutlined />} />
      <div style={{ top: 800, fontSize: '16px', color: 'blue' }}>{user?.displayName}</div>
      <></>
      <Layout className="site-layout" style={{ marginLeft: 100 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>long content</p>
            {messages
              .sort((a, b) => a.sent_at - b.sent_at)
              .map((message, index) => (
                <React.Fragment key={message.id2}>
                  {index !== 0 && <Divider orientation="left" plain />}
                  <div
                    className={`${styles.commentBubble} ${
                      message.sender_Id === myId ? styles.myMessage : styles.otherMessage
                    }`}
                  >
                    <div className={styles.username}>{message.username}</div>
                    <div className={styles.content}>{message.contentmess}</div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
      {/* <div style={{ position: 'relative' }}>
        <AutoComplete
          style={{ position: 'fixed', width: 800, height: 600, top: 750, right: 330 }}
          // value={inputValue}
          // options={autoCompleteOptions}
          onSelect={onSelect}
          onSearch={onChange3}
          placeholder="input here"
        />
        <br />
        <br />
      </div> */}
      <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: 750, right: 300 }}
        type="primary"
        onClick={() => inputcomment()}
      />
      <FloatButton icon={<SearchOutlined />} type="primary" style={{ top: 800, left: 75 }} />
      <Popconfirm
        title={
          <Input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onPressEnter={handleConfirm}
            placeholder="RoomIdを入力してください"
          />
        }
        visible={popconfirmVisible}
        onVisibleChange={(visible) => setPopconfirmVisible(visible)}
        onConfirm={handleConfirm}
        onCancel={() => setPopconfirmVisible(false)}
        okText="Add"
        cancelText="Cancel"
        placement="left"
      >
        <FloatButton icon={<PlusOutlined />} type="primary" style={{ top: 730, left: 75 }} />
      </Popconfirm>
      <Popconfirm
        title={
          <Input
            value={searchRoomId}
            onChange={(e) => setSearchRoomId(e.target.value)}
            onPressEnter={serchId}
            placeholder="RoomIdを入力してください"
          />
        }
        visible={popconfirmVisible}
        onVisibleChange={(visible) => setsearchVisible(visible)}
        onConfirm={serchId}
        onCancel={() => setsearchVisible(false)}
        okText="Search"
        cancelText="Cancel"
        placement="left"
      >
        <Button
          icon={<SendOutlined />}
          style={{ position: 'fixed', top: 750, right: 300 }}
          type="primary"
          onClick={() => inputcomment()}
        />
        <FloatButton
          icon={<SearchOutlined />}
          type="primary"
          style={{ position: 'fixed', top: 800, left: 75 }}
        />
      </Popconfirm>
      {/* <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </> */}
    </Layout>
  );
};
export default App;
