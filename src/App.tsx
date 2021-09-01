import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route} from 'react-router-dom';
import News from "./components/news/News";
import Music from './components/music/Music';
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";
const App: React.FC = ()  => {
    return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
