import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      if (input === '') {
        setResult('Error');
        return;
      }

      // Checking for division by zero
      if (input.includes('0/0')) {
        setResult('NaN');
        return;
      }
      if (input.includes('1/0')) {
        setResult('Infinity');
        return;
      }

      // Using eval to calculate the result
      const calcResult = eval(input);
      setResult(calcResult);
    } catch (e) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    
    <div>
         
          <h1> React Calculator</h1>
          <input type="text" value={input} readOnly />
          <div>{result} </div>
          
          
              <button onClick={() => handleClick('7')}>7</button>
              <button onClick={() => handleClick('8')}>8</button>
              <button onClick={() => handleClick('9')}>9</button>
              <button onClick={() => handleClick('+')}>+</button>
              <br />
              <button onClick={() => handleClick('4')}>4</button>
              <button onClick={() => handleClick('5')}>5</button>
              <button onClick={() => handleClick('6')}>6</button>
              <button onClick={() => handleClick('-')}>-</button>
              <br />
              <button onClick={() => handleClick('1')}>1</button>
              <button onClick={() => handleClick('2')}>2</button>
              <button onClick={() => handleClick('3')}>3</button>
              <button onClick={() => handleClick('*')}>*</button>
              <br />
              <button onClick={handleClear}>C</button>
              <button onClick={() => handleClick('0')}>0</button>
              {/* <button onClick={() => handleClick('.')}>.</button> */}
              <button onClick={() => handleCalculate()}>=</button>
              <button onClick={() => handleClick('/')}>/</button>

              {/* <button onClick={handleClear}>C</button> */}
              {/* </div> */}

              {/* <div className="result"> */}
              
          </div>
    // </div>
  );
};

export default Calculator;