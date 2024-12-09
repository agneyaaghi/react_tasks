import React, { useState } from 'react'
export const Keyfile2 = () => {

  const [data,setdata] = useState([
    { prodno: 1, prodname: 'book', prodqty: 1 },
    { prodno: 2, prodname: 'pen', prodqty: 1 },
    { prodno: 3, prodname: 'pencil', prodqty: 1 },
  ]);
  console.log(data);
  const changeqty = (prodno) => {
    const newdata = data.map((item) =>
    item.prodno===prodno?{...item,prodqty+1}:item)
    setdata(newdata)
}
return (
  <div>
    {data.map((item) => (
      <div key={item.prodno}>
        <h2>{item.prodname}</h2>
        <h2>{item.prodqty}</h2>
        <button onClick={() => change(item.prodqty)}>+</button><br></br>
      </div>
    ))}
  </div>
)
}
export default Keyfile2
