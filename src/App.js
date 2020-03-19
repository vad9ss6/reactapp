import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />

            <Route path='/profile' render={() => <Profile state={props.state.postData} addPost={props.addPost} />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/setting' render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
