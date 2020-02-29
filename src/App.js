import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);

  const increament2 = () => setCount(previounsCount => previounsCount + 1);
  const decreament2 = () => setCount(previounsCount => previounsCount + 2);

  const reset =() => setCount(0);
  const double = () =>  setCount(count * 2);
  const devide3 = () => {
    if(count % 3 == 0){
      return setCount(count / 3);
    }
  }


  return (
    <React.Fragment>
      <div>count: {count} </div>
      <button onClick={increament}>+1</button>
      <button onClick={decreament}>-1</button>
      <div>
        <button onClick={increament2}>+1</button>
        <button onClick={decreament2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>double</button>
        <button onClick={devide3}>３の倍数のときだけ３で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;
