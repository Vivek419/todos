import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addInput } from './action';
import List from './list'

class main extends Component {
    handleclick(e) {

        let val = e.target.userInput.value;
        console.log("vvvv", val)
        this.props.dispatch(addInput(val))
        e.target.userInput.value = ""
        e.preventDefault()

    }
    render() {
        return (
            <>
                <form onSubmit={(e) => this.handleclick(e)}>
                    <input type="text" aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="userInput" />
                    <button type="submit" className="btn btn-primary">ADD</button>
                </form>
                <div>
                    <List />
                </div>
            </>);
    }
}

export default connect()(main);