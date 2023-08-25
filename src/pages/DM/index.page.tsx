import type { MenuProps } from "antd";
import { Button } from "antd";
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
const App: React.FC = () => {
  const [friend, setFriend] = useState<string[]>([]);
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
  return (
    <Button
      icon={<SendOutlined />}
      style={{ position: 'fixed', top: 750, right: 300 }}
      type="primary"
    />
  )
}

export default App;