import React from 'react';
import '@/assets/scss/elements/ingame/TopicCard.scss';

function TopicCard({ topic, wordIndex, topicLength }) {
  return (
    <div className="slider__box--card">
      <div className="title">
        {topic}
        <div className="title--count">
          <span>{wordIndex + 1}</span>/{topicLength}
        </div>
      </div>
    </div>
  );
}

TopicCard.defaultProps = {
  topic: '순',
  wordIndex: 0,
};

export default TopicCard;
