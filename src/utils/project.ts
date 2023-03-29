import { useEffect } from 'react';
import { Project } from 'screens/project-list/list';
import { cleanObject } from 'utils';
import { useHttp } from './http';
import { useAsync } from './use-async';

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();
  useEffect(() => {
    // TODO 这里 还要修正一下run(client('projects', { data: cleanObject(param) }));
    run(client('projects', { data: param }));
  }, [param]);
  return result;
};
