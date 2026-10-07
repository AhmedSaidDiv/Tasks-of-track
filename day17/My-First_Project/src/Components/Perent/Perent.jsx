import {useState} from "react";
import Child from "../Child/Child";
export default function Perent() {
    let [Product,setProduct] = useState({
        name:`Ahmed`,
        price:`900`,
        quant:`200`,
        sale:true,


    });

    return (
        <>
        <div className="container-fluid">
            <h1 className="bg-success text-light text-center p-4">Perent</h1>
        </div>
        <Child productData={Product}/>
        </>
    );
}
