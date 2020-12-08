import React, { useState, useEffect } from 'react';
import '@/assets/scss/pages/Ingame.scss';
import { useHistory } from 'react-router-dom';
import Slider from '@/components/layouts/ingame/Slider';
import Button from '@/components/commons/Button';
import TextWithArrow from '@/components/commons/TextWithArrow';

const Ingame = ({ topic }) => {
  const history = useHistory();
  const [indexNow, SetIndexNow] = useState(0);
  const [dummy, SetDummy] = useState('');
  const [list, setList] = useState([]);
  const [success, setSucceess] = useState(false);

  const dummyOnChange = data => {
    SetDummy(data);
  };

  const listPush = () => {
    SetIndexNow(indexNow + 1);
    setList([...list, dummy]);
    SetDummy('');
  };

  const submitPush = () => {
    listPush();
    setSucceess(true);
  };

  useEffect(() => {
    if (success === true) {
      history.push('/result/success', [list]);
    }
  }, [success]);

  return (
    <div>
      <TextWithArrow text={`${topic}(으)로 ${topic.length}행시!`} />
      <Slider topic={topic} indexNow={indexNow} hook={dummyOnChange} />
      {indexNow === topic.length - 1 ? (
        <Button contents="제출하기" color="orange" hook={submitPush} />
      ) : (
        <Button contents="다음으로" hook={listPush} />
      )}
    </div>
  );
};

Ingame.defaultProps = {
  topic: '순두부',
};
export default Ingame;
