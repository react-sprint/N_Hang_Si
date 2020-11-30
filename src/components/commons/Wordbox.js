import React from 'react';
import '@/assets/scss/commons/Wordbox.scss';

const Wordbox = ({ topic, text }) => {
  return (
    <div className="wordbox">
      <p className="wordbox-title">
        <span>{topic}</span>
      </p>
      <p className="wordbox-body">{text}</p>
    </div>
  );
};

Wordbox.defaultProps = {
  topic: '순',
  text: '위하여, 사랑의 그들의 인간은 유소년에게서 위하여서. 그',
};

export default Wordbox;
