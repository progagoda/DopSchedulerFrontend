import { Layout } from '@utils/ui';

import { LangSwitcher } from '../widgets';
/* eslint-disable-next-line */
export interface HeaderProps {}

const { Header: AntHeader } = Layout;
export function Header(props: HeaderProps) {
  return (
    <AntHeader style={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end" }} data-testid= 'header'>
      <LangSwitcher/>
    </AntHeader>
  );
}

export default Header;
