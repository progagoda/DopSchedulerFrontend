import { Preview } from '@storybook/react';
// import { addDecorator } from '@storybook/react'; // <- or your storybook framework
import {i18n} from '@utils/i18n';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom'
// import { withThemes } from 'storybook-addon-themes/react';
import { ThemeProvider } from 'styled-components';

export const globalTypes = {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        default: i18n.default,
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
            <I18nextProvider i18n={i18n.default}>
              <BrowserRouter>
                {story()}
              </BrowserRouter>
            </I18nextProvider>
          </Suspense>
        </ThemeProvider>
      ),
    ],
  };
  export const parameters = {
    themes: {
      default: 'twitter',
      list: [
        { name: 'twitter', class: 'theme-twt', color: '#00aced' },
        { name: 'facebook', class: 'theme-fb', color: '#3b5998' }
      ],
    },
  }; // <- or your storybook framework

  export default preview;


