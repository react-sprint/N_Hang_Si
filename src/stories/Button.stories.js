import React from 'react';
import Button from '@/components/commons/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button />;
export const DefaultWhite = () => <Button color="white" />;
export const DefaultOrange = () => <Button color="orange" />;
export const DefaultBlack = () => <Button color="black" />;

export const RoundDefault = () => <Button shape="round" />;
export const RoundWhite = () => <Button shape="round" color="white" />;
export const RoundOrange = () => <Button shape="round" color="orange" />;
export const RoundBlack = () => <Button shape="round" color="black" />;

export const SquareDefault = () => <Button shape="square" />;
export const SquareWhite = () => <Button shape="square" color="white" />;
export const SquareOrange = () => <Button shape="square" color="orange" />;
export const SquareBlack = () => <Button shape="square" color="black" />;

export const DefaultTwoButton = () => (
  <div className="flex-center-center">
    <Button />
    <Button />
  </div>
);
export const DefaultThreeButton = () => (
  <div className="flex-center-center">
    <Button />
    <Button />
    <Button />
  </div>
);
