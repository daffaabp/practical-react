import React from 'react';

export default props => (
  <div>
  <p className="App-intro">{props.text}</p>
  <p className="App-intro">{props.text2}</p>
  <p className="App-intro">{props.myFunc(1, 2) }</p>
</div>
);

export const Body = () => (
  <div>
    <div>h1</div>
  </div>
);