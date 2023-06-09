import React from 'react';
import { useState } from 'react';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';
import { Button, Card, Divider, Typography } from 'antd';
import styled from '@emotion/styled';
import logo from 'assets/logo.svg';
import left from 'assets/left.svg';
import right from 'assets/right.svg';
import { Helmet } from 'react-helmet';
import { useDocumentTitle } from 'utils';

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useDocumentTitle('请登录或注册以继续')
  return (
    <Container>
      {/* <Helmet>
        <title>请登录或注册以继续</title>
        配置标题
      </Helmet> */}
      <Header />
      <Background />
      {/* <Button onClick={()=>{throw new Error('点击抛出一个异常')}}>抛出异常</Button> */}
      <ShadowCard>
        <Title> {isRegister ? '请注册' : '请登录'}</Title>
        {error ? (
          <Typography.Text type="danger">{error.message}</Typography.Text>
        ) : null}
        {isRegister ? (
          <RegisterScreen onError={setError} />
        ) : (
          <LoginScreen onError={setError} />
        )}
        <Divider />
        <Button type={'link'} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}{' '}
        </Button>
      </ShadowCard>
    </Container>
  );
};

// styled后面用.接的只能是传统的html自身元素 如果是需要接antd的元素那么就用括号的形式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed; //attachment属性表示图片随着鼠标滑动产生的效果 是否会一起滑动
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover; //cover平铺
  background-image: url(${left}), url(${right});
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
export const LongButton = styled(Button)`
  width: 100%;
`;
