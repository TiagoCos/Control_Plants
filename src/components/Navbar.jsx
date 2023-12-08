import React from 'react';
import { Link } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi';
import { TbPlant2 } from "react-icons/tb";

function Navbar() {
  return (
    <div>
     <h2>
      <Link to="/"> <TbPlant2/> Plants </Link>
     </h2>
      <form>
        <input type='text' placeholder='Busque por uma planta'/>
      <button type='submit'><BiSearchAlt2/></button>
      </form>
    </div>
  )
}

export default Navbar