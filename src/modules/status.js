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
  errorMessage: null,
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
    default:
      return state;
  }
}
