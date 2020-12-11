import React from 'react';
import ResultBox from '@/components/commons/ResultBox';

export default {
  title: 'ResultBox',
  component: ResultBox,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'black', 'gray'],
      },
    },
    title: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
  },
};

export const Default = ({ title, text, color }) => (
  <ResultBox title={title} text={text} color={color} />
);
