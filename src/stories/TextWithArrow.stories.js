import React from 'react';
import TextWithArrow from '@/components/commons/TextWithArrow';

export default {
  title: 'TextWithArrow',
  component: TextWithArrow,
};

export const Deafult = () => <TextWithArrow />;
export const Text1 = () => (
  <TextWithArrow text="n행시 난이도를 선택 해 주세요" />
);
export const Text2 = () => <TextWithArrow text="글자 수를 선택 해 주세요" />;
export const Text3 = () => <TextWithArrow text="닉네임을 입력 해 주세요" />;
export const Text4 = () => <TextWithArrow text="순두부로 3행시!" />;
export const Text5 = () => <TextWithArrow text="시간 초과!" />;
export const Text6 = () => <TextWithArrow text="홍길동님의 기록" />;
export const Text7 = () => <TextWithArrow text="결과" />;
export const Text8 = () => <TextWithArrow text="명예의전당" />;
