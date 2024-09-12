import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

// import Login from './pages/Login';
// import Regist from './pages/Regist';
import Home from './pages/home/Home';
import LoginRoute from './router/loginRoute';
import Loading from './components/common/alert/Loading.jsx'
// import Alert from './components/common/alert/Alert';

// import SocketClient from './SocketClient'
import { getUserInfo } from './redux/action/authAction'
// import { getCodeExerCises, getQueueCodeExercises } from './redux/action/codeExerciseAction'

function App() {
    const [isLoaded, setIsLoaded] = useState(true);
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => state);

    // lấy thông tin user khi load trang
    // useEffect(() => {
    //     dispatch(getUserInfo()).then(() => {
    //         setIsLoaded(true)
    //     })
    // }, [dispatch])



    if (!isLoaded) {
        return <Loading />;
    }


    return (
        <Router>
            {/* <SocketClient>
                <Alert /> */}
            <div className='main'>
                <Routes>
                    <Route path='/auth/*' element={<LoginRoute />} />
                    <Route exact path='/' Component={Home} />
                </Routes>
            </div>
            {/* </SocketClient> */}
        </Router>
    );
}

export default App;