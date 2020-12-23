import React from 'react';
import Input from '@/components/commons/Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
};

export const Default = ({ placeholder }) => <Input placeholder={placeholder} />;
