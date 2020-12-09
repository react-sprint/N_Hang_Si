import React from 'react';
import '@/assets/scss/layouts/result/ResultBackground.scss';
import classNames from 'classnames';
import ResultBox from '@/components/commons/ResultBox';

const ResultBackground = ({ success }) => {
  return (
    <>
      {success ? (
        <div
          className={classNames(
            'result-bar',
            success === true ? 'success' : '',
          )}
        >
          <h2 className="result-bar--title">SUCCESS</h2>
          <div className="result-bar--desc">
            <ResultBox color="white" />
            <ResultBox color="black" />
            <ResultBox color="gray" />
          </div>
        </div>
      ) : (
        <div
          className={classNames(
            'result-bar',
            success === false ? 'failed' : '',
          )}
        >
          <h2 className="result-bar--title">FAILED</h2>
          <div className="result-bar--desc">
            <p className="main">시간초과입니다</p>
            <p className="">안타깝네요 😭</p>
          </div>
        </div>
      )}
    </>
  );
};

ResultBackground.defaultProps = {
  success: false,
};

export default ResultBackground;
