import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Route} from 'react-router-dom';
import News from "./pages/News/News";
import Music from './pages/Music/Music';
import Settings from "./pages/Settings/Settings";
import HeaderContainer from "./components/header/HeaderContainer";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./redux/redux-store";
import {AppStateType, initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Friends} from "./components/navbar/friends/Friends";
import {WithSuspense} from "./Hoc/WithSuspense";


const Login = React.lazy(() => import('./pages/login/loginPage'))
const ProfileContainer = React.lazy(() => import('./pages/profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./pages/dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./pages/users/UsersContainer'))

const App = () => {
    const dispatch = useDispatch()
    const appState = useTypedSelector<AppStateType>((state) => state.app)
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])
    if (!appState.initialized) {
        return <Preloader/>
    }

    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route path="/profile/:userid?" render={WithSuspense(ProfileContainer)}/>
                <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                <Route path="/users" render={WithSuspense(UsersContainer)}/>
                <Route path="/login" render={WithSuspense(Login)}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={Friends}/>
            </div>
            <Footer/>
        </div>
    );
}
export default App
