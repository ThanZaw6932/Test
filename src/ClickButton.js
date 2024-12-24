
import { useState } from 'react';

function ClickButton() {
  const [message, setMessage] = useState('Hello!');

  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickButton;
