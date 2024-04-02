import {App} from '@app';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import GlobalFonts from './fonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalFonts />
    <App/>
  </StrictMode>
);