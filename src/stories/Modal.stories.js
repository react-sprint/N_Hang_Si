import React from 'react';
import Modal from '@/components/commons/Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    text: {
      control: 'text',
    },
  },
};

export const Default = ({ text }) => <Modal text={text} />;
