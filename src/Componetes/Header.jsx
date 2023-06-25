import React from "react";
import './Header.css'
import { NavLink } from "react-router-dom";


const Header = () => {
    
    return(
        <div>
            <nav className='header'>

                <ul>

                    <li>
                    <NavLink  to='/' className='link'>
                    Produtos

                </NavLink>
                    </li>
                    <li>

                    <NavLink className='link' to='contato'>
                    Contato

                </NavLink>

                    </li>
                </ul>
                

                
            </nav>
        </div>
    )
}

export default Header