import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';

// const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //阻止表单跳转的默认行为
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value; //把他当成HTMLInputElement类型
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? (
        <div>
          登录成功, 用户名: {user?.name} token:{user.token}
        </div>
      ) : null}
      <div>
        <label htmlFor="username">用户名</label>
        {/* 这个htmlfor和id匹配 那么点击用户名也可以获取到框的焦点 */}
        <input type="text" name="" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" name="" id={'password'} />
      </div>
      <button type={'submit'}>登录</button>
    </form>
  );
};
