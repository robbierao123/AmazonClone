import React, { Component } from 'react'
import '../componentCss/Navbar.css'
import { Link } from "react-router-dom"
import logo from '../amazon-logo.png'

import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Cart from './Cart';
import {useStateValue} from "./StateProvider"

function Navbar() {
  
        const [{cart}] = useStateValue();
    

   
        return (
            <nav className="navbar">

         <Link to="/">
            <img className="header_logo"src={logo} alt="Logo"/>

            
        </Link>

            <div className="header_searchContainer">
       <input type="text" className="header_search" />
       <SearchIcon className="header_searchIcon"/>

                </div>

                <div className ="header_nav">
                
                     <Link to="/Login" className="header_link">
                     <div className="header_option">
                            <span className="header_optionLineOne"> Hello,Sign in</span>
                            <span  className="header_optionLineTwo">Account&Lists</span>
                    
                        </div>
                     </Link>

                     <Link to="/Login" className="header_link">
                     <div className="header_option">
                            <span  className="header_optionLineOne"> Returns</span>
                            <span className="header_optionLineTwo">& Orders</span>
                    
                        </div>
                     </Link>


                     <Link to="/Login" className="header_link">
                     <div className="header_option">
                            <span className="header_optionLineOne">Try</span>
                            <span className="header_optionLineTwo">Prime</span>
                    
                        </div>
                     </Link>
                     
                     
                     <Link to="cart" className = "header_link">
                     <div className="header_optionCart">
                     <AddShoppingCartIcon />
                     <span className="header_optionLineTwo header_CartCount">{cart.length}</span>
                           {console.log(cart)}
                     </div>

                     </Link>
       
                </div>
console.log(Cart)
          
            </nav>
        
                



        )
}
    


export default Navbar;
