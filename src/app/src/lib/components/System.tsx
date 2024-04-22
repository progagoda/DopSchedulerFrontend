import { getUserStateSelector, userActions } from '@entities';
import { Auth } from '@pages/auth';
import {consts} from '@shared/configs'
import { Layout } from '@shared/ui';
import {Shell} from '@widgets';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from '../providers';

const { Content } = Layout;


export const System = ()=>{
  const dispatch = useDispatch();
  const currentUser = useSelector(getUserStateSelector);
  
  const savedUser = localStorage.getItem(consts.localStorageConst.USER_LOCAL_STORAGE_KEY)

  const [isAuth, setIsAuth] = useState(false);

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
  }, [currentUser, dispatch, isAuth, setIsAuth, savedUser])

  const renderMainContent = () => (
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

   return isAuth ? renderMainContent() : <Auth/>
   
}