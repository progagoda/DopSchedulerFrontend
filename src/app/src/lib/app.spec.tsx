import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { StoreProvider } from './providers/StoreProvider';


describe('App', () => {
  const initialState = {
    user: {
      authData: {
        id:'1',
        username: 'admin',
        token: 'testToken',
      },
    },
    loginFormApi: undefined,
    calendarApi: undefined,
    lessonCardApi: undefined,
    lessonsListApi: undefined,
    day: {},
    }
    const renderApp = ()=>(
      <BrowserRouter>
        <StoreProvider initialState={initialState}>
          <App />
        </StoreProvider>
      </BrowserRouter>
    )
  it('should render successfully', () => {
    const { baseElement } = render(renderApp());
    expect(baseElement).toBeTruthy();
  });
});
