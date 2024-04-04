import {Auth} from '@pages/auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {i18nConfig} from '@shared/configs'
import {Header,Shell} from '@widgets';
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import {Layout, Typography } from 'src/shared/ui/src';
import { ThemeProvider } from 'styled-components';

import {AppRouter} from './providers';
import { StoreProvider } from './providers/StoreProvider';

const Component = ()=>{
  const {t} = useTranslation();
  
return (<Typography >
  {t('testExample')}
</Typography>)
}
export const App = () => {
const [isAuth, setIsAuth] = useState(true);
const [isLightTheme, setLightTheme] = useState(false);

return (
  <StoreProvider>
    <ThemeProvider theme={{mode: isLightTheme ? 'light': 'dark'}}>
      <BrowserRouter>
        {isAuth ?
          <Suspense fallback="Loading...">
            <Header switchTheme={ ()=> setLightTheme(!isLightTheme)}/>
            <Layout style={{ height: '92vh' }}>
              <Shell/>
              <Layout>
                <Component/>
                <AppRouter />
              </Layout>
            </Layout>
          </Suspense>
      : <Auth setIsAuth={()=>setIsAuth(true)}/>}
      </BrowserRouter>
    </ThemeProvider>
  </StoreProvider>
);
}

export default App;