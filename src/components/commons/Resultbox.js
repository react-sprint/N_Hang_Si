import React from 'react';
import classNames from 'classnames';
import '@/assets/scss/commons/Resultbox.scss';

const ResultBox = ({ title, text, color }) => {
  return (
    <div className={classNames('resultbox', color)}>
      <span>{title}</span>
      <span>{text}</span>
    </div>
  );
};

export default ResultBox;

ResultBox.defaultProps = {
  title: '주제어',
  text: '7자까지 쓸게요',
  color: 'black',
};
