import React from 'react';
import Button from '@/components/commons/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    contents: {
      control: 'text',
    },
    shape: {
      control: {
        type: 'select',
        options: ['default', 'round', 'square'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['orange', 'white', 'black'],
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['defualt', 'toggle'],
      },
    },
  },
};

export const Default = ({ contents, shape, color, type }) => (
  <Button contents={contents} shape={shape} color={color} type={type} />
);
