const INITIALFETCH = 'rank/INITIALFETCH';
const FETCH = 'rank/FETCH';
const ERROR = 'rank/ERROR';

export const initialFetch = data => ({ type: INITIALFETCH, data });
export const fetchList = data => ({ type: FETCH, data });
export const errorState = () => ({ type: ERROR });

const initialState = {
  page: 0,
  ranklist: [],
  lastlist: [''],
};

export default function rank(state = initialState, action) {
  switch (action.type) {
    case INITIALFETCH:
      return {
        page: state.page + 1,
        ranklist: [...action.data],
        lastlist: [...action.data],
      };
    case FETCH:
      return {
        page: state.page + 1,
        ranklist: [...state.ranklist, ...action.data],
        lastlist: [...action.data],
      };
    case ERROR:
      return [];
    default:
      return state;
  }
}
