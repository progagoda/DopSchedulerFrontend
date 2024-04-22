import {Flex, Spinner } from '@shared/ui';
import {Header} from '@widgets';
import { Suspense, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { System } from './components/System';

const Loading = () => (
  <Flex flex={1} justify='center' align='center' style={{height:'100vh'}}>
    <Spinner size='large'/>
  </Flex>
  )

export const App = () => {
  const [isLightTheme, setLightTheme] = useState(false);
  const switchTheme = useCallback(()=>setLightTheme(!isLightTheme),[isLightTheme])
  
return (
  <ThemeProvider theme={{mode: isLightTheme ? 'light': 'dark'}}>
    <Suspense fallback={<Loading/>}
    >
      <Header switchTheme={switchTheme}/>
      <System/>
    </Suspense>
  </ThemeProvider>
)
}
export default App;

