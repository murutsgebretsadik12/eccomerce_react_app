import React, { useContext } from 'react'
import '../../styles/header.css';
import { Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LowerHeader from './LowerHeader';
import { DataContext } from '../Dataprovider/DataProvider';
import { auth } from '../../utility/firebase';

const Header = () => {
    const [{basket, user}, dispatch] = useContext(DataContext)

    return (
    <>
        <section className="fixed">
        <div className="header">
            <Link to="/">
                <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>

            <div className='header__deliver'>
                <LocationOnIcon/>

                <div className="heade__deliver__option">
                    <span className='header__deliverLineOne'>Deliver to</span>
                    <span className='header__deliverLineTwo'> Dublin 01</span>
                </div>
            </div>

            <div className='header__option'>
                
                    <select name="" id="" >
                        <option value="all" className="header__all">All</option>
                    </select>
                
            </div>

                {/* search box */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
                
            </div>

            {/* the righ div */}
        <div className="header__nav">
            <div className="header__option">
                <div className="header__optionIropdown">
                    <img  
                        src="https://flagcdn.com/w40/gb.png" 
                        alt="UK Flag" 
                        className="header__optionLogo" 
                    />          
                    <select name="" id="">
                    </select>          
                            
                </div>      
            </div>

            <Link to={!user && "/auth"} className='header__link'>
                <div  className="header__option">
                    <span className="header__optionLineOne">
                         
                        {user ? (
                         <>
                               <p>Hello {user?.email?.split("@")[0]}</p>
                               <span onClick={()=> auth.signOut()}>Sign Out</span>
                         </>
                            
                        ) : (
                            <>
                              <p>Hello, Sign In</p>
                              <span>Account & Lists</span>
                            </>
                          
                        )}
                    </span>
                </div>
            </Link>   
            
        
            <Link to="/order" className='header_link'>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>

            <Link to="/" className='header_link'>
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            
        
        
            <Link to="/" className='header_link'>
                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                    {basket?.length || 0}
                </span>
                </div>
            </Link>
        
        
            
            
        </div>


        
        </div> 
        <LowerHeader/> 
        </section>
    </>   
  
       

      )
}

export default Header
