import React, { useState, useEffect } from 'react';
import '@/assets/scss/pages/Ingame.scss';
import { useHistory } from 'react-router-dom';
import Slider from '@/components/layouts/ingame/Slider';
import Button from '@/components/commons/Button';
import TextWithArrow from '@/components/commons/TextWithArrow';

const Ingame = ({ topic }) => {
  const history = useHistory();
  const [indexNow, setIndexNow] = useState(0);
  const [dummy, setDummy] = useState('');
  const [list, setList] = useState([]);
  const [success, setSucceess] = useState(false);

  // topic이 없으면 리다이렉트
  // if (topic === 'test') {
  //   history.push('/');
  // }

  const matchData = {
    list,
    topic,
    useTime: 30,
    level: '지렁이',
    nickname: '뱅구석호랭쓰',
    success,
  };

  const dummyOnChange = data => {
    setDummy(data);
  };

  const listPush = () => {
    if (!dummy) {
      alert('내용을 입력해주세요');
      return;
    }
    if (topic.charAt(indexNow) !== dummy.charAt(0)) {
      alert('n행시 규칙에 맞게 입력해주세요');
      return;
    }
    setIndexNow(indexNow + 1);
    setList([...list, dummy]);
    setDummy('');
  };

  const submitPush = () => {
    if (!dummy) {
      alert('내용을 입력해주세요');
      return;
    }
    if (topic.charAt(indexNow) !== dummy.charAt(0)) {
      alert('n행시 규칙에 맞게 입력해주세요');
      return;
    }
    listPush();
    setSucceess(true);
  };

  useEffect(() => {
    if (success === true) {
      history.push('/result', matchData);
    }
  }, [success]);

  return (
    <div className="ingame">
      <TextWithArrow text={`${topic}(으)로 ${topic.length}행시!`} />
      <Slider
        topic={topic}
        indexNow={indexNow}
        hook={dummyOnChange}
        listPush={listPush}
        submitPush={submitPush}
      />
      {indexNow === topic.length - 1 ? (
        <Button contents="제출하기" color="orange" hook={submitPush} />
      ) : (
        <Button contents="다음으로" hook={listPush} />
      )}
    </div>
  );
};

Ingame.defaultProps = {
  topic: 'test',
};
export default Ingame;
