import React from 'react';
import { useState, useEffect } from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';
import qs from 'qs';
import { cleanObject, useDebounce, useMount } from 'utils';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param, 2000);
  //以上两个初始化都直接通过fetch请求得到的
  const client = useHttp();
  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList);
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
    //   async response => {
    //     if (response.ok) {
    //       setList(await response.json());
    //     }
    //   }
    // );
  }, [debouncedParam]); //当debouncedParam变化的时候执行这个函数  useDebounce封装了节流函数 那么debouncedParam只会返回最后一次值 又因为这个useEffect在debouncedParam变化才会更新 这样他只会捕捉到最后一次更新的行为

  useMount(() => {
    client('users').then(setUsers);
    // fetch(`${apiUrl}/users`).then(async response => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  }); //自定义useMount这个hook 使得避免每次都在这里加这个空数组

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </Container>
  );
};

const Container = styled.div`
  padding:3.2rem;
`