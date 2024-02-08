import { Layout, Menu } from 'antd';

const { Header } = Layout;
/* eslint-disable-next-line */
export interface NavbarProps {}

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export function Navbar(props: NavbarProps) {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  </Header>
  );
}

export default Navbar;
