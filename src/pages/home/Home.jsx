import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/Header';
import Headroom from 'react-headroom';
import './Home.css';
const Home = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <div className='flex flex-col w-full h-auto'>
            <Headroom>
                <Header setIsSideBarOpen={setIsSideBarOpen} className={`PageHeader `} />
            </Headroom>
            <div
                onClick={() => setIsSideBarOpen(false)}
                className={`BodyCover flex flex-row ${isSideBarOpen ? '' : 'hidden'}`}>
                Click to close the side bar
            </div>
            <div className={`SideBar flex flex-col ${isSideBarOpen ? '' : 'hidden'}`}>
                <h1>Home sidebar</h1>
            </div>
            <body className='flex flex-col w-full h-[5000px]'>
                <h1>Home body</h1>
            </body>
        </div>
    );
}

export default Home;
