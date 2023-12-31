import type { MessageModel } from '$/commonTypesWithClient/models';
import {
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  MailOutlined,
  PlusOutlined,
  SearchOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { DatePickerProps, DrawerProps, MenuProps, RadioChangeEvent } from 'antd';
import { Upload } from 'antd';
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
  Space,
  theme,
} from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import type { UploadFile } from 'antd/es/upload/interface';
import assert from 'assert';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { useCreateDM, useSearchDM } from 'src/utils/DM';
import { apiClient } from 'src/utils/apiClient';
import {
  useAuth,
  useDeleteFriendId,
  useLookFriend,
  useLookFriendRoom,
  useSendFriendId,
} from 'src/utils/friend';
import { useDeleteMsg, useInputComment, useLookMessage, useLookRoom } from 'src/utils/message';
import { useLookmystatus, useMybirth, useMymessage } from 'src/utils/myinfo';
import { useHandleConfirm, useSearchId } from 'src/utils/room';
import styles from './index.module.css';
import type { RcFile, UploadProps } from 'antd/es/upload';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });


dayjs.extend(customParseFormat);
const App: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [roomId_select, setRoomId] = useState('');
  const [roomId2, setRoomId2] = useState('');
  const [aroom, setARoomId] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [myId, setmyId] = useState<string>('');
  const [userasse, setuserasse] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  const [open1, setOpen1] = useState(false);
  const router = useRouter(); // Next.js のルーターを取得
  const [roomId1, setRoomId1] = useState(''); // 状態変数 roomId を宣言
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | undefined>();
  const [searchRoomId, setSearchRoomId] = useState('');
  const [value, setValue] = useState('');
  const [selectedmsg, setSelectedMsg] = useState('');
  const [birth, setBirth] = useState('2015/01/05');
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [popconfirmVisible, setPopconfirmVisible] = useState(false);
  const [popsearchVisible, setsearchVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [open3, setOpen3] = useState(false);
  const backgroundColor = '#02021e';
  const { Header, Content, Footer, Sider } = Layout;
  const roomNames = aroom;

  const dateFormat = 'YYYY/MM/DD';
  const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;
  const [friend, setFriend] = useState<string[]>([]);
  const [receive_friend, setReceive_friend] = useState<string[]>([]);
  const [searchfriend, setSearchFriend] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [friend_messe, setFriend_messe] = useState('');
  const [friend_birth, setFriend_birth] = useState('');
  const [showFriendList, setShowFriendList] = useState(false);
  const [look_friend, setLookFriend] = useState<string[]>([]);
  const [open2, setOpen2] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const [placement2, setPlacement2] = useState<DrawerProps['placement']>('left');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');



  const showFriendListDrawer = () => {
    setShowFriendList(true);
  };
  const onCloseFriendListDrawer = () => {
    setShowFriendList(false);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const showDrawer1 = () => {
    setOpen3(true);
  };

  const onClose1 = () => {
    setOpen3(false);
  };

  const onChange4 = (e: RadioChangeEvent) => {
    setPlacement2(e.target.value);
  };
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

  function getItem1(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    const effectiveLabel = label ?? 'Default Label';
    return {
      key,
      icon,
      children,
      label: effectiveLabel,
      type,
      onClick: () => {
        if (label !== null && label !== undefined) {
          searchedDM(label.toString());
        }
      },
    } as MenuItem;
  }

  const subMenu = getItem('Submenu', 'sub3', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]);

  const items: ItemType[] = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          children: [
            getItem1(
              'DM',
              'grp',
              null,
              friend.map((friendItem) => getItem(friendItem, friendItem)),
              'group'
            ),
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal2 = () => {
    setIsModalOpen(true);
  };

  const handleOk2 = () => {
    setIsModalOpen(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen(false);
  };

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
    console.log('a');
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

  const onChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
    setMessage(e.target.value);
  };
  const { TextArea } = Input;

  const handleConfirm = useHandleConfirm();
  //ルーム追加
  const Confirm = async () => {
    await handleConfirm(roomId2);
    await Roomlist();
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
    if (!user) return;
    setmyId(user.id);
    const userStatus = await lookmystatus();
    assert(userStatus, 'myStatusなし');
    setMessage(userStatus.comment);
    setBirth(userStatus.birth);
    setARoomId(userStatus.roomId);
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
    console.log(roomId_select);
    const InputComment = await inputComment(roomId_select, value);
    assert(InputComment, 'コメントなし');
    await LookMessage();
  };

  const deleteMsg = useDeleteMsg();
  //メッセージ削除

  const lookRoom = useLookRoom();
  //ルーム選択
  const Lookroom = async (key: string) => {
    setRoomId(key);
    console.log(key);
    console.log(roomId_select);
    await LookMessage();
  };

  const lookMessage = useLookMessage();
  //メッセージを映す
  const LookMessage = async () => {
    if (!user) return;
    const userId = user.id;
    const userLooKmessage = await lookMessage(roomId_select);
    assert(userLooKmessage, 'Roomなし');

    setMessages(userLooKmessage);
    setmyId(userId);
  };

  //フレンド認証
  const Friendauth = useAuth();

  const sendFriendId = useSendFriendId();
  //フレンド送信
  const SendFriend = async () => {
    const userSendFriend = await sendFriendId(searchfriend);
    assert(userSendFriend, 'myStatusなし');
    setReceive_friend(userSendFriend);
  };

  const lookFriendRoom = useLookFriendRoom();
  // フレンド一覧
  const LookFriendRoom = async () => {
    try {
      const friendasse = await lookFriendRoom();
      if (friendasse === null || friendasse === undefined) {
        console.log('a');
      } else {
        setFriend(friendasse.friend);
      }
    } catch (error) {
      console.error('Error fetching friend room:', error);
    }
  };

  const deleteFriendId = useDeleteFriendId();
  //フレンド削除
  const DeleteFriendId = async (del_friend: string) => {
    await deleteFriendId(del_friend);
  };

  const lookFriend = useLookFriend();
  //フレンドの情報を見る
  const Friend_info = async (friend: string) => {
    setIsModalOpen(true);
    const friend_info = await lookFriend(friend);
    assert(friend_info, 'friendなし');
    setFriend_birth(friend_info.birth);
    setFriend_messe(friend_info.comment);
  };

  const createDM = useCreateDM();
  //DM作成
  const createdDM = async (partnerId: string) => {
    const DMRoom = await createDM(partnerId);
    assert(DMRoom, 'DMRoomなし');
    //他の機能追加する予定
  };

  const searchDM = useSearchDM();
  //DM探す
  const searchedDM = async (partnerId: string | undefined | null) => {
    const DMRoom = await searchDM(partnerId);
    assert(DMRoom, 'DMRoomなし');
    //他の機能追加する予定
  };

  const contextMenu = (
    <Menu>
      <Menu.Item>
        <Button>Button 1</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Button 2</Button>
      </Menu.Item>
    </Menu>
  );
  const [contextMenuVisible1, setContextMenuVisible1] = useState(false);
  const [contextMenuPosition1, setContextMenuPosition1] = useState({ x: 0, y: 0 });

  //右クリックで編集削除
  const handleContextMenu4 = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    messageId: string
  ) => {
    e.preventDefault();
    setContextMenuVisible1(true);
    setContextMenuPosition1({ x: e.clientX, y: e.clientY });
    setSelectedMsg(messageId);
  };

  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState('');

  const saveEditedMessage = (messageId: string) => {
    console.log(messageId);
    setEditMode(false);
  };

  const enterEditMode = () => {
    setEditMode(true);
    setEditedMessage(message);
  };

  const exitEditMode = () => {
    setEditMode(false);
    setEditedMessage('');
  };

  const [message1, setMessage1] = useState('');
  const webSocketRef = useRef<WebSocket>();



  const [inputText, setInputText] = useState<string>('');


  const submit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const value = inputText;
      console.log(value)
      // InputComment 関数を呼び出してコメントを取得し、エラーがあれば 'コメントなし' を返す
      const InputComment = await inputComment(roomId_select, value);
      console.log(InputComment)
      assert(InputComment, 'コメントなし');
      if (user === null) return;
      const userName: string | undefined = user.displayName;

      if (userName !== undefined) {
        // userName が undefined でない場合のみ WebSocket で送信する
        webSocketRef.current?.send(value);
        webSocketRef.current?.send(userName);
      } else {
        console.error('ユーザー名が定義されていません');
      }
    },
    [inputComment, inputText, roomId_select, user]
  );



  useEffect(() => {
    createUserdata();
    Roomlist();
    LookMessage();
    Roomlist();
    LookFriendRoom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Roomlist, createUserdata, user]);

  return (
    <Layout hasSider>
      <div
        style={{
          width: '18%',
          height: '16%',
          background: backgroundColor,
          position: 'fixed',
        }}
      >
        <div className={styles.box1} onClick={showDrawer} />
        <Avatar
          style={{ backgroundColor: '#87d068', left: '3%', top: '5%', position: 'fixed' }}
          icon={<UserOutlined />}
        />
        <div style={{ top: 800 }} className="fuchidori">
          {user?.displayName}
        </div>
      </div>
      <Sider
        style={{
          overflow: 'auto',
          height: '600vh',
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

        >
          <Menu.Item icon={<UserOutlined />} onClick={showFriendListDrawer}>
            Navigation One
          </Menu.Item>
        </Menu>
      </Sider>
      <Space direction="vertical">
        <Space>
          <Button type="primary" onClick={showDrawer1}>
            Open
          </Button>
          <Drawer
            title="Basic Drawer"
            placement={placement}
            closable={false}
            onClose={onClose1}
            open={open3}
            key={placement}
          >
            {friend.map((friendName, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '10px' }}>Friend: {friendName}</p>
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={() => Friendauth(friendName)}
                  size="small"
                />
                <Button type="primary" onClick={() => Friend_info(friendName)}>
                  Open Modal
                </Button>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk2}
                  onCancel={handleCancel2}
                >
                  <Button type="primary" onClick={() => createdDM(friendName)}>
                    DM作成
                  </Button>
                  <p>{friend_messe}</p>
                  <p>{friend_birth}</p>
                  <p>Some contents...</p>
                </Modal>
              </div>
            ))}
          </Drawer>
        </Space>
      </Space>
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
        width={'18%'}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items} //room選び
          onSelect={({ key }) => Lookroom(key)}
          style={{ width: '100%' }}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200, width: 700 }}>
        <Header
          style={{ padding: 0, background: colorBgContainer, marginLeft: 120, width: 1200 }}
        />
        <Content style={{ margin: '50px 120px 0', overflow: 'initial' }}>
          <div
            style={{ padding: 24, textAlign: 'center', background: colorBgContainer, width: 1200 }}
          >
            {messages
              .sort((a, b) => a.sent_at - b.sent_at)
              // eslint-disable-next-line complexity
              .map((msg, index) => (
                <div
                  key={msg.id2}
                  onContextMenu={(e) => {
                    handleContextMenu4(e, msg.id2);
                  }}
                >
                  {index !== 0 && <Divider orientation="left" plain />}

                  {contextMenuVisible1 && (
                    <div
                      style={{
                        position: 'absolute',
                        background: 'white',
                        boxShadow: '1px 1px 5px rgb(0 0 0 / 20%)',
                        padding: '5px',
                        zIndex: 999,
                      }}
                    >
                      <button onClick={enterEditMode}>Edit</button>
                      <button onClick={() => deleteMsg(msg.id2)}>Delete</button>
                      {editMode ? (
                        <>
                          <textarea
                            value={editedMessage}
                            onChange={(e) => setEditedMessage(e.target.value)}
                          />
                          <div className={styles.content}>{msg.contentmess}</div>
                          <div>
                            <button onClick={() => saveEditedMessage(msg.id2)}>保存</button>
                            <button onClick={exitEditMode}>キャンセル</button>
                          </div>
                        </>
                      ) : (
                        <div className={styles.content}>{msg.contentmess}</div>
                      )}
                    </div>
                  )}

                  <div
                    className={`${styles.commentBubble} ${msg.sender_Id === myId ? styles.myMessage : styles.otherMessage
                      }`}
                  >
                    <div className={styles.username}>{msg.username}</div>
                    <div className={styles.content}>{msg.contentmess}</div>
                  </div>
                </div>
              ))}
          </div>
        </Content>
      </Layout>
      <div style={{ position: 'relative' }}>
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

        <form onSubmit={submit}>
          <h1 style={{ position: 'fixed', width: 600, height: 20, top: 750, right: 800 }}>{JSON.stringify(message)}</h1>
          <input style={{ position: 'fixed', width: 600, height: 20, top: 750, right: 800 }} value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <button style={{ position: 'fixed', top: 750, right: 800 }} >送信</button>
        </form>
        <br />
        <br />
      </div>
      <FloatButton icon={<SearchOutlined />} type="primary" style={{ top: 800, left: 75 }} />
      <Popconfirm
        title={
          <Input
            value={roomId2}
            onChange={(e) => setRoomId2(e.target.value)}
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
          style={{ position: 'fixed', top: 750, right: 100 }}
          type="primary"
          onClick={submit}
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
