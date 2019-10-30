import React from 'react';
import {connect} from "react-redux";
import {CharacterList} from "./CharacterList";

export class ManageCharacters extends React.Component {
    onCreate = () => {
        this.props.history.push('/createchar');
    };

    render() {
        return (
            <div>
                <h1>Characters</h1>
                <CharacterList/>
                <button onClick={this.onCreate}>New Character</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCharacters);
