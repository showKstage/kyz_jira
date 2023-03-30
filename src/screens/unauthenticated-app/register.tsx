import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';
import { Button, Form, Input } from 'antd';
import { LongButton } from '.';
// const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void; //这里就是相当于定义onError这个函数的类型
}) => {
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
  const handleSubmit = async ({
    cpassword, //把cpassword用解构单独释放出来
    ...values
  }: {
    //!这里需要用异步函数定义 因为register执行是异步的 那么trycatch执行的时候 register被调用之后 catch就会执行 此时捕捉不到异常信息 因为register还没有抛出异常出来 等抛出异常出来之后 catch已经结束了
    //!所以解决方式我们要配合async和await使用
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error('请确认两次输入的密码相同'));
      return;
    }
    try {
      await register(values);
    } catch (e: any) {
      //TODO
      onError(e);
    }
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
      <Form.Item
        name={'cpassword'}
        rules={[{ required: true, message: '请确认密码' }]}
      >
        <Input placeholder={'确认密码'} type="password" id={'cpassword'} />
      </Form.Item>
      <LongButton htmlType={'submit'} type={'primary'}>
        注册
      </LongButton>
    </Form>
  );
};
