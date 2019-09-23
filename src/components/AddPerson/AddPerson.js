import React, { Component } from "react";
// import Axios from 'axios';
import "./AddPerson.css";

class AddPerson extends Component {
    state = {
        name: "",

    };

    nameChangedHandler = event => {
        this.setState({ name: event.target.value });
    };

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3000/Fellowship/?', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.name)
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        return (
            <div className="AddPerson">
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={this.nameChangedHandler}
                        value={this.state.name}
                    />
                </form>
                <button
                    onClick={() =>
                        this.props.personAdded(this.state.name)
                    }
                >
                    Add Me
        </button>
            </div>
        );
    }
}

export default AddPerson;
