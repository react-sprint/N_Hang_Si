import React from 'react';
import Button from '@/components/commons/Button';

export default {
  title: 'Button',
  component: Button,
};

export const DefultButton = () => (
  <div className="flex-colomn">
    <h2>Button</h2>
    <div className="flex-row-center">
      <Button contents="Default" />
      <Button contents="White" color="white" />
      <Button contents="Orange" color="orange" />
      <Button contents="Black" color="black" />
    </div>
    <h2>Toggle</h2>
    <div className="flex-row-center">
      <Button contents="Default" type="toggle" />
      <Button contents="White" type="toggle" color="white" />
      <Button contents="Orange" type="toggle" color="orange" />
      <Button contents="Black" type="toggle" color="black" />
    </div>
  </div>
);

export const RoundButton = () => (
  <div className="flex-colomn">
    <h2>Button</h2>
    <div className="flex-row-center">
      <Button contents="Default" shape="round" />
      <Button contents="White" color="white" shape="round" />
      <Button contents="Orange" color="orange" shape="round" />
      <Button contents="Black" color="black" shape="round" />
    </div>
    <h2>Toggle</h2>
    <div className="flex-row-center">
      <Button contents="Default" type="toggle" shape="round" />
      <Button contents="White" type="toggle" color="white" shape="round" />
      <Button contents="Orange" type="toggle" color="orange" shape="round" />
      <Button contents="Black" type="toggle" color="black" shape="round" />
    </div>
  </div>
);

export const SquareButton = () => (
  <div className="flex-colomn">
    <h2>Button</h2>
    <div className="flex-row-center">
      <Button contents="Default" shape="square" />
      <Button contents="White" color="white" shape="square" />
      <Button contents="Orange" color="orange" shape="square" />
      <Button contents="Black" color="black" shape="square" />
    </div>
    <h2>Toggle</h2>
    <div className="flex-row-center">
      <Button contents="Default" type="toggle" shape="square" />
      <Button contents="White" type="toggle" color="white" shape="square" />
      <Button contents="Orange" type="toggle" color="orange" shape="square" />
      <Button contents="Black" type="toggle" color="black" shape="square" />
    </div>
  </div>
);
