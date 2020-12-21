import React, { useEffect } from 'react';
import classNames from 'classnames';
import '@/assets/scss/commons/Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '@/modules/status';

const Modal = () => {
  const dispatch = useDispatch();
  const { modalStatus, modalText } = useSelector(state => ({
    modalStatus: state.status.modalStatus,
    modalText: state.status.modalText,
  }));

  useEffect(() => {
    if (modalStatus === true) {
      const countModalTime = setTimeout(() => {
        dispatch(modalClose());
      }, 1000);
      return () => {
        clearTimeout(countModalTime);
      };
    }
    return false;
  }, [modalStatus]);
  return (
    <div className={classNames('modal-container', modalStatus ? 'active' : '')}>
      <div className={classNames('modal')}>
        <p className="modal--text">{modalText}</p>
      </div>
    </div>
  );
};

export default Modal;
