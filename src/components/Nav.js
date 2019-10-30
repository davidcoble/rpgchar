import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ReactTooltip from 'react-tooltip'

export const Nav = (props) => (
    <div className='navDiv'>
        <ReactTooltip id='suggestions'>
            <span>If there's anything about this site that you don't understand,<br/>
                or if there's a feature you want to see implemented, please click<br/>
                this link, create an account on github (if you don't already have one),<br/>
                and create a new issue describing your request.  I promise I'll answer.
            </span>
        </ReactTooltip>
        <ReactTooltip id='characters'>
            <span>
                Create a new character, or manage an existing character.
            </span>
        </ReactTooltip>
        <ReactTooltip id='campaigns'>>
            <span>
                Find a campaign to join, or create one of your own.
            </span>
        </ReactTooltip>
        <nav className='navNav'>
            <Link className='nav__link'
                  data-tip data-for='characters'
                  to='/char'>characters</Link>
            <Link className='nav__link'
                  data-tip data-for='campaigns'
                  to='/camp'>campaigns</Link>
            <a className='nav__link'
               data-tip data-for='suggestions'
               href='https://github.com/davidcoble/rpgchar/issues'>suggestions</a>
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
