import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: ''
        }
    }

    add = e => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are required");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
        this.props.history.push("/");
    }

    render() {
        const { name, email } =  this.state;

        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder='Enter Name' value={name} onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder='Enter Email' value={email} onChange={e => this.setState({ email: e.target.value })} />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact