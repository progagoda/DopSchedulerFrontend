import { getUserStateSelector, userActions } from '@entities';
import { Auth } from '@pages/auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {consts, i18nConfig, routerConfig} from '@shared/configs'
import {Flex, Layout, Spinner } from '@shared/ui';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Header,Shell} from '@widgets';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {AppRouter} from './providers';



export const System = ()=>(
  <Layout style={{ height: '92vh' }}>
    <Shell/>
    <Layout>
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </Layout>
  </Layout>
)
export const App = () => {
  const [isLightTheme, setLightTheme] = useState(false);
  const savedUser = localStorage.getItem(consts.localStorageConst.USER_LOCAL_STORAGE_KEY)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const currentUser = useSelector(getUserStateSelector);
  

  useEffect(()=>{
    if(!currentUser){
      if(savedUser){
        dispatch(userActions.login(JSON.parse(savedUser)))
        navigate(routerConfig.RouterPath.main)
      }
      else{
      navigate('/auth')
      }
    }
    else{
      navigate(routerConfig.RouterPath.main)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, savedUser])

return (
  <ThemeProvider theme={{mode: isLightTheme ? 'light': 'dark'}}>
    <Suspense fallback={
      <Flex flex={1} justify='center' align='center' style={{height:'100vh'}}>
        <Spinner size='large'/>
      </Flex>}
    >
      <Header switchTheme={()=> setLightTheme(!isLightTheme)}/>
      <Routes>
        <Route path={'/auth'} element={<Auth/>} />
      </Routes>
      <System/>
    </Suspense>
  </ThemeProvider>
  )
}
export default App;

