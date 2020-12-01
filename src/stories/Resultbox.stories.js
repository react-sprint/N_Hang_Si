import React from 'react';
import Resultbox from '@/components/commons/Resultbox';

export default {
  title: 'Resultbox',
  component: Resultbox,
};

export const Default = () => (
  <div className="flex-colomn">
    <h2>Resultbox</h2>
    <div className="flex-row-center">
      <Resultbox title="주제어" text="7자까지 쓸거요" color="white" />
      <Resultbox title="소요시간" text="00:00" color="black" />
      <Resultbox title="난이도" text="지렁이" color="gray" />
    </div>
  </div>
);
