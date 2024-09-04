import React from 'react';
import IconButton from './IconButton';
import './Header.css';

const Header = ({ setIsSideBarOpen }) => {
    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div className='flex flex-col w-[100%] border-none z-10 bg-white'>
            <header className="PageHeader flex flex-col md:flex-row justify-between items-center border-b border-b-black">
                <div className="HomeIcon flex m-2">
                    <a href="/">
                        <img
                            className="w-[150px] md:w-[200px] lg:w-[250px]"
                            src="https://file.hstatic.net/200000317829/file/logo-02_9e045ad7d96c45e0ade84fd8ff5e8ca2.png"
                            alt="Home"
                        />
                    </a>
                </div>
                <div className="search-bar lg:flex flex-row w-[40%] hidden justify-center">
                    <input
                        className="border border-black px-2 py-1 w-full md:w-[70%] lg:w-[80%] rounded-lg"
                        type="text"
                        placeholder="Search"
                    />
                    <button className="s-btn block border w-auto rounded-lg py-2 ml-[5%]">
                        <IconButton iconClassName="fa-search" />
                    </button>
                </div>
                <div className="flex flex-row justify-start space-x-4 mt-2 md:mt-0">
                    <IconButton iconClassName="fa-person" onClick={handleClick} />
                    <IconButton iconClassName="fa-heart" onClick={handleClick} />
                    <IconButton iconClassName="fa-shopping-cart" onClick={handleClick} />
                    <IconButton iconClassName="fa-bars" onClick={() => setIsSideBarOpen(true)} />
                </div>
            </header>
            <div className="nav-bar flex flex-row bg-black justify-between items-center p-2 px-4">
                <div>Chào mừng đến với UTE Gara</div>
                <div className="flex flex-row justify-center items-center space-x-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Header;
