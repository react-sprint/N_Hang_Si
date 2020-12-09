import React from 'react';
import ResultBackground from '@/components/layouts/result/ResultBackground';

export default {
  title: 'ResultBackground',
  component: ResultBackground,
  argTypes: {
    success: {
      control: 'boolean',
    },
  },
};

export const Default = ({ success }) => {
  return <ResultBackground success={success} />;
};
