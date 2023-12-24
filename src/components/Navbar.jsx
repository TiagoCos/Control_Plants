import React from 'react';
import { Link } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi';
import { TbPlant2 } from "react-icons/tb";
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>

      <form className='pesquisa'>
      <h2 >
      <Link to="/"> <TbPlant2/> Plants </Link>
     </h2>
        <input type='text' placeholder='Busque por uma planta'/>
      <button type='submit'><BiSearchAlt2/></button>
      </form>
    </div>
  )
}

export default Navbar