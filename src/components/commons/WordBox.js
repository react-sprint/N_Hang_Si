import React from 'react';
import classNames from 'classnames';
import '@/assets/scss/commons/WordBox.scss';

const WordBox = ({ topic, text, color }) => {
  return (
    <div className="wordbox">
      <p className={classNames('wordbox-title', color)}>
        <span>{topic.charAt(0)}</span>
      </p>
      <p className="wordbox-body">
        <span>{text}</span>
      </p>
    </div>
  );
};

WordBox.defaultProps = {
  topic: '순',
  text: '위하여, 사랑의 그들의 인간은 유소년에게서 위하여서. 그',
  color: 'default',
};

export default WordBox;
