import React, { useEffect } from 'react';
import NHangSiAPI from '@/utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '@/modules/rank';
import { isLoading, isSuccess, isError } from '@/modules/status';
import useLikes from '@/utils/hooks/useLikes';

import RankBox from '@/components/layouts/rank/RankBox';

const Rank = () => {
  const dispatch = useDispatch();
  const { ranklist, loading, error } = useSelector(state => ({
    ranklist: state.rank,
    loading: state.status.loading,
    error: state.status.error,
  }));
  const likes = useLikes();
  const fetching = async () => {
    try {
      dispatch(isLoading());
      const response = await NHangSiAPI.get('ranklist/', {
        params: {
          page: 0,
        },
      }).then(res => {
        return res.data.map(rank => {
          return { ...rank, isLike: likes.getLikes.includes(rank.id) };
        });
      });
      dispatch(fetchList(response));
      dispatch(isSuccess());
    } catch (e) {
      dispatch(isError(e));
    }
  };
  useEffect(() => {
    fetching();
  }, []);

  if (loading) return <p>loading....</p>;
  if (error) return <p>error</p>;
  return (
    <div className="page">
      {ranklist.map((item, index) => (
        <RankBox
          key={item.id}
          id={item.id}
          nickname={item.nickname}
          level={item.level}
          word={item.word}
          resultText={item.result_text}
          time={item.time}
          timeOut={item.time_out}
          like={item.like}
          ranking={index + 1}
          isLike={item.isLike}
          hook={likes}
        />
      ))}
    </div>
  );
};

export default Rank;
