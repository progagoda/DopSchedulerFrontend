import '@utils/i18n'

import { ConfigProvider, Layout, Typography } from '@utils/ui';
import {Header,Shell} from '@widgets';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import {AppRouter, darkTheme} from './providers';

const Component = ()=>{
  const {t} = useTranslation();
  
return (<Typography>
  {t('testExample')}
</Typography>)
}
export const App = () => {

return (
  <BrowserRouter>
    <ConfigProvider
    theme={darkTheme} 
  >
      <Suspense fallback="Loading...">
        <Header/>
        <Layout style={{ minHeight: '100vh' }}>
          <Shell/>
          <Layout>
            <Component/>
          </Layout>
        </Layout>
        <AppRouter />
      </Suspense>
    </ConfigProvider>
  </BrowserRouter>
);
}

export default App;