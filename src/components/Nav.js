import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export const Nav = (props) => (
    <div className='navDiv'>
        <nav className='navNav'>
            <Link className='nav__link' to='/players'>players</Link>
            <Link className='nav__link' to='/games'>games</Link>
            <Link className='nav__link' to='/rolls'>rolls</Link>
            { props.auth.isAdmin === 'true' &&
            (<Link className='nav__link' to='/boxes'>boxes</Link>) }
            <a className='nav__link' href='https://github.com/davidcoble/dicey/issues'>suggestions</a>
            {/*{ props.auth.isAdmin === 'true' ? (*/}
            {/*    <Link className='nav__link' to='/'>admin {props.auth.name}</Link>*/}
            {/*): (*/}
            {/*    <Link className='nav__link' to='/'>{props.auth.name}</Link>*/}
            {/*)}*/}

        </nav>
    </div>
);

const mapDispatchToProps = (dispatch) => ({

});
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
