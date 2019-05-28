import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './assets/styles/sass/App.scss'
import SideBar from './components/dashboard';
import Repositories from './pages/repositories'
import Login from './pages/login'
import Settings from './pages/settings'
import Profile from './pages/profile';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './pages/dashboard';
import {connect} from 'react-redux';

const ROUTES = [
    {
        route: '/',
        component: Login
    },
    {
        route: '/dashboard',
        component: Dashboard
    },
    {
        route: '/repositories',
        component: Repositories
    },
    {
        route: '/profile',
        component: Profile
    },
    {
        route: '/settings',
        component: Settings
    }
];

class App extends React.Component {
    state = {route: '/'};
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    {ROUTES.map(item =>
                        <Route exact path={item.route} key={item.route} render={(props) => {
                            const Component = item.component;
                             if (item.route !== '/')
                            return <div className="container">
                                <div className="side_bar">
                                    {item.route !== '/' && <SideBar/>}
                                </div>
                                <div className="main-bar">
                                    <div className="head">
                                        {item.route !== '/' && <Header/>}
                                    </div>
                                    <div className="middle">
                                        <Component {...props}/>
                                    </div>
                                    <div className="foot">
                                        {item.route !== '/' && <Footer/>}
                                    </div>
                                </div>
                            </div>
                            else {
                                return <Login {...props} />
                            }
                        }}/>
                    )}
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.info
    }
};
export default connect(mapStateToProps)(App);
