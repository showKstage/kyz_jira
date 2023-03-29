import { useEffect } from 'react';
import { Project } from 'screens/project-list/list';
import { cleanObject } from 'utils';
import { useHttp } from './http';
import { useAsync } from './use-async';

export const useProjects = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  //以上两个初始化都直接通过fetch请求得到的
  const client = useHttp();
  useEffect(() => {
    run(client('projects', { data: cleanObject(param) }));
  }, [param]);
  return result;
};
