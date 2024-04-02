import {Button,Flex, Layout} from '@utils/ui';

import { StyledLogo } from './styles';
/* eslint-disable-next-line */
export interface AuthProps {
  setIsAuth: ()=>void;
}


export function Auth(props: AuthProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Flex vertical flex = {1} justify='center' align='center'>
        <StyledLogo>DOP SHEDULER</StyledLogo>
        <Button onClick={props.setIsAuth}>Login</Button>
      </Flex>
    </Layout>
  );
}

export default Auth;
