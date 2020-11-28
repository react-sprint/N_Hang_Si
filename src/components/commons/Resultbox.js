import React from 'react';
import '@/assets/scss/commons/Resultbox.scss';

const ResultBox = () => {
  return (
    <>
      <ul className="resultbox-container">
        <li>
          <div className="resultbox resultbox-topic">
            <span className="resultbox-title">주제어</span>
            <span className="resultbox-body">7자까지 쓸게요</span>
          </div>
        </li>
        <li>
          <div className="resultbox resultbox-timer">
            <span className="resultbox-title">소요시간</span>
            <span className="resultbox-body">00:00</span>
          </div>
        </li>
        <li>
          <div className="resultbox resultbox-level">
            <span className="resultbox-title">난이도</span>
            <span className="resultbox-body">지렁이</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ResultBox;
