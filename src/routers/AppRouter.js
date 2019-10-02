import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ContactForm from '../components/EmailClient';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startSaveUserPage } from '../actions/auth';
import connect from "react-redux/es/connect/connect";
import TableExamplePage from "../components/TableExamplePage";

export const history = createHistory();

const AppRouter = ({startSaveUserPage}) => {
    let path = window.location.href;
    //console.log("path = " + path);
    startSaveUserPage(path);
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true}/>
                    <PublicRoute path="/table" component={TableExamplePage}/>
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
