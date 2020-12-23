import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';

export default {
  title: 'TextWithArrow',
  component: TextWithArrow,
  argTypes: {
    text: {
      control: 'text',
    },
  },
};

export const Deafult = ({ text }) => <TextWithArrow text={text} />;
