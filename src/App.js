import React from 'react';
// import Button from './components/commons/Button';
// import Wordbox from './components/commons/Wordbox';
import Resultbox from './components/commons/Resultbox';
// import Wordbox from './components/commons/Wordbox';

const App = () => {
  return (
    <div>
      <h1>Test</h1>
      {/* <Wordbox topic="하" text="하나둘셋" /> */}
      <Resultbox topic="주제어" text="7자까지 쓸게요" />
    </div>
  );
};

export default App;
