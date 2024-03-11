import {AppRouter} from './providers/router/AppRouter';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import {Navbar} from 'src/widgets/src';
import '@utils/i18n'

const Component = ()=>{
  const {t} = useTranslation();
  return (<div>
    {t('testExample')}
    </div>)
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