import React, { ReactNode } from 'react';
type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// https://github.com/bvaughn/react-error-boundary
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{
    fallbackRender: FallbackRender;
  }>,//第一个是props类型的定义，第二个是state类型的定义，这两个参数都不是必须的，没有时可以省略
  { error: Error | null }
  //React.PropsWithChildren就类似以下两行
  //   < children: ReactNode;
  //   fallbackRender: FallbackRender;>
> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
