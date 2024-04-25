import { LoginForm } from '@features';
import { consts } from '@shared/configs';
import {Flex, Layout} from '@shared/ui';

import { StyledLogo } from './styles';
/* eslint-disable-next-line */
export interface AuthProps {
}

export function Auth(props: AuthProps) {
  return (
    <Layout style={{ minHeight: '92vh' }}>
      <Flex vertical flex = {1} justify='center' align='center' gap={'10px'}>
        <StyledLogo>{consts.globalConst.logoText}</StyledLogo>
        <LoginForm/>
      </Flex>
    </Layout>
  );
}

export default Auth;
