const MODALCLOSE = 'status/MODALCLOSE';
const MODALOPEN = 'status/MODALOPEN';

export const modalClose = () => ({ type: MODALCLOSE });
export const modalOpen = data => ({ type: MODALOPEN, data });

const initialState = {
  modalStatus: false,
  modalText: '',
};

export default function statusManagement(state = initialState, action) {
  switch (action.type) {
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
