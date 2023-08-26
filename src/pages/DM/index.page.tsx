import type { MessageModel } from '$/commonTypesWithClient/models';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Divider, Layout, Menu, theme } from 'antd';
import assert from 'assert';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { useCreateDM, useSearchDM } from 'src/utils/DM';
import { useLookFriendRoom } from 'src/utils/friend';
import { useDeleteMsg, useInputComment, useLookMessage } from 'src/utils/message';
import styles from '../index.module.css';
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [showFriendList, setShowFriendList] = useState(false);
  const [friend, setFriend] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [myId, setmyId] = useState<string>('');
  const [roomId_select, setRoomId] = useState('');
  const [value, setValue] = useState('');
  const [selectedmsg, setSelectedMsg] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
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

  const items1: MenuProps['items'] = [
    getItem(
      'Friend',
      'grp',
      null,
      friend.map((friend) => getItem(friend, friend)),
      'group'
    ),
  ];

  const showFriendListDrawer = () => {
    setShowFriendList(true);
  };

  const lookFriendRoom = useLookFriendRoom();
  // フレンド一覧
  const LookFriendRoom = async () => {
    console.log("d90")
    try {
      const friendasse = await lookFriendRoom();
      console.log(friendasse)
      if (friendasse === null || friendasse === undefined) {
        console.log('a');
      } else {
        console.log(friendasse);
        setFriend(friendasse.friend);
      }
    } catch (error) {
      console.error('Error fetching friend room:', error);
    }
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

  // const lookMessage = useSearchDM();
  // //メッセージを映す
  // const search = async () => {
  //   if (!user) return;
  //   const userId = user.id;
  //   const userLooKmessage = await lookMessage(roomId_select);
  //   assert(userLooKmessage, 'Roomなし');

  //   setMessages(userLooKmessage);
  //   setmyId(userId);
  // };

  const inputComment = useInputComment();
  //メッセージ送信
  const inputcomment = async () => {
    console.log(value);
    console.log(roomId_select);
    const InputComment = await inputComment(roomId_select, value);
    assert(InputComment, 'コメントなし');
    // await LookMessage();
  };

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

  //ルーム選択
  const Lookroom = async (key: string) => {
    setRoomId(key);
    console.log(key);
    console.log(roomId_select);
    // await LookMessage();
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

  const deleteMsg = useDeleteMsg();
  //メッセージ削除

  useEffect(() => {
    // LookMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width={300}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          items={items1}
          onSelect={({ key }) => Lookroom(key)}
          style={{ width: 300 }}
        >
          <Menu.Item icon={<UserOutlined />} onClick={showFriendListDrawer}>
            Navigation One
          </Menu.Item>
        </Menu>
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
      <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: 750, right: 300 }}
        type="primary"
      />
      <Button type="primary" onClick={() => LookFriendRoom()}>
        DM作成
      </Button>
    </Layout>
  );
};

export default App;
