import React from 'react';
import ResultBackground from '@/components/layouts/result/ResultBackground';
import TextWithArrow from '@/components/commons/TextWithArrow';
import WordBox from '@/components/commons/WordBox';
import Button from '@/components/commons/Button';
import '@/assets/scss/pages/Result.scss';
import NHangSiAPI from '@/utils/api';
import levelCode from '@/utils/function/levelCode';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Result = () => {
  const history = useHistory();
  const location = useLocation();
  const { success } = location.state;
  const { list, topic } = location.state;

  const { nickname, level, time } = useSelector(state => ({
    nickname: state.game.nickname,
    level: state.game.level,
    time: state.game.time,
  }));

  if (success === true) {
    const submitResult = async () => {
      await NHangSiAPI.post('register/', {
        nickname,
        level: levelCode(level),
        word: topic,
        list_text: list,
        time,
        time_out: 60,
      });
      history.push('/rank', { newItem: true });
    };
    return (
      <div className="result">
        <div className="result--title">
          <TextWithArrow text={`${nickname}님의 기록!`} />
        </div>
        <ResultBackground success topic={topic} useTime={time} level={level} />
        <div className="result--title">
          <TextWithArrow text={`${nickname}결과`} />
        </div>
        {topic.split('').map((word, index) => {
          return (
            <WordBox key={word} topic={word} text={list[index]} color="blue" />
          );
        })}
        <div>
          <Button
            contents="다시하기"
            hook={() => {
              history.push('/prepare');
            }}
          />
          <Button contents="등록하기" color="orange" hook={submitResult} />
        </div>
      </div>
    );
  }

  return (
    <div className="result">
      <TextWithArrow text="시간 초과입니다" />
      <ResultBackground success={false} />
      <div>
        <Button
          contents="메인화면"
          color="black"
          hook={() => {
            history.push('/');
          }}
        />
        <Button
          contents="다시 도전하기"
          color="orange"
          hook={() => {
            history.push('/ingame', [topic]);
          }}
        />
      </div>
    </div>
  );
};

export default Result;
