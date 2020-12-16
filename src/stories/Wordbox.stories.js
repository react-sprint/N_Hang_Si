import React from 'react';
import WordBox from '@/components/commons/WordBox';

export default {
  title: 'WordBox',
  component: WordBox,
  argTypes: {
    topic: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: ['default', 'orange', 'blue', 'red'],
      },
    },
  },
};

export const Default = ({ topic, text, color }) => (
  <WordBox topic={topic} text={text} color={color} />
);
