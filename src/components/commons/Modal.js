import React, { useEffect } from 'react';
import classNames from 'classnames';
import '@/assets/scss/commons/Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '@/modules/status';

const ResultBox = ({ text }) => {
  const dispatch = useDispatch();
  const { modalStatus } = useSelector(state => ({
    modalStatus: state.status.modalStatus,
  }));

  const close = () => {
    dispatch(modalClose());
  };

  useEffect(() => {
    const countModalTime = () =>
      setInterval(() => {
        close();
      }, 2000);
    countModalTime();
  }, []);
  return (
    <div className={classNames('modal-container', modalStatus ? 'active' : '')}>
      <div className={classNames('modal')}>
        <p className="modal--text">{text}</p>
      </div>
    </div>
  );
};

export default ResultBox;

ResultBox.defaultProps = {
  text: '모달 내용입니다',
};
