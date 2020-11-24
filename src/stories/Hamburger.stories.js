import React from 'react';
import Hamburger from '@/components/elements/nav/Hamburger';

export default {
  title: 'Hamburger',
  component: Hamburger,
};

export const Default = () => <Hamburger />;
export const TrueState = () => <Hamburger state />;
