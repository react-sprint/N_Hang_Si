const GETPREPARE = 'game/GETPREPARE';
const TIMERECORD = 'game/TIMERECORD';

export const nextstep = (nickname, level, topicLength) => ({
  nickname,
  level,
  topicLength,
  type: GETPREPARE,
});

export const timeRecord = time => ({ time, type: TIMERECORD });

const initialState = {
  nickname: null,
  level: null,
  topicLength: null,
  timeout: null,
  time: null,
};

const levelValue = { 지렁이: 60, 일반인: 40, 박명수: 20 };

export default function game(state = initialState, action) {
  switch (action.type) {
    case GETPREPARE:
      return {
        ...state,
        nickname: action.nickname,
        level: action.level,
        topicLength: action.topicLength,
        timeout: Number(action.topicLength) * levelValue[action.level],
      };
    case TIMERECORD:
      return {
        ...state,
        time: state.timeout - action.time,
      };
    default:
      return state;
  }
}
