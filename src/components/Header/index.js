import React from 'react';
import logo from '../../images/logo.png';
import searchLogo from '../../images/SearchImg.png';
import shopLogo from '../../images/ShopImg.png';
import './Header.css';
import './reset.css';

export default function Header() {
    return (
        <div>
            <div className='headerDiv'>
                <div className='logoDiv'>
                    <img src={logo} />
                </div>
                <div className='navDiv'>
                    <ul>
                        <li className='navLi active'>
                            <span className='liText'>
                                Home
                            </span>
                        </li>
                        <li className='navLi'>
                            <span className='liText'>
                                About Us
                            </span>
                        </li>
                        <li className='navLi'>
                            <span className='liText'>
                                Contact
                            </span>
                        </li>
                        <li className='navLi'>
                            <span className='liText'>
                                Shop
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='searchShop'>
                    <div className='searchDiv'>
                        <img src={searchLogo} />
                    </div>
                    <div className='shopDiv'>
                    <img src={shopLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}
