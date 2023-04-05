import React, { useEffect, useRef } from 'react';


const RefExample = () => {

  const inputRef = useRef(null);
  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  const inputFocus = ()=>{
    inputRef.current.focus();
  }

  return (
    <>
      <h3 style={{ textAlign: "center", margin: "0 0 20px 0", color: "GrayText" }}>
        تمرین هوک ref
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e)=> e.preventDefault()} style={{ width: "60%", margin: "0" }}>
          <input ref={inputRef} type="text" placeholder='بنویس' style={{ fontSize: "17px", padding: "5px 10px", width: "100%", margin: "0", color: "GrayText" }} />
          <button onClick={inputFocus} style={{ fontSize: "16px", padding: "5px 50px", textAlign: "center", margin: "20px 0", outline: "none", background: "blue", color: "white" }}>
            فکوس کن
          </button>
        </form>
      </div>
    </>
  );
}

export default RefExample;