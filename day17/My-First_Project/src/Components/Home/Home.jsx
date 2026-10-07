import {useState} from "react";
export default function Home() {
    let [counter,setCounter]= useState(0);
    function increase(){
    setCounter(counter +1);

    }

    return (
       <>
      <button onClick={increase}>count:{counter}</button>
       
       </>
    );
}
