import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

// import Login from './pages/Login';
// import Regist from './pages/Regist';
import Home from './pages/home/Home';
// import Loading from './components/common/alert/Loading'
// import Alert from './components/common/alert/Alert';
// import OTPConfirm from './components/common/otp/otp-confirmation'
// import ResetPass from './pages/reset-pass'

// import SocketClient from './SocketClient'
// import { getUserInfo } from './redux/action/authAction'
// import { getCodeExerCises, getQueueCodeExercises } from './redux/action/codeExerciseAction'

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch()

    // // lấy thông tin user khi load trang
    // useEffect(() => {
    //     dispatch(getUserInfo()).then(() => {
    //         setIsLoaded(true)
    //     })
    // }, [dispatch])

    // lấy danh sách banners khi load trang

    // lấy danh sách policy khi load trang

    // if (!isLoaded) {
    //     return <Loading />;
    // }

    return (
        <Router>
            {/* <SocketClient>
                <Alert /> */}
            <div className='main'>
                <Routes>
                    {/* <Route exact path='/regist' Component={Regist} /> */}
                    {/* <Route exact path='/reset-pass' Component={ResetPass} /> */}
                    {/* <Route exact path='/otp-confirmation' Component={OTPConfirm} /> */}
                    <Route exact path='/' Component={Home} />
                    {/* {(userType === "ADMIN" || userType === "USER") && auth.user.status === 0 && (
                            <>
                                <Route exact path='/user/:id' Component={UserProfileDetail} />
                                <Route exact path='/post/:id' Component={PostDetail} />
                                <Route exact path="/:page" Component={<PrivateRouter />} />
                                <Route exact path="/:page/:id" Component={() => <PrivateRouter path="/:page/:id" />} />
                                <Route exact path="/:page/:id/:action" Component={() => <PrivateRouter path="/:page/:id/:action" />} />
                            </>
                        )} */}

                </Routes>
            </div>
            {/* </SocketClient> */}
        </Router>
    );
}

export default App;