import {userActions} from '@entities'
import { Button,Form,Input, Typography } from '@shared/ui';
import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '../../api';
import { loginActions } from '../../model/slice/loginSlice';
import { TLoginSchemaArgs } from '../../model/types';

export const LoginForm: React.FC = memo(() => {
  const {t} = useTranslation('translation', { keyPrefix: 'auth' }); 
  const [sendAuth, {data: userInfo, isError, isLoading}] = useLoginMutation()
  const dispatch = useDispatch();
  const [form] = Form.useForm<TLoginSchemaArgs>();
  
  const handleFinish = useCallback((form: TLoginSchemaArgs) =>{
    sendAuth(form)
    form.username && dispatch(loginActions.setUsername(form.username))
    form.password && dispatch(loginActions.setPassword(form.password))
    dispatch(loginActions.setRemember(true));
 }, [dispatch, sendAuth])

  useEffect(()=>{
    if (userInfo){
       dispatch(userActions.login(userInfo))
    }
  },[userInfo, dispatch])

return (
  <Form
    form={form}
    style={{width:350}}
    name="basic"
    requiredMark
    initialValues={{ remember: true }}
    onFinish={handleFinish}
    autoComplete="off"
  >
    {isError && <Typography textWarning>{t('messages.error')}</Typography>}
    <Form.Item<TLoginSchemaArgs>
      wrapperCol={{span: 25 }}
      name="username"
      rules={[{ required: true, message: t('messages.requiredUsername') }]}
    >
      <Input placeholder='Login'/>
    </Form.Item>

    <Form.Item<TLoginSchemaArgs>
      wrapperCol={{span: 25 }}
      name="password"
      rules={[{ required: true, message: t('messages.requiredPassword') }]}
    >
      <Input placeholder='Password'/>
    </Form.Item>

    <Form.Item wrapperCol={{offset: 9, span:25}}>
      <Button loading={isLoading }type="primary" htmlType="submit">
        {t('buttons.login')}
      </Button>
    </Form.Item>
  </Form>
    )
});