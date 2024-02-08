import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import type { TRouterConfig } from '@utils/types';
/* eslint-disable-next-line */
export interface ShellProps {}

const StyledShell = styled.div`
  color: pink;
`;
const mapMenu = (routerConfig: TRouterConfig) => {
  return routerConfig;
};
export function Shell(props: ShellProps) {
  return (
    <StyledShell>
      <h1>Welcome to Shell!</h1>
      <Link to="/main">Go to main</Link>
    </StyledShell>
  );
}

export default Shell;
