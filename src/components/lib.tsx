import React from 'react';
import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${props => props.marginBottom + 'rem'};
  > * {
    //考虑其后续子元素自身会存在margin-top/bottom的情况, 那么我们需要将后续子元素的这两个元素置成0，并定义最高优先级
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${props =>
      typeof props.gap === 'number'
        ? props.gap + 'rem'
        : props.gap
        ? '2rem'
        : undefined};
  }
`;
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading = () => (
  //页面加载图案
  <FullPage>
    <Spin size="large" />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <Typography.Text type="danger">{error?.message}</Typography.Text>
  </FullPage>
);
