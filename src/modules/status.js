const ISLOADING = 'status/ISLOADING';
const SUCCESS = 'status/SUCCESS';
const ERROR = 'status/ERROR';

export const isLoading = () => ({ type: ISLOADING });
export const isSuccess = () => ({ type: SUCCESS });
export const isError = e => ({
  type: ERROR,
  errorMessage: e,
});

const initialState = {
  loading: false,
  error: false,
  errorMessage: null,
};

export default function statusManagement(state = initialState, action) {
  switch (action.type) {
    case ISLOADING:
      return {
        loading: true,
        error: false,
        errorMessage: null,
      };
    case SUCCESS:
      return {
        loading: false,
        error: false,
        errorMessage: null,
      };
    case ERROR:
      return {
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}
