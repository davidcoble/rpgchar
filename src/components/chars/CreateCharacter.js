import React from 'react';
import {connect} from "react-redux";

export class CreateCharacter extends React.Component {

    constructor(props, context, onNameChange) {
        super(props, context);
        this.state = {
            name: props.name
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        console.log("onNameChange name = " + name);
        this.setState( () => { name });
    };

    render() {
        return (
            <div>
                <h1>Create a new character</h1>
                <input
                    type='text'
                    placeholder='Name'
                    autoFocus
                    className='text-input'
                    value={this.state.name}
                    onChange={this.onNameChange}/>
                    <button>Next</button>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacter);
