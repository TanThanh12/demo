import { Link } from "react-router-dom";

export default function Detail(){
    return(
        <>
        <Link to="/product/1">link1</Link>
        <Link to="/product/2">link2</Link>
        <Link to="/products">link3</Link>
        </>
    )
}