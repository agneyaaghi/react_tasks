import React, { useState } from "react";
import './Calculator.css';
const Calculator = () => {
  const[data,setData]=useState('');
  const handleClick=(value)=>{
     setData((input)=>input+value);
  };
  const clear = () => {
    setData(""); 
  };
  const calculate = () => {
    try {
      setData(eval(data).toString()); 
    } catch (error) {
      setData("Error"); 
    }
  };
return (
    <div className="maindiv">
      <input className="inp" type="text" value={data} readOnly id="res" />
    <div className="btn">
        <div className="div1 ">
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('1')}>1</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('2')}>2</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('3')}>3</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('+')}>+</button>
        </div><div className="div2">
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('4')}>4</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('5')}>5</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('6')}>6</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('-')}>-</button>
        </div><div className="div3">
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('7')}>7</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('8')}>8</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('9')}>9</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('*')}>*</button>
        </div><div className="div4">
        <button className=" p-7 border-4 border-x-gray-400" onClick={clear}>C</button>
        <button className=" p-7 border-4 border-x-gray-400"onClick={() => handleClick('0')}>0</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={()=>handleClick('0')}>.</button>
        <button className=" p-7 border-4 border-x-gray-400" onClick={() => handleClick('/')}>/</button>
        </div><div className="div5">
        <button className=" px-32 pb-7 border-x-gray-400"onClick={calculate}>=</button></div>
      </div>
    </div>
  );
};
export default Calculator;
