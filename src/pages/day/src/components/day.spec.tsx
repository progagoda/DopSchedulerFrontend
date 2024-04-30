import {providersConfig} from '@app';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import {Day} from './day';
const {storeProvider} = providersConfig
const {StoreProvider} = storeProvider
describe('CreateLesson', () => {
  it('should render successfully', () => {
    const initialState = {
      user: {
        authData: {
          fullname: 'test',
          id:'1',
          username: 'admin',
          token: 'testToken',
        },
      },
      loginFormApi: undefined,
      calendarApi: undefined,
      lessonCardApi: undefined,
      day: {},
      lessonsListApi: undefined,
      createLessonApi: undefined,
      }
    const { baseElement } = render(
      <StoreProvider initialState={initialState}>
        <BrowserRouter>
          <Day />
        </BrowserRouter>
      </StoreProvider>);
    expect(baseElement).toBeTruthy();
  });
});
