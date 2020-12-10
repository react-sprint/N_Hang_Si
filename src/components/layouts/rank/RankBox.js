import React, { useState } from 'react';
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
  isLike,
  hook,
}) => {
  const [likeNum, setLikeNum] = useState(like);
  const checkLike = toggleLike => {
    if (toggleLike) {
      hook.onLike(id);
      setLikeNum(likeNum + 1);
    }
    if (!toggleLike) {
      hook.offLike(id);
      setLikeNum(likeNum - 1);
    }
  };
  return (
    <div className="rankbox">
      <RankInfo
        nickname={nickname}
        timeOut={timeOut}
        time={time}
        level={level}
        like={likeNum}
        isLike={isLike}
        ranking={ranking}
        hook={checkLike}
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
  isLike: false,
  hook: () => {},
};

export default RankBox;
