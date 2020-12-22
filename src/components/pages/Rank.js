import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, initialFetch } from '@/modules/rank';
import { isLoading, isSuccess, isError } from '@/modules/status';
import { useLocation } from 'react-router-dom';
import useLikes from '@/utils/hooks/useLikes';
import useFetchApi from '@/utils/hooks/useFetchApi';

import RankBox from '@/components/layouts/rank/RankBox';

import '@/assets/scss/pages/Rank.scss';

const Rank = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const likes = useLikes();
  const fetchApi = useFetchApi(likes);
  const { page, rankList, lastList } = useSelector(state => ({
    page: state.rank.page,
    rankList: state.rank.rankList,
    lastList: state.rank.lastList,
  }));
  const [isFetch, setIsFetch] = useState(true);
  const fetch = async pageIndex => {
    try {
      setIsFetch(false);
      if (lastList.length !== 0) {
        const res = await fetchApi.callapi(pageIndex);
        if (pageIndex === 0) {
          dispatch(initialFetch(res));
        } else {
          dispatch(fetchList(res));
        }
      }
      setIsFetch(true);
    } catch (e) {
      dispatch(isError(e));
    }
  };
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && isFetch === true) {
      fetch(page);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  useEffect(() => {
    dispatch(isLoading());
    if (rankList.length === 0 || Boolean(location.state)) {
      fetch(0);
    }
    dispatch(isSuccess());
  }, [location]);

  return (
    <div className="rank">
      {rankList.map((item, index) => (
        <RankBox
          key={item.id}
          id={item.id}
          nickname={item.nickname}
          level={item.level}
          topic={item.word}
          resultText={item.result_text}
          time={item.time}
          timeOut={item.time_out}
          like={item.like}
          ranking={index + 1}
          isLike={item.isLike}
          hook={likes}
        />
      ))}
      {isFetch ? null : (
        <div className="showstate">
          <div className="loading">
            <p />
          </div>
        </div>
      )}
      {lastList.length === 0 ? (
        <div className="showstate">
          <p>마지막 N행시입니다.</p>
        </div>
      ) : null}
    </div>
  );
};

export default Rank;
