import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startSaveUserPage } from '../actions/auth';
import connect from "react-redux/es/connect/connect";
import ManageCharacters from "../components/chars/ManageCharacters";
import CreateCharacter from "../components/chars/CreateCharacter";

export const history = createBrowserHistory();

const AppRouter = ({startSaveUserPage}) => {
    let path = window.location.href;
    console.log("path = " + path);
    startSaveUserPage(path);
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true}/>
                    <PublicRoute path="/table" component={NotFoundPage}/>
                    <PrivateRoute path="/char" component={ManageCharacters}/>
                    <PrivateRoute path="/createchar" component={CreateCharacter}/>
                    <PrivateRoute path="/secretTable" component={NotFoundPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </Router>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startSaveUserPage: (path) => dispatch(startSaveUserPage(path))
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
