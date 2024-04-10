import {App} from '@app';
import { providersConfig } from '@app';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalFonts from './fonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const {StoreProvider} = providersConfig.storeProvider
root.render(
  <StrictMode>
    <GlobalFonts />
    <StoreProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StoreProvider>
    
  </StrictMode>
);