import React from 'react';
import '@/assets/scss/commons/WordBox.scss';

const WordBox = ({ topic, text }) => {
  return (
    <div className="wordbox">
      <p className="wordbox-title">
        <span>{topic}</span>
      </p>
      <p className="wordbox-body">{text}</p>
    </div>
  );
};

WordBox.defaultProps = {
  topic: '순',
  text: '위하여, 사랑의 그들의 인간은 유소년에게서 위하여서. 그',
};

export default WordBox;
