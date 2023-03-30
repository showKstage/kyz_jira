import React from 'react';
import { useState } from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';
import { useDebounce, useDocumentTitle } from 'utils';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProjects } from 'utils/project';
import { useUsers } from './../../utils/user';
import { Helmet } from 'react-helmet';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoding] = useState(false);
  // const [error, setError] = useState<null | Error>(null);
  // const [list, setList] = useState([]);
  const debouncedParam = useDebounce(param, 2000);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();

  //以上两个初始化都直接通过fetch请求得到的
  // useEffect(() => {
  //   run(client('projects', { data: cleanObject(debouncedParam) }));
  //   // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
  //   //   async response => {
  //   //     if (response.ok) {
  //   //       setList(await response.json());
  //   //     }
  //   //   }
  //   // );
  // }, [debouncedParam]); //当debouncedParam变化的时候执行这个函数  useDebounce封装了节流函数 那么debouncedParam只会返回最后一次值 又因为这个useEffect在debouncedParam变化才会更新 这样他只会捕捉到最后一次更新的行为

  // useMount(() => {
  //   client('users').then(setUsers);
  //   // fetch(`${apiUrl}/users`).then(async response => {
  //   //   if (response.ok) {
  //   //     setUsers(await response.json());
  //   //   }
  //   // });
  // }); //自定义useMount这个hook 使得避免每次都在这里加这个空数组
  useDocumentTitle('项目列表');
  return (
    <Container>
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <h1>项目列表</h1>
      <SearchPanel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      ></List>
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
