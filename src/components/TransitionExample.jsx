import React, { useState, useTransition } from 'react';



const TransitionExample = () => {

  const [number, setNumber] = useState(0);
  const [getNumbers, setGetNumber] = useState([]);
  const [isPending, startTransition] = useTransition()

  const handlenumber = (e) => {
    setNumber(e.target.value);

    startTransition(() => {
      const arr = [];
      let count = 0;
      while (count <= 20000) {
        arr.push(e.target.value);
        count++
      }
      setGetNumber(arr)
    })
  }


  return (
    <>
      <h3 style={{ textAlign: "center", margin: "0 0 20px 0", color: "GrayText" }}>
        تمرین هوک Memo
      </h3>
      <form onSubmit={(e) => e.preventDefault()} style={{ width: "60%", margin: "auto" }}>
        <input value={number} onChange={handlenumber} type="number" placeholder='عدد رو تغییر بده' style={{ fontSize: "17px", padding: "5px 10px", width: "100%", margin: "0", color: "GrayText" }} />
      </form>
      {isPending? "صبر کن ..."  
        : getNumbers.map((item, index) => {
          return (
            <div key={index} style={{ width: "500px", textAlign: "center", padding: "10px 30px", margin: "auto" }} >
              عدد برابر {item}
            </div>
          )
        })
      }

    </>
  );
}

export default TransitionExample;