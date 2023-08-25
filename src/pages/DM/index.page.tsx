import type { MenuProps } from "antd";
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import type MenuItem from "antd/es/menu/MenuItem";
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
import Sider from "antd/es/layout/Sider";
import { useLookFriendRoom } from "src/utils/friend";
import { useSearchDM } from "src/utils/DM";
import assert from "assert";
import { useLookMessage } from "src/utils/message";
import { useAtom } from "jotai";
import { userAtom } from "src/atoms/user";
import type { MessageModel } from "$/commonTypesWithClient/models";

const App: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [showFriendList, setShowFriendList] = useState(false);
  const [friend, setFriend] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
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

  const searchDM = useSearchDM();
  //DM探す
  const searchedDM = async (partnerId: string | undefined | null) => {
    const DMRoom = await searchDM(partnerId);
    assert(DMRoom, 'DMRoomなし');
    //他の機能追加する予定
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

  return (
    <Layout hasSider>
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
          style={{ width: 300 }}
        >
          <Menu.Item icon={<UserOutlined />} onClick={showFriendListDrawer}>
            Navigation One
          </Menu.Item>
        </Menu>
      </Sider>
      <Button
        icon={<SendOutlined />}
        style={{ position: 'fixed', top: 750, right: 300 }}
        type="primary"
      />
    </Layout>
  )
}

export default App;