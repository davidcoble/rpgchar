import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetPlayers} from "./actions/players";
import { startSetLoggedIn } from "./actions/auth";
import { startMakePlayerAdmin } from "./actions/players";
import { startSetBoxes } from "./actions/boxes";
import { startSetRolls } from "./actions/rolls";
import { startSetExpenses } from "./actions/expenses";
import { startSetGames } from "./actions/games";
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
console.log("store = "+JSON.stringify(store));
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        let auth = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            isAdmin: 'false'
        };
        store.dispatch(login(auth));
        store.dispatch(startSetLoggedIn())
            .then(() => {
                if(user.uid == 'dyMIEyrAb8T4PgLkIeVrpxLSPkE3') {
                    store.dispatch(startMakePlayerAdmin(user.uid, true));
                }
            })
            .then(store.dispatch(startSetPlayers()))
            .then(store.dispatch(startSetLoggedIn()))
            .then(store.dispatch(startSetBoxes()))
            .then(store.dispatch(startSetRolls()))
            .then(store.dispatch(startSetExpenses()))
            .then(store.dispatch(startSetGames()))
            .then(() => {
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/players');
                }
            });
    } else {
        // console.log("logged out");
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
