import {i18nConfig} from '@shared/configs';
import { Preview } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

export const globalTypes = {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        default: i18nConfig.i18n.default,
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
        <ThemeProvider theme={{mode: 'dark'}}>
          <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18nConfig.i18n.default}>
              <BrowserRouter>
                {story()}
              </BrowserRouter>
            </I18nextProvider>
          </Suspense>
        </ThemeProvider>
      ),
    ],
  };

  export default preview;


