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
  },
};

export const Default = ({ topic, text }) => (
  <WordBox topic={topic} text={text} />
);
