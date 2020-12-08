import React from 'react';
import ResultBox from '@/components/commons/ResultBox';

export default {
  title: 'ResultBox',
  component: ResultBox,
};

export const Default = () => (
  <div className="flex-culomn">
    <h2>Resultbox</h2>
    <div className="flex-row-center">
      <ResultBox title="주제어" text="7자까지 쓸거요" color="white" />
      <ResultBox title="소요시간" text="00:00" color="black" />
      <ResultBox title="난이도" text="지렁이" color="gray" />
    </div>
  </div>
);
