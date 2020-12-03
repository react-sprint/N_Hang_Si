import React from 'react';
import WordBox from '@/components/commons/WordBox';

export default {
  title: 'WordBox',
  component: WordBox,
};

export const Default = () => <WordBox />;
export const InValue = () => <WordBox topic="단" text="테스트를 위한 값" />;
