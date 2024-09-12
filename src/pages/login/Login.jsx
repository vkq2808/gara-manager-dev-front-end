import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { useDispatch } from 'react-redux';

import Header from '../../components/common/header/Header';
import AdminSideBar from '../../components/admin/sideBar/AdminSideBar';
import Footer from '../../components/common/footer/Footer';
import { login } from '../../redux/actions/authActions';

import './Login.css';

const Login = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className='flex flex-col w-full h-auto items-center text-[#212529]'>
            <div
                onClick={() => setIsSideBarOpen(false)}
                className={`BodyCover flex flex-row ${isSideBarOpen ? '' : 'hidden'}`}>
            </div>
            <div className={`SideBar pt-5 flex flex-col ${isSideBarOpen ? '' : 'hidden'}`}>
                <AdminSideBar />
            </div>

            <Headroom className="Headroom w-full" disable={isSideBarOpen} >
                <Header setIsSideBarOpen={setIsSideBarOpen} />
            </Headroom>
            <div className="body-box flex flex-row w-full justify-between items-center px-20">
                <div className="form-container flex flex-col p-4 mt-4 items-center w-[30%]">
                    <h2 className='form-title'>Login</h2>

                    <div className='form-card w-full m-4 flex flex-col '>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                        <br />
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                        <div className="flex flex-col items-end">
                            <a href="/auth/regist">Don't have an account? Register here</a>
                            <a href="/auth/forgot-password">Forgot password?</a>
                        </div>
                        <br />
                        <button type="button" onClick={() => handleLoginSubmit}>Login</button>

                    </div>
                </div>
                <div className="image-container my-4">
                    <img src={require('../../images/code.png')} alt="Code" />
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Login;