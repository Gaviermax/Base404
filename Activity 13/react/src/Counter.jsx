import { useState } from "react";
import CountDisplay from "./CountDisplay";

export default function Counter (){
    const [count,setCount] = useState(1);


    return(
        <div className="container shadow mx-auto my-4 rounded p-3 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: "#96a4d3", width: "75%", height: "80vh"}}>
                <h1 className="mb-5 fw-bold" style={{color: (count % 5 ==0 && count !=0) ? "green" : "red"}}>Will turn green if valid</h1>
                <CountDisplay count={count}/>

                <div className="buttons d-flex flex-row justify-content-space-between mt-5" style={{width:"75%"}}>
                    <button className="btn btn-success btn-lg flex-grow-1 mx-5 fw-semibold my-4" onClick={()=>{
                        
                        setCount(count + 1)
                    }}>Increment +</button>
                    <button className="btn btn-danger btn-lg flex-grow-1 mx-5 fw-semibold my-4" onClick={()=>{
                        (count === 0) ? setCount(0) : setCount(count -1);
                    }}>Decrement -</button>
                </div>

                <h3 className="text-center"></h3>
        </div>
    )
}