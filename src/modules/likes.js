const ONLIKE = 'likes/ONLIKE';
const OFFLIKE = 'likes/OFFLIKE';

export const onLike = id => ({ type: ONLIKE, id });
export const offLike = id => ({ type: OFFLIKE, id });

const initialState = JSON.parse(localStorage.getItem('likes') || '[]');

export default function likes(state = initialState, action) {
  switch (action.type) {
    case ONLIKE: {
      const dummy1 = [...state, action.id];
      const dummy2 = new Set([...dummy1]);
      localStorage.setItem('likes', JSON.stringify([...dummy2]));
      return [...dummy2];
    }
    case OFFLIKE: {
      const dummy = [...state];
      const idx = dummy.indexOf(action.id);
      if (idx > -1) dummy.splice(idx, 1);
      localStorage.setItem('likes', JSON.stringify([...dummy]));
      return [...dummy];
    }
    default:
      return state;
  }
}
