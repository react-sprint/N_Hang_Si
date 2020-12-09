import React from 'react';
import RankInfo from '@/components/elements/rank/RankInfo';
import WordBox from '@/components/commons/WordBox';

const RankBox = ({
  id,
  nickname,
  level,
  word,
  resultText,
  time,
  timeOut,
  like,
  ranking,
}) => {
  return (
    <div className="rankbox">
      <RankInfo
        id={id}
        nickname={nickname}
        timeOut={timeOut}
        time={time}
        level={level}
        like={like}
        isLike={false}
        ranking={ranking}
      />
      {word.split('').map((topic, index) => (
        <WordBox key={topic} topic={topic} text={resultText[index]} />
      ))}
      <hr />
    </div>
  );
};

RankBox.defaultProps = {
  id: 0,
  nickname: '팔공산',
  level: '지렁이',
  word: '대구',
  resultText: ['대짜 돼요?', '구이도 돼요?'],
  time: 50,
  timeOut: 120,
  like: 0,
  ranking: 1,
};

export default RankBox;
