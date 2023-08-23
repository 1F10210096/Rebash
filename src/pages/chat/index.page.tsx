import type { MessageModel } from '$/commonTypesWithClient/models';
import {
  CheckOutlined,
  CloseOutlined,
  PlusOutlined,
  SearchOutlined,
  SendOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { DatePickerProps, MenuProps } from 'antd';
import {
  AutoComplete,
  Avatar,
  Button,
  DatePicker,
  Divider,
  Drawer,
  FloatButton,
  Input,
  Layout,
  Menu,
  Modal,
  Popconfirm,
  theme,
} from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { UploadFile } from 'antd/es/upload/interface';
import assert from 'assert';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { useAuth, useSendFriendId } from 'src/utils/friend';
import { useInputComment, useLookMessage, useLookRoom } from 'src/utils/message';
import { useLookmystatus, useMybirth, useMymessage } from 'src/utils/myinfo';
import { useHandleConfirm, useSearchId } from 'src/utils/room';
import styles from './index.module.css';
dayjs.extend(customParseFormat);
const App: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [roomId, setRoomId] = useState('');
  const [roomId2, setRoomId2] = useState('');
  const [aroom, setARoomId] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [myId, setmyId] = useState<string>('');
  const [userasse, setuserasse] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  // const [friendinfo, setFrieniunfo] = useState<User1Model[]>([]);
  // const [myMessages, setMyMessages] = useState<string[]>([]);
  // const [otherMessages, setOtherMessages] = useState<string[]>([]);
  const [open1, setOpen1] = useState(false);
  const router = useRouter(); // Next.js のルーターを取得
  const [roomId1, setRoomId1] = useState(''); // 状態変数 roomId を宣言
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | undefined>();
  // const [showForm, setShowForm] = useState(false);
  const [searchRoomId, setSearchRoomId] = useState('');
  // const [coment, setComent] = useState('');
  // const [infoname, setInfoName] = useState('');
  // const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  // const [editedMessage, setEditedMessage] = useState('');
  // const [contextMenuVisible, setContextMenuVisible] = useState(false);
  // const [editMenuVisible, setEditMenuVisible] = useState(false);
  // const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  // const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
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
  // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  //   console.log(date, dateString);
  // };
  const dateFormat = 'YYYY/MM/DD';

  const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [friend, setFriend] = useState<string[]>([]);
  // const [sent_friend, setSend_friend] = useState('');
  const [receive_friend, setReceive_friend] = useState<string[]>([]);
  // const [syouninfriend, setSyouninFriend] = useState('');
  const [searchfriend, setSearchFriend] = useState('');
  // const [del_friend, setDel_Friend] = useState('');
  // const [sex, setSex] = useState(0);
  // const [sex_str, setSex_str] = useState('');
  const [look_friend, setLookFriend] = useState<string[]>([]);

  // const getBase64 = (file: RcFile): Promise<string> =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // const handleCancel = () => setPreviewOpen(false);

  const showModal1 = () => {
    setOpen1(true);
    console.log(look_friend);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen1(false);
  };

  const handleCancel1 = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen1(false);
  };

  const onChange2: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setBirth(dateString);
    console.log(dateString);
  };

  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  // const friendMenu: MenuProps['items'] = [
  //   UserOutlined,
  //   VideoCameraOutlined,
  //   UploadOutlined,
  //   BarChartOutlined,
  //   CloudOutlined,
  //   AppstoreOutlined,
  //   TeamOutlined,
  //   ShopOutlined,
  // ].map((icon, index) => ({
  //   key: String(index + 1),
  //   icon: React.createElement(icon),
  //   label: `nav ${index + 1}`,
  // }));
  const items: MenuProps['items'] = [
    getItem(
      'Group',
      'grp',
      null,
      aroom.map((room) => getItem(room, room)),
      'group'
    ),
  ];
  const items1: MenuProps['items'] = [
    getItem(
      'Friend',
      'grp',
      null,
      friend.map((friend) => getItem(friend, friend)),
      'group'
    ),
  ];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange3 = (data: string) => {
    setValue(data);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const showDrawer = () => {
    setOpen(true);
    MyStatus();
  };
  const onClose = () => {
    setOpen(false);
  };
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

  const handleConfirm = useHandleConfirm();

  const Confirm = async () => {
    const confirm = await handleConfirm(inputValue);
    assert(confirm, 'roomなし');
  };

  const searchId = useSearchId();
  //room検索
  const SearchId = async () => {
    await searchId(searchRoomId);
  };

  const mymessage = useMymessage();
  //自分のコメント設定
  const MyMesse = async () => {
    const userMessa = await mymessage(message);
    assert(userMessa, 'messeなし');
    setMessage(userMessa);
  };

  const lookmystatus = useLookmystatus();
  //自分のステータス確認
  const MyStatus = async () => {
    const userStatus = await lookmystatus();
    assert(userStatus, 'myStatusなし');
    setMessage(userStatus.comment);
    setBirth(userStatus.birth);
  };

  const mybirth = useMybirth();
  //誕生日設定
  const MyBirth = async () => {
    const userBirth = await mybirth(birth);
    assert(userBirth, '誕生日なし');
    setBirth(userBirth);
  };

  const inputComment = useInputComment();
  //メッセージ送信
  const inputcomment = async () => {
    console.log(value);
    console.log(roomId);
    const InputComment = await inputComment(roomId, value);
    assert(InputComment, 'コメントなし');
  };

  const lookRoom = useLookRoom();
  //メッセージ送信
  const Lookroom = async () => {
    if (!user) return;
    const userId = user.id;
    const userLookroom = await lookRoom(roomId);
    assert(userLookroom, 'Roomなし');

    setMessages(userLookroom);
    setmyId(userId);
  };

  const lookMessage = useLookMessage();
  //メッセージを映す
  const LookMessage = async () => {
    if (!user) return;
    const userId = user.id;
    const userLooKmessage = await lookMessage(roomId);
    assert(userLooKmessage, 'Roomなし');

    setMessages(userLooKmessage);
    setmyId(userId);
  };

  const onChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
    setMessage(e.target.value);
  };
  const { TextArea } = Input;
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

  //フレンド認証
  const Friendauth = useAuth();

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
  //   (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //     e.preventDefault();
  //     setContextMenuVisible(true);
  //     setSelectedMessageId(messageId);
  //     setContextMenuPosition({ x: e.clientX, y: e.clientY });
  //     setEditingMessageId(messageId);
  //     setEditedMessage(contentmess);
  //     setComent(contentmess);
  //   };

  const sendFriendId = useSendFriendId();
  //フレンド送信
  const SendFriend = async () => {
    const userSendFriend = await sendFriendId(searchfriend);
    assert(userSendFriend, 'myStatusなし');
    setReceive_friend(userSendFriend);
  };

  // const look_receive_friendId = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   const friend_asse = await apiClient.friend.$post({ body: { searchfriend, userId } });
  //   setReceive_friend(friend_asse.receive_id);
  // };

  // const look_friendroom = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   const friend_asse = await apiClient.friend.$post({ body: { searchfriend, userId } });
  //   setReceive_friend(friend_asse.receive_id);
  // };

  // const delete_friendId = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   await apiClient.del_friend.$post({ body: { del_friend, userId } });
  // };
  const LookFriend = useCallback(async () => {
    if (!user) return;
    const userId = user.id;
    setmyId(userId);
    const userlist = await apiClient.Look_friend.$post({ body: { userId } });
    setLookFriend(userlist.receive_id);
    console.log(friend);
    setFriend(userlist.friend);
    console.log('345');
  }, [friend, user]);

  // const select_sex = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   const sexes = await apiClient.sex.$post({ body: { sex, userId } });
  //   const sexString = sexes.sex === 1 ? '男' : sexes.sex === 2 ? '女' : '';
  //   setSex_str(sexString);
  //   return sexString;
  // };
  // const Reselect_sex = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   if (sex_str === '男') {
  //     setSex(1);
  //   } else if (sex_str === '女') {
  //     setSex(2);
  //   }
  //   const sexes = await apiClient.sex.$post({ body: { sex, userId } });
  //   const sexString = sexes.sex === 1 ? '男' : sexes.sex === 2 ? '女' : '';
  //   setSex_str(sexString);
  //   return sexString;
  // };
  // const Look_friend = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   const friend_info = await apiClient.Lookfriend_info.$post({ body: { friend, userId } });
  //   return friend_info;
  // };
  // const receive_friend1 = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   const friend_info = await apiClient.receive_friend.$post({ body: { userId } });
  //   const receive_friend = friend_info.receive_id;
  //   setReceive_friend(receive_friend);
  //   return friend_info;
  // };
  // const confirm = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   message.success('Click on Yes');
  // };

  // const cancel = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   message.error('Click on No');
  // };
  // const LookF = async (key: string) => {
  //   if (!user) return;
  //   const userId1 = user.id;
  //   const userId = key;
  //   const userinfo = await apiClient.userinfo.$post({ body: { userId } });
  // };
  useEffect(() => {
    createUserdata();
    Roomlist();
    if (user) {
      LookFriend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Roomlist, createUserdata, user]);
  return (
    <Layout hasSider>
      <div
        style={{
          width: 300,
          height: 120,
          background: backgroundColor,
          position: 'fixed',
        }}
      >
        <div className={styles.box1} onClick={showDrawer} />
        <div style={{ left: 480 }}>{myId}</div>
        <Avatar
          style={{ backgroundColor: '#87d068', right: 1850, top: 40, position: 'fixed' }}
          icon={<UserOutlined />}
        />
        <div style={{ top: 800 }} className="fuchidori">
          {user?.displayName}
        </div>
      </div>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 1700,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          items={items1}
          // onSelect={({ key }) => LookF(key)}
          style={{ width: 300 }} // ここで幅を指定
        >
          <div style={{ left: 40 }}>{myId}</div>
        </Menu>
      </Sider>
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
      <>
        <Drawer title="your profile" placement="right" onClose={onClose} open={open} width={800}>
          <p>{user?.displayName}</p>
          <br />
          <p>message</p>
          <TextArea showCount maxLength={100} onChange={onChange1} value={message} />
          <Button type="primary" icon={<CheckOutlined />} onClick={MyMesse}>
            ok
          </Button>
          <br />
          <br />
          <p>birthday</p>
          <DatePicker
            onChange={onChange2}
            defaultValue={dayjs(birth, dateFormat)}
            format={dateFormat}
          >
            birthday
          </DatePicker>
          <Button type="primary" icon={<CheckOutlined />} onClick={MyBirth}>
            ok
          </Button>
          <div style={{ left: 40 }}>{myId}</div>
          <p>Some contents...</p>
        </Drawer>
      </>
      <Sider
        style={{
          height: '100vh',
          position: 'fixed',
          top: 120,
          bottom: 0,
        }}
        width={300} // 幅を指定
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
          onSelect={({ key }) => lookRoom(key)}
          style={{ width: 300 }} // ここで幅を指定
        />
      </Sider>
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
      <div style={{ position: 'relative' }}>
        <Button type="primary" onClick={showModal1}>
          Open Modal with customized button props
        </Button>
        <Modal
          title="Basic Modal"
          open={open1}
          onOk={handleOk}
          onCancel={handleCancel1}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          {look_friend.map((friendName, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <p>{friendName}</p>
              <Button
                type="primary"
                shape="circle"
                icon={<CheckOutlined />}
                size={size}
                style={{ marginLeft: '10px' }}
                onClick={() => Friendauth(friendName)}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<CloseOutlined />}
                size={size}
                style={{ marginLeft: '10px' }}
              />
              {/* <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>Delete</Button>
              </Popconfirm> */}
            </div>
          ))}
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <AutoComplete
          style={{ position: 'fixed', width: 800, height: 600, top: 750, right: 330 }}
          // value={inputValue}
          // options={autoCompleteOptions}
          onSelect={onSelect}
          onSearch={onChange3}
          placeholder="input her"
        />
        <br />
        <br />
      </div>
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
            onPressEnter={Confirm}
            placeholder="RoomIdを入力してください"
          />
        }
        visible={popconfirmVisible}
        onVisibleChange={(visible) => setPopconfirmVisible(visible)}
        onConfirm={Confirm}
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
            onPressEnter={SearchId}
            placeholder="RoomIdを入力してください"
          />
        }
        visible={popconfirmVisible}
        onVisibleChange={(visible) => setsearchVisible(visible)}
        onConfirm={SearchId}
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
        <Input
          value={searchfriend}
          onChange={(e) => setSearchFriend(e.target.value)}
          onPressEnter={SendFriend}
          placeholder="userIdを入力してください"
          style={{ top: 650 }}
        />
      </Popconfirm>
    </Layout>
  );
};
export default App;
