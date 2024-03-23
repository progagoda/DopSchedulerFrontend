import '@utils/i18n'

import { Layout } from '@utils/ui';
import {Header,Shell} from '@widgets';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import {AppRouter} from './providers/router/AppRouter';

const Component = ()=>{
  const {t} = useTranslation();
  return (<div>
    {t('testExample')}
  </div>)
}
export function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;