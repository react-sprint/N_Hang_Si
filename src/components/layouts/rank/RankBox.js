import React, { useState } from 'react';
import RankInfo from '@/components/elements/rank/RankInfo';
import WordBox from '@/components/commons/WordBox';

const RankBox = ({
  id,
  nickname,
  level,
  topic,
  resultText,
  time,
  timeOut,
  like,
  ranking,
  isLike,
  hook,
}) => {
  const [likeNum, setLikeNum] = useState(like);
  const [liked, setLiked] = useState(isLike);
  const checkLike = toggleLike => {
    setLiked(toggleLike);
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
      {topic.split('').map((word, index) => (
        <WordBox
          key={word + String(index)}
          topic={word}
          text={resultText[index]}
          color={liked ? 'orange' : ''}
        />
      ))}
      <hr />
    </div>
  );
};

RankBox.defaultProps = {
  id: 0,
  nickname: '팔공산',
  level: '지렁이',
  topic: '대구',
  resultText: ['대짜 돼요?', '구이도 돼요?'],
  time: 50,
  timeOut: 120,
  like: 0,
  ranking: 1,
  isLike: false,
  hook: () => {},
};

export default RankBox;
