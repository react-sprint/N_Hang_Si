import React, { useState, useEffect } from 'react';
import '@/assets/scss/pages/Ingame.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modalOpen } from '@/modules/status';
import Slider from '@/components/layouts/ingame/Slider';
import Button from '@/components/commons/Button';
import TextWithArrow from '@/components/commons/TextWithArrow';

const Ingame = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { topic } = location.state;
  const [indexNow, setIndexNow] = useState(0);
  const [dummy, setDummy] = useState('');
  const [list, setList] = useState([]);
  const [success, setSucceess] = useState(false);

  const matchData = {
    list,
    topic,
    success,
  };

  const dummyOnChange = data => {
    setDummy(data);
  };

  const listPush = () => {
    if (!dummy) {
      dispatch(modalOpen('내용을 입력해주세요'));
      return;
    }
    if (topic.charAt(indexNow) !== dummy.charAt(0)) {
      dispatch(modalOpen('n행시 규칙에 맞게 입력해주세요'));
      return;
    }
    setIndexNow(indexNow + 1);
    setList([...list, dummy]);
    setDummy('');
  };

  const submitPush = () => {
    if (!dummy) {
      dispatch(modalOpen('내용을 입력해주세요'));
      return;
    }
    if (topic.charAt(indexNow) !== dummy.charAt(0)) {
      dispatch(modalOpen('n행시 규칙에 맞게 입력해주세요'));
      return;
    }
    listPush();
    setSucceess(true);
  };

  const enterEvent = () => {
    if (indexNow === topic.length - 1) submitPush();
    else listPush();
  };

  useEffect(() => {
    if (success === true) {
      history.replace('/result', matchData);
    }
  }, [success]);

  return (
    <div className="ingame">
      <TextWithArrow text={`${topic}(으)로 ${topic.length}행시!`} />
      <Slider
        topic={topic}
        indexNow={indexNow}
        hook={dummyOnChange}
        enterEvent={enterEvent}
      />
      <div className="ingame--botton">
        {indexNow === topic.length - 1 ? (
          <Button contents="제출하기" color="orange" hook={submitPush} />
        ) : (
          <Button contents="다음으로" hook={listPush} />
        )}
      </div>
    </div>
  );
};

export default Ingame;
