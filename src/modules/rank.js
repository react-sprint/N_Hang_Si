const FETCH = 'rank/FETCH';
const ERROR = 'rank/ERROR';

export const fetchList = data => ({ type: FETCH, data });
export const errorState = () => ({ type: ERROR });

export default function rank(state = [], action) {
  switch (action.type) {
    case FETCH:
      return state.concat(action.data);
    case ERROR:
      return [];
    default:
      return state;
  }
}
