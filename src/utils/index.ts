import { useEffect, useState } from 'react';

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === '';

// let a: object
// a = {name: 'jack'}
// a = () => {
// }
// a = new RegExp('')
//
// let b: { [key: string]: unknown }
// b = {name: 'Jack'}
// b = () => {}
// 在一个函数里，改变传入的对象本身是不好的
// 由于函数也会是object类型 解构的时候会返回空对象 所以下面对object的定义要写详细一点 不能直接写成object
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    //但是如果value一直变化的话 那么setTimeout会一直被清理 那么setDebouncedValue一直不会触发 直到最后才会触发
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
