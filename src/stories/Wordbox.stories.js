import React from 'react';
import Wordbox from '@/components/commons/Wordbox';

export default {
  title: 'Wordbox',
  component: Wordbox,
};

export const Default = () => <Wordbox />;
export const InValue = () => <Wordbox topic="단" text="테스트를 위한 값" />;
