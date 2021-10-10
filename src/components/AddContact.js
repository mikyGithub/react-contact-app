import React, { Component } from 'react'


export default class AddContact extends Component {
    state = {
        name:"",
        email:""
    }
    add =(e)=>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email===''){
            console.log("error")
            return
        }

        // Passing data from child to parent
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""})
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} type="text" name="name" placeholder="Enter name"/>

                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}  type="email" name="email" placeholder="Enter email"/>

                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                
            </div>
        )
    }
}
