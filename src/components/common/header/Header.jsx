import React from 'react';
import IconButton from './IconButton';

const Header = ({ setIsSideBarOpen }) => {
    const handleClick = () => {
        console.log('Button clicked');
    }
    return (
        <header className='flex flex-row bg-white justify-between border border-t-black'>
            <div className='HomeIcon flex m-2 '>
                <a href='/'>
                    <img className='w-[250px]' src='https://file.hstatic.net/200000317829/file/logo-02_9e045ad7d96c45e0ade84fd8ff5e8ca2.png' alt='Home' />
                </a>
            </div>
            <div className='flex flex-row justify-start mx-2'>
                <IconButton iconClassName="fa-person" onClick={handleClick} />
                <IconButton iconClassName="fa-heart" onClick={handleClick} />
                <IconButton iconClassName="fa-shopping-cart" onClick={handleClick} />
                <IconButton iconClassName="fa-bars" onClick={() => setIsSideBarOpen(true)} />
            </div>
        </header>
    );
}

export default Header;