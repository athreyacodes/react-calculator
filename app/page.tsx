'use client'
import { useState } from 'react'

export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'Clear'
  ];

  const handleClickInput = (key: any) => {
    handleInput(key);
  }

  const handleKeyboardInput = (key: any) => {
    handleInput(key);
  }

  const handleInput = (key: any) => {
    switch(key) {
      case '=': evaluate(); break;
      case 'Clear': clear(); break;
      default: editExpression(key);
    }
  }

  const editExpression = (key: any) => {
    setExpression((previousValue) => previousValue + key);
  }

  const evaluate = () => {
    try {
      const evalResult = eval(expression).toString();
      setResult(evalResult);
      setResult(evalResult);
    } catch(error) {
      setResult('Error');
      setExpression('');
    }
  }

  const clear = () => {
    setExpression('')
    setResult('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='m-3 p-3 text-4xl '>CALCULATOR</h1>
      <div className='card m-6 p-6 rounded shadow'>

        <input 
          type='text'
          className='w-full text-3xl card p-3 focus:outline-none'
          value={expression}
          readOnly
        />

        <input 
          type='text'
          className='w-full text-4xl font-bold card p-3 mt-3 focus:outline-none'
          value={result}
          readOnly
        />

        <div className='grid grid-cols-4 gap-2 mt-3'>
          {buttons.map(btn => (
            <button
              key={btn}
              onClick={() => handleClickInput(btn)}
              className='text-3xl bg-gray-200 hover:bg-gray-300 p-2 rounded'>
                {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
