import { SearchOutlined, ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import {Link}  from 'react-router-dom';
import './style/Header.css'
const Header = () => {
  return (
    <div className='header' >
        <nav>
            <ul className='ul-items' >
               <li className='li-items' >
                   <Link  to='/women' >Women </Link>
                   <Link  to='/men' >Men </Link>
                   <Link  to='/denim' >Denim </Link>
                   <Link   style={{color:'orange'}} to='/gift' >The Gift Shop </Link>
                   
                   <Link  to='/about' >About </Link>
               </li>
            </ul>

            <div className="logo">
                <h1> Eshopland </h1>
            </div>

            <div className="right">

              <div className="search">
                  <SearchOutlined  className='search-icons' />
                  <button>search</button>
              </div>

              <div className="buttons">
                  <button>  <Link to='/login' > log In  </Link> </button>
                  <button>  <Link to='/signup' >  sign Up  </Link> </button>
                  <ShoppingBasket className='backet' />
              </div>

            </div>

        </nav>
    </div>
  )
}

export default Header