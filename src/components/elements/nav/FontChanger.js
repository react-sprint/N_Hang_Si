import React from 'react';
import '@/assets/scss/elements/nav/FontChanger.scss';

const FONTSIZE = {
  SMALL: '55%',
  MEDIUM: '62.5%',
  LARGE: '70%',
  XLARGE: '87.5%',
};

const FontChanger = () => {
  const htmlDefault = document.documentElement;
  const resizeFont = size => {
    htmlDefault.style.fontSize = FONTSIZE[size];
  };

  return (
    <>
      <div className="font__changer">
        <p>글씨 조정</p>
        <div className="changer__container">
          <button className="button" onClick={() => resizeFont(`SMALL`)}>
            S
          </button>
          <button className="button" onClick={() => resizeFont(`MEDIUM`)}>
            M
          </button>
          <button className="button" onClick={() => resizeFont(`LARGE`)}>
            L
          </button>
          <button className="button" onClick={() => resizeFont(`XLARGE`)}>
            XL
          </button>
        </div>
      </div>
    </>
  );
};

export default FontChanger;
