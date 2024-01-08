import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Products (){
    const [list,setList]= useState([]);
    useEffect(()=>{
        axios.get("https://6518dbbd818c4e98ac5ff3ae.mockapi.io/api-product")
        .then(function(res){
            console.log(res);
            setList(res.data);
        })
    },[])
    return(
        <div>
            {list&&list.map((item,index)=>{
                return(
                    <div>
                        <Link to={`/product/${item.id}`}>{item.id}</Link>
                    </div>
                )
            })}
        </div>
    )
}