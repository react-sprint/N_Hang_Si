import React from 'react';
import Input from '@/components/commons/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => <Input />;
export const InValue = () => <Input data="테스트를 위한 값" />;
export const InPlaceholder = () => (
  <Input placeholder="테스트를 위해 값을 입력해주세요." />
);
export const TestText = () => (
  <Input
    data="Hello 안녕하세요 🙌 1234"
    placeholder="테스트를 위해 값을 입력해주세요."
  />
);
