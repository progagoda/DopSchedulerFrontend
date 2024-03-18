import '@utils/i18n'

import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from 'src/widgets/src';

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
        <Navbar/>
        <Component/>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;