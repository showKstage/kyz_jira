import React from 'react';
import { useAuth } from 'context/auth-context';
import { useState } from 'react';
import { ProjectListScreen } from 'screens/project-list';
import styled from '@emotion/styled';
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>LOGO</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Nav>nav</Nav>
      <Main>
        <ProjectListScreen />
      </Main>
      <Aside></Aside>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem; //上6rem 中1fr(看着办 100vh - 12rem) 下6rem
  grid-template-columns: 20rem 1fr 20rem; //左20rem 中1fr(看着办 总宽度 - 40rem) 右20rem
  grid-template-areas://排列顺序

    'header header header'
    'nav main aside'
    'footer footer footer';
  height: 100vh;
  /* grid-gap: 10rem;//表示里面每一块之间的距离是多少 */
`;
// const PageHeader = styled.header`
//   height: 6rem;
//   background-color: green;
// `;
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;
const Nav = styled.nav`
  grid-area: nav;
`;
const Aside = styled.aside`
  grid-area: aside;
`;
const Footer = styled.footer`
  grid-area: footer;
`;
