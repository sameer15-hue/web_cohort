// If we declare the timer variable outside the function Doubt then
// i) There is no extra re-render at start
// ii) The timer is not getting initialized at every render

// Is there any downside to this approach?

// Below is the code
import { useState } from 'react';

let timer = 0;

function Doubt() {
  const [currentCount,setCurrentCount] = useState(0);
  console.log('Doubt');
  function startClock(){
    timer = setInterval(function(){
      setCurrentCount(s=>s+1);
    },1000);
  }

  function stopClock(){
    console.log('stop');
    clearInterval(timer);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default Doubt;