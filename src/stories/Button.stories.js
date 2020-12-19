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
    bold: {
      control: 'boolean',
    },
    type: {
      control: {
        type: 'radio',
        options: ['defualt', 'toggle'],
      },
    },
    active: {
      control: 'boolean',
    },
  },
};

export const Default = ({ contents, shape, color, type, active, bold }) => (
  <Button
    contents={contents}
    shape={shape}
    color={color}
    type={type}
    active={active}
    bold={bold}
  />
);
