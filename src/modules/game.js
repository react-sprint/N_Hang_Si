const GETPREPARE = 'game/GETPREPARE';

export const nextstep = (nickname, level, topicLength) => ({
  nickname,
  level,
  topicLength,
  type: GETPREPARE,
});

const initialState = {
  nickname: null,
  level: null,
  topicLength: null,
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case GETPREPARE:
      return {
        ...state,
        nickname: action.nickname,
        level: action.level,
        topicLength: action.topicLength,
      };
    default:
      return state;
  }
}
