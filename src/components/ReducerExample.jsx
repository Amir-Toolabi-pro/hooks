import React, { useReducer } from 'react';



const ReducerExample = () => {

  const reducer = (state, action)=>{
    switch(action.type){
      case "INCREMENT":
        return {count: state.count + 1};
      case "DECREMENT":
        return {count: state.count - 1};
       default:
        return state; 
    }
  }

  const increment = ()=>{
    dispatch ({type: "INCREMENT"})
  }
  const decrement = ()=>{
    dispatch ({type: "DECREMENT"})
  }

  const [state, dispatch]= useReducer(reducer, {count: 0})


  return ( 
    <>
      <h3 style={{textAlign:"center", color:"GrayText"}}>
        تمرین هوک useReducer
      </h3>
      <p style={{textAlign:"center"}}>
        عدد در حال حاضر {state.count} است!
      </p>
      <div style={{width:"100%", display:"flex", justifyContent:"center"}} >
        <button onClick={increment} style={{margin:"0 5px", padding:"5px 20px", outline:"none", textAlign:"center", backgroundColor:"blue", color:"white"}} >
          اضافه کن +
        </button>
        <button onClick={decrement} style={{margin:"0 5px", padding:"5px 20px", outline:"none", textAlign:"center", backgroundColor:"red", color:"white"}} >
          کم کن -
        </button>
      </div>
    </>
   );
}
 
export default ReducerExample;