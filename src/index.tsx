import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadDevTools } from 'jira-dev-tool';
import 'antd/dist/reset.css'; //放在jira-dev后面保证后续自定义样式可以覆盖jira-dev自身的样式
import { AppProviders } from 'context';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
loadDevTools(() =>
  root.render(
    <React.StrictMode>
      <AppProviders>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'blue',
            },
          }}
        >
          <App />
        </ConfigProvider>
      </AppProviders>
    </React.StrictMode>
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
