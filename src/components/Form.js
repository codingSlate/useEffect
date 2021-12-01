import './Form.css';
import React from 'react';
import { useState, useEffect } from 'react';

function Form() {
  const [inputNum, setInputNum] = useState(0);
  const [countNum, setCountNum] = useState('');
  // const countNum = useRef(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setInputNum(''); // reset value
  };

  const numChangeHandler = (e) => {
    setInputNum(e.target.value);
    // console.log("from numChangeHandler ", inputNum.length)
  };

  useEffect(() => {
    if (inputNum.length >= 0) {
      // console.log('inputNum.length > 0', inputNum.length);
      setCountNum((c) => (c = inputNum.length));
    } else {
      // console.log('should not be empty');
    }

    console.log('each stroke useEffect call ☹️');
  }, []);

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={submitHandler}>
        <label className="input" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          onChange={numChangeHandler}
          value={inputNum}
        />
       { countNum > 0 ?  <p>Length is : {countNum}</p> :  <p>Empty Length!!</p>}
        <input className="input" type="submit" />
      </form>
    </div>
  );
}
export default Form;
