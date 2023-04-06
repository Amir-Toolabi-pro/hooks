import React, { useEffect, useMemo, useState } from 'react';

const dubleNumber = (num)=>{
  console.log("فانکشن تنبل");
  let count = 0;
  while(count<= 1000000000){
    count++
  };
  return num * 2;
}


const MemoExample = () => {

  const [color,setColor] = useState(false);
  const [number, setNumber] = useState(0);

  const supernum = useMemo(()=>{
    return dubleNumber(number);
  },[number])

  const appstyle = useMemo(()=>{
    return {background: color? "green":"red"}
  },[color])
  

  useEffect(()=>{
    console.log("بکگراند تغییر کرد");
  },[appstyle])

  return (
    <>
      <h3 style={{ textAlign: "center", margin: "0 0 20px 0", color: "GrayText" }}>
        تمرین هوک Memo
      </h3>
      <form onSubmit={(e) => e.preventDefault()} style={{ width: "60%", margin: "auto" }}>
        <input value={number} onChange={(e)=> setNumber(e.target.value)} type="number" placeholder='عدد رو تغییر بده' style={{ fontSize: "17px", padding: "5px 10px", width: "100%", margin: "0", color: "GrayText" }} />
        <button onClick={()=> setColor(!color)} style={{ fontSize: "16px", padding: "5px 50px", textAlign: "center", margin: "20px 0", outline: "none", background: "blue", color: "white" }}>
          تغییر رنگ
        </button>
      </form>
      <div style={{ width: "500px", textAlign: "center", padding: "10px 30px", margin: "auto", background: appstyle.background, transition:"all ease .5s" }} >
        عدد دوبرابر شده: {supernum} است!
      </div>
    </>
  );
}

export default MemoExample;