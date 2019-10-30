import React from 'react';
import {connect} from "react-redux";

export class CharacterList extends React.Component {
    render() {
        return (
            <div>
                chars
            </div>
        );
    }

}

const mapStateToProps = (state, props) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
