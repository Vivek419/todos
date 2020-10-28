import React, { Component } from 'react';
import { connect } from 'react-redux'
import { delInput } from './action';

class list extends Component {

    handleclick(e) {
        let id = e;
        this.props.dispatch(delInput(id))
    }

    render() {

        return (
            <ul>
                {this.props.todo.map((item, index) => (
                    <li key={index}>{item.val} <button style={{ backgroundColor: "transparent" }} onClick={() => this.handleclick(item.id)}>x</button></li>
                ))}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo.data
    };
}

export default connect(mapStateToProps)(list);