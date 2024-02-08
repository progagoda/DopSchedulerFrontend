import { AppRouter } from '@app/providers/router';
import {Navbar} from '@widgets/Navbar'
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Component = ()=>{
  const {t} = useTranslation();
  return (<div>{t('Hello')}</div>)
}
export function App() {
  return (
  <Suspense fallback="Loading...">
    <Navbar/>
    <Component/>
    <AppRouter />
  </Suspense>

  );
}

export default App;
