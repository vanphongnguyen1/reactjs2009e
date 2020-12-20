import React, { useState } from 'react';
import Form from './components/Form';


const  App = () => {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      { isShow && <Form/> }
      <button onClick={() => setIsShow(!isShow)}>Click me!</button>
    </div>
    
  );
}

export default App;
