import React, { useState } from 'react';
import './navigationMobile.styles.scss';
import { Link } from 'react-router-dom';

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        const menuClass = document.querySelector('.burgerMenu');
        menuClass.classList.toggle('open');
        setIsOpen(!isOpen);
    }

    return (
        <div className="mobileNavigationContainer container-fluid d-flex d-md-none align-items-end flex-column">
            <div className="row">
                <div className="col-5">
                    <div onClick={toggleOpen} className="burgerMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className={`${isOpen ? 'menuOpen' : 'menuClosed'} col-12 mobileMenu`}>
                    <Link className='mobileNavLink' to={'/'}>Home</Link>
                    <Link className='mobileNavLink' to={'/about'}>About</Link>
                    <Link className='mobileNavLink' to={'/auction'}>Auction</Link>
                    <Link className='mobileNavLink' to={'/donate'}>Donate</Link>
                    <Link className='mobileNavLink' to={'/#pastyears'}>Past Years</Link>
                    <Link className='mobileNavLink' to={'/#contact'}>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default MobileNavigation;