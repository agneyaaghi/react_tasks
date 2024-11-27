import React, { useState } from 'react';

function Togglebtn() {
  const [Color, setColor] = useState("blue");

  const toggleclr = () => {
    setColor(Color==="blue" ? "green" : "blue");
  };

  return (
    <div>
      <div style={{height:"300px",width:"300px",backgroundColor: Color }}></div>
      <button onClick={toggleclr}>Toggle</button>
    </div>
  );
}

export default Togglebtn;