import React from 'react';

const COLOR = {
  white: '#ffffff',
  orange: '#f58220',
};

const LogoSvg = ({ type }) => {
  const color = COLOR[type];
  return (
    <svg
      width="26"
      height="21"
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M26 20.9884C26 20.994 25.9954 20.9978 25.9908 20.9978H19.0316H18.7403H17.6072C15.0459 20.9978 12.9705 18.8865 12.9705 16.2831V9.67373C12.9705 7.75842 11.4621 6.20029 9.58681 6.16279C7.6405 6.12342 6.06298 7.76779 6.06298 9.74686V20.9884C6.06298 20.994 6.05837 20.9978 6.05376 20.9978H0.00921986C0.00368794 20.9978 0 20.9931 0 20.9884V9.79467C0 4.25967 4.5122 -0.24033 9.95007 0.00810719C15.0035 0.238732 19.0307 4.47811 19.0307 9.67373V14.8619C19.0307 14.8675 19.0353 14.8712 19.0399 14.8712H25.9889C25.9945 14.8712 25.9982 14.8759 25.9982 14.8806V20.9884H26Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="26" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

LogoSvg.defaultProps = {
  type: 'orange',
};

export default LogoSvg;
