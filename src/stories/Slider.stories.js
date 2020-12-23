import React, { useEffect, useState } from 'react';
import Slider from '@/components/layouts/ingame/Slider';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    topic: {
      control: 'text',
      defaultValue: '순두부',
    },
  },
};

export const Default = ({ topic }) => {
  const [length, setLength] = useState(topic.length);
  const [indexNow, setIndexNow] = useState(0);
  const rangeStyle = {
    width: '100%',
  };
  useEffect(() => {
    setLength(topic.length);
  }, [topic]);
  return (
    <>
      <Slider topic={topic} indexNow={indexNow} />
      <input
        style={rangeStyle}
        type="range"
        min="0"
        max={length - 1}
        value={indexNow}
        onChange={e => setIndexNow(e.target.value)}
      />
    </>
  );
};
