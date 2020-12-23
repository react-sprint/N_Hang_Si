const INITIALFETCH = 'rank/INITIALFETCH';
const FETCH = 'rank/FETCH';
const ERROR = 'rank/ERROR';

export const initialFetch = data => ({ type: INITIALFETCH, data });
export const fetchList = data => ({ type: FETCH, data });
export const errorState = () => ({ type: ERROR });

const initialState = {
  page: 0,
  rankList: [],
  lastList: [''],
};

export default function rank(state = initialState, action) {
  switch (action.type) {
    case INITIALFETCH:
      return {
        page: 1,
        rankList: [...action.data],
        lastList: [...action.data],
      };
    case FETCH:
      return {
        page: state.page + 1,
        rankList: [...state.rankList, ...action.data],
        lastList: [...action.data],
      };
    case ERROR:
      return [];
    default:
      return state;
  }
}
