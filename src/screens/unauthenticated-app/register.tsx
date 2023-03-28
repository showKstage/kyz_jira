import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';
import { Button, Form, Input } from 'antd';
import { LongButton } from '.';
// const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  const { register } = useAuth();
  //没引入antd之前的手写方式
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); //阻止表单跳转的默认行为
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value; //把他当成HTMLInputElement类型
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
  //   login({ username, password });
  // };
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder={'用户名'} type="text" id={'username'} />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder={'密码'} type="password" id={'password'} />
      </Form.Item>
      <LongButton htmlType={'submit'} type={'primary'}>
        登录
      </LongButton>
    </Form>
  );
};
