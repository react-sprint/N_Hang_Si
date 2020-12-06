import React from 'react';
import ResultBackground from '@/components/layouts/ResultBackground';

export default {
  title: 'ResultBackground',
  component: ResultBackground,
};

export const Default = () => {
  return (
    <>
      <div className="flex-colomn">
        <ResultBackground />;
      </div>
    </>
  );
};
