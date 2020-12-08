import React from 'react';
import Textarea from '@/components/commons/Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
};

export const Default = ({ placeholder }) => (
  <Textarea placeholder={placeholder} />
);
