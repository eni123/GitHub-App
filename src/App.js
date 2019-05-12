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
const ROUTES = [
    {
        route: '/',
        component: Dashboard
    },
    {
        route: '/login',
        component: Login
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
    ]

class App extends React.Component {
    state = {route: '/'}

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    {ROUTES.map(item =>
                        <Route exact path={item.route} render={(props) => {
                            const Component = item.component;
                            if (item.route !== '/login')
                                return <div className="container">
                                    <div className="side_bar">
                                        {item.route !== '/login' && <SideBar/>}
                                    </div>
                                    <div className="main-bar">
                                        <div className="head">
                                            {item.route !== '/login' && <Header/>}
                                        </div>
                                        <div className="middle">
                                            <Component {...props}/>
                                        </div>
                                        <div className="foot">
                                            {item.route !== '/login' && <Footer/>}
                                        </div>
                                    </div>
                                </div>
                            else {
                                return <Login {...props}/>
                            }
                        }}/>
                    )}
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
