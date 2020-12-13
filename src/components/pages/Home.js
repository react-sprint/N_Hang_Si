import React from 'react';
import '@/assets/scss/pages/Home.scss';
import Button from '@/components/commons/Button';
import { useHistory, Link } from 'react-router-dom';
import bannerImage from '@/assets/images/banner.png';

const Home = () => {
  const history = useHistory();
  const reDirect = () => {
    history.push('/gameprepare');
  };
  return (
    <div className="home">
      <div className="home--banner">
        <img src={bannerImage} alt="배너 이미지" />
      </div>
      <div className="home--button">
        <Button contents="시작하기" color="orange" hook={reDirect} />
        <Link to="/rule">게임 방법</Link>
      </div>
    </div>
  );
};

export default Home;
