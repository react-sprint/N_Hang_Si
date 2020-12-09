import React from 'react';
import '@/assets/scss/elements/ingame/TopicCard.scss';

function TopicCard({ topic, wordNow, pageIndex }) {
  return (
    <div className="slider__box--card">
      <div className="title">
        {wordNow}
        <div className="title--count">
          <span>{pageIndex + 1}</span>/{topic.length}
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
