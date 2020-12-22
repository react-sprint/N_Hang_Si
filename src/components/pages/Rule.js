import React from 'react';
import '@/assets/scss/pages/Rule.scss';
import { useHistory } from 'react-router-dom';
import Button from '@/components/commons/Button';
import WordBox from '@/components/commons/WordBox';

const Rule = () => {
  const history = useHistory();
  const reDirectHome = () => {
    history.push('/');
  };
  const reDirectPrepare = () => {
    history.push('/prepare');
  };
  return (
    <div className="rule">
      <div className="rule--title">
        <h2>
          <span className="en">N</span>행시
        </h2>
        <p>
          N개의 음절을 가진 랜덤한 주제어를 드립니다. <br />
          재치있는 문장을 만들어
          <span className="point"> 랭커</span>에 도전하세요!
        </p>
      </div>
      <div className="rule--desc">
        <WordBox
          topic="1"
          text="게임 시작버튼을 누르고, 원하는 게임 옵션을 선택해주세요."
          color="orange"
        />
        <WordBox
          topic="2"
          text="입력창을 클릭하고 n행시 주제어에 맞게 문장을 만듭니다."
          color="orange"
        />
        <WordBox
          topic="3"
          text="모든 입력을 마치면, 제출하기 버튼을 누릅니다."
          color="orange"
        />
        <WordBox
          topic="4"
          text="마음에 드는 N행시 짓기에 성공 했다면 결과페이지에서 랭킹을 등록합니다."
          color="orange"
        />
      </div>
      <div className="rule--button button--bottom button--container button--container__shrink">
        <Button contents="홈으로" color="black" hook={reDirectHome} />
        <Button contents="게임 시작" color="orange" hook={reDirectPrepare} />
      </div>
    </div>
  );
};

export default Rule;
