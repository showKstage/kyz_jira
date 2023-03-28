import { Table } from 'antd';
import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ users, list }: ListProps) => {
  //pagination是否需要分页
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '负责人',
          render(value, project) {
            return (
              <span>
                {users.find(user => user.id === project.personId)?.name ||
                  '未知'}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>名称</th>
//           <th>负责人</th>
//         </tr>
//       </thead>
//       <tbody>
//         {list.map(project => (
//           <tr key={project.id}>
//             <td>{project.name}</td>
//             <td>
//               {users.find(user => user.id === project.personId)?.name || '未知'}
//             </td>
//             {/* 这里需要用可选链 */}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
