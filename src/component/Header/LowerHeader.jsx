import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import "../../styles/lowerContainer.css";


const LowerHeader = () => {
  return (
    <div className='lower__container'>
        <ul>

            <li>
                <MdOutlineMenu />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Costumer Services</li>
            <li>Register</li>
            <li>Gift Cards</li>
            <li>Sells</li>
       </ul>
    </div>
    
  )
}

export default LowerHeader