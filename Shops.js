import React,{useState} from 'react'
function Shops(){
  const initialCount=0
  const [count,setCount]=useState(initialCount)
  
  return(
    <div>
    <button>ADD CART</button><br/>
    <button onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
    {count}
    <button onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
    </div>
  )
}
export default Shops