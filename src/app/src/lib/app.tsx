import { getUserStateSelector, userActions } from '@entities';
import { Auth } from '@pages/auth';
import {consts} from '@shared/configs'
import {Flex, Layout, Spinner } from '@shared/ui';
import {Header, Shell} from '@widgets';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {AppRouter} from './providers';
const { Content } = Layout;


export const System = ()=>(
  <Layout style={{height: '92vh'}}>
    <Shell/>
    <Layout>
      <Content>
        <Suspense fallback="Loading...">
          <AppRouter />
        </Suspense>
      </Content>
    </Layout>
  </Layout>
)

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const currentUser = useSelector(getUserStateSelector);
  
  const savedUser = localStorage.getItem(consts.localStorageConst.USER_LOCAL_STORAGE_KEY)

  const [isAuth, setIsAuth] = useState(false);
  const [isLightTheme, setLightTheme] = useState(false);

  useEffect(()=>{
    if(!currentUser){
      if(savedUser){
        dispatch(userActions.login(JSON.parse(savedUser)))
        setIsAuth(true);  
      }  
      else {
        setIsAuth(false);
      }
    }
    else{
      setIsAuth(true);
    }
  }, [currentUser, dispatch, navigate, isAuth, setIsAuth, savedUser])

  return (
    <ThemeProvider theme={{mode: isLightTheme ? 'light': 'dark'}}>
      <Suspense fallback={
        <Flex flex={1} justify='center' align='center' style={{height:'100vh'}}>
          <Spinner size='large'/>
        </Flex>
      }
    >
        <Header switchTheme={()=> setLightTheme(!isLightTheme)}/>
        {isAuth ? <System/> : <Auth/>}
      </Suspense>
    </ThemeProvider>
)
}
export default App;

