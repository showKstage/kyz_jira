/** @jsx jsx */
//指定编译器
import { jsx } from '@emotion/react';
import { Form, Input, Select } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[]; //users是User类型的数组 比如user[0]就包含一个有id name email title organization
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form style={{ marginBottom: '2rem' }} layout={'inline'}>
      <Form.Item>
        {/*setParam(Object.assign({}, param, {name:evt.target.value}))*/}
        <Input
          placeholder={'项目名'}
          type="text"
          value={param.name}
          onChange={evt =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <Form.Item>
          <Select
            value={param.personId}
            onChange={value =>
              setParam({
                ...param,
                personId: value,
              })
            }
          >
            <Select.Option value={''}>负责人</Select.Option>
            {users.map(user => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};
