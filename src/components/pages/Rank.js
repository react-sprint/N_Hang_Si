import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, initialFetch } from '@/modules/rank';
import { isLoading, isSuccess, isError } from '@/modules/status';
import { useLocation } from 'react-router-dom';
import useLikes from '@/utils/hooks/useLikes';
import useFetchApi from '@/utils/hooks/useFetchApi';

import RankBox from '@/components/layouts/rank/RankBox';

const Rank = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const likes = useLikes();
  const fetchApi = useFetchApi(likes);
  const { page, ranklist, loading, error } = useSelector(state => ({
    page: state.rank.page,
    ranklist: state.rank.ranklist,
    loading: state.status.loading,
    error: state.status.error,
  }));
  const fetch = async () => {
    try {
      dispatch(isLoading());
      const res = await fetchApi.callapi(page);
      if (page === 0) {
        dispatch(initialFetch(res));
      } else {
        dispatch(fetchList(res));
      }
      dispatch(isSuccess());
    } catch (e) {
      dispatch(isError(e));
    }
  };
  useEffect(() => {
    if (ranklist.length === 0) {
      fetch();
    }
  }, [location]);

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
