import { useState } from 'react';
import NHangSiAPI from '@/utils/api';

export const useLikes = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('likes') || '[]'),
  );
  return {
    onLike: id => {
      const dummy = [...new Set([...state, id])];
      localStorage.setItem('likes', JSON.stringify([...dummy]));
      NHangSiAPI.put(`like/${id}/increase/`);
      setState(dummy);
    },
    offLike: id => {
      const dummy = [...state];
      const idx = dummy.indexOf(id);
      if (idx > -1) dummy.splice(idx, 1);
      localStorage.setItem('likes', JSON.stringify([...dummy]));
      NHangSiAPI.put(`like/${id}/decrease/`);
      setState(dummy);
    },
    getLikes: state,
  };
};

export default useLikes;
