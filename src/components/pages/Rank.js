import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, initialFetch } from '@/modules/rank';
import { isLoading, isSuccess, isError } from '@/modules/status';
import { useLocation } from 'react-router-dom';
import useLikes from '@/utils/hooks/useLikes';
import useFetchApi from '@/utils/hooks/useFetchApi';

import RankBox from '@/components/layouts/rank/RankBox';
import LogoSvg from '@/assets/images/svg/LogoSvg';

import '@/assets/scss/pages/Rank.scss';

const Rank = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const likes = useLikes();
  const fetchApi = useFetchApi(likes);
  const { page, ranklist, lastlist } = useSelector(state => ({
    page: state.rank.page,
    ranklist: state.rank.ranklist,
    lastlist: state.rank.lastlist,
  }));
  const [isFetch, setIsFetch] = useState(true);
  const fetch = async () => {
    try {
      setIsFetch(false);
      if (lastlist.length !== 0) {
        const res = await fetchApi.callapi(page);
        if (page === 0) {
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
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && isFetch === true) {
      fetch();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  useEffect(() => {
    if (ranklist.length === 0) {
      dispatch(isLoading());
      fetch();
      dispatch(isSuccess());
    }
  }, [location]);

  return (
    <div className="rank">
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
      {isFetch ? null : (
        <div className="showstate">
          <LogoSvg />
        </div>
      )}
      {lastlist.length === 0 ? (
        <div className="showstate">
          <p>최신상태입니다</p>
        </div>
      ) : null}
    </div>
  );
};

export default Rank;
