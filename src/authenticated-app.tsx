import React from 'react';
import { useAuth } from 'context/auth-context';
import { useState } from 'react';
import { ProjectListScreen } from 'screens/project-list';
import styled from '@emotion/styled';
import { Row } from 'components/lib';
import { ReactComponent as SoftwareLogo } from './assets/software-logo.svg';
import { Dropdown, Menu } from 'antd';
/**
 * grid 和 flex 各自的应用场景
 * 1. 要考虑，是一维布局 还是 二维布局
 * 一般来说，一维布局用flex，二维布局用grid
 * 2. 是从内容出发还是从布局出发？
 * 从内容出发：你先有一组内容(数量一般不固定),然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间
 * 从布局出发：先规划网格(数量一般比较固定)，然后再把元素往里填充
 * 从内容出发，用flex
 * 从布局出发，用grid
 *
 */
export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={'logout'}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={e => e.preventDefault()}>Hi, {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  /* grid-template-columns: 20rem 1fr 20rem; //左20rem 中1fr(看着办 总宽度 - 40rem) 右20rem */
  /* grid-template-areas://排列顺序

    'header header header'
    'nav main aside'
    'footer footer footer'; */
  height: 100vh;
  /* grid-gap: 10rem;//表示里面每一块之间的距离是多少 */
`;
const Main = styled.main`
  /* grid-area: main;
  height: calc(100vh - 6rem); */
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  /* grid-area: header; */
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
