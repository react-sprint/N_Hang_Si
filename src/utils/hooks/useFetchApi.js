import NHangSiAPI from '@/utils/api';

export const useFetchApi = likes => {
  const likeList = likes.getLikes;
  return {
    callapi: async (page = 0) => {
      const response = await NHangSiAPI.get('ranklist/', {
        params: {
          page,
        },
      }).then(res => {
        return res.data.map(rank => {
          return { ...rank, isLike: likeList.includes(rank.id) };
        });
      });
      return response;
    },
  };
};
export default useFetchApi;
