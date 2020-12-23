const ISLOADING = 'status/ISLOADING';
const SUCCESS = 'status/SUCCESS';
const ERROR = 'status/ERROR';
const MODALCLOSE = 'status/MODALCLOSE';
const MODALOPEN = 'status/MODALOPEN';

export const isLoading = () => ({ type: ISLOADING });
export const isSuccess = () => ({ type: SUCCESS });
export const isError = e => ({
  type: ERROR,
  errorMessage: e,
});
export const modalClose = () => ({ type: MODALCLOSE });
export const modalOpen = data => ({ type: MODALOPEN, data });

const initialState = {
  loading: false,
  errorMessage: null,
  modalStatus: false,
  modalText: '모달입니다',
};

export default function statusManagement(state = initialState, action) {
  switch (action.type) {
    case ISLOADING:
      return {
        loading: true,
        errorMessage: null,
      };
    case SUCCESS:
      return {
        loading: false,
        errorMessage: null,
      };
    case ERROR:
      return {
        loading: false,
        errorMessage: action.errorMessage,
      };
    case MODALOPEN:
      return {
        modalStatus: true,
        modalText: action.data,
      };
    case MODALCLOSE:
      return {
        modalStatus: false,
      };
    default:
      return state;
  }
}
