import { Link } from "react-router-dom";
import bata from './bata.png';
import "./link.css";
function Linkk()
{
    return(
        <>
        
        <img src={bata}></img>
        <div className="im">
        <Link to="/" className="home">Sneaker Studio</Link>
        
       
        <Link to="/Web">Web Exclusive</Link>
        <Link to="/New">New</Link>
        
        <Link to="/Men">Men</Link>
    
        <Link to="/Women">Women</Link>
        <Link to="/Kids" className="kids">Kids</Link>
        
        <Link to="/Sale">Sale</Link>
        <Link to="/Brands" className="brands">Brands</Link>

        <input type="text" name="s" placeholder="Search"></input>


</div>
        </>
    )
}

export default Linkk