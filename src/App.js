import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config'; 
import setAuthToken from "./utils/setAuthToken";

import { doRegister, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store"; 

import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
/*const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));*/

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
/*const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
*/



class App extends Component {

    render() {
        return (
            <Provider  store={store}>
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                    <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />         
                    </Switch>
                </React.Suspense>
            </HashRouter>
            </Provider >
        );
    }
}

export default App;
