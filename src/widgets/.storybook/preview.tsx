import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';
import { Preview } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {i18n} from '@utils/i18n';
import { Suspense } from 'react';
export const globalTypes = {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Russian' },
        ],
        showName: true,
      },
    },
};

export const preview: Preview = {
    decorators: [
      (story) => (
        <Suspense fallback={<div>loading translations...</div>}>
          <I18nextProvider i18n={i18n.default}>
            <BrowserRouter>
              {story()}
            </BrowserRouter>
          </I18nextProvider>
        </Suspense>
      ),
    ],
  };
  
  export default preview;
