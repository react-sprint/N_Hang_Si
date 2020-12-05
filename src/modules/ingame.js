const CHANGETEXTVALUE = 'ingame/TEXTVALUE';
const NEXTSLIDER = 'ingame/NEXTSLIDER';

export const changeTextValue = data => ({
  type: CHANGETEXTVALUE,
  data,
});

export const nextSlider = () => ({
  type: NEXTSLIDER,
});

const initialState = {
  dummy: '',
  list: [],
  indexNow: 0,
};

export default function ingame(state = initialState, action) {
  switch (action.type) {
    case CHANGETEXTVALUE:
      return { ...state, dummy: action.data };
    case NEXTSLIDER:
      state.list.push(state.dummy);
      return { ...state, dummy: '', indexNow: state.indexNow + 1 };
    default:
      return state;
  }
}
