import React from 'react';
import ResultBackground from '@/components/layouts/result/ResultBackground';
import TextWithArrow from '@/components/commons/TextWithArrow';
import WordBox from '@/components/commons/WordBox';
import Button from '@/components/commons/Button';
import '@/assets/scss/pages/Result.scss';
import NHangSiAPI from '@/utils/api';
import { useHistory } from 'react-router-dom';

const Result = ({ location }) => {
  const history = useHistory();
  const { success } = location.state[0];
  const { list, topic, useTime, level, nickname } = location.state[0];

  if (success === true) {
    // const { list, topic, useTime, level, nickname } = location.state[0];
    const submitResult = async () => {
      const levelCode = () => {
        if (level === '지렁이') {
          return 'E';
        }
        if (level === '일반인') {
          return 'N';
        }
        if (level === '박명수') {
          return 'H';
        }
        return null;
      };
      await NHangSiAPI.post('register/', {
        nickname,
        level: levelCode(),
        word: topic,
        list_text: list,
        time: useTime,
        time_out: 60,
      });
      history.push('/rank');
    };
    return (
      <>
        <TextWithArrow text={`${nickname}님의 결과!`} />
        <ResultBackground
          success
          topic={topic}
          useTime={useTime}
          level={level}
          nickname={nickname}
        />
        {topic.split('').map((word, index) => {
          return (
            <WordBox key={word} topic={word} text={list[index]} color="blue" />
          );
        })}
        <div>
          <Button
            contents="다시하기"
            hook={() => {
              history.push('/');
            }}
          />
          <Button contents="등록하기" color="orange" hook={submitResult} />
        </div>
      </>
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
