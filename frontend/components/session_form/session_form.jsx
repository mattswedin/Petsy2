import React from "react";


export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.action(this.state)
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){
        if (this.props.formType == "Sign Up!") {

            return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>

                <label>E-mail:
                <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                
                <label>First Name:
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                </label>
            
                <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                </label>

                <input type="submit" value={this.props.formType}/>
            </form>
            )
        } else {

            return (
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>

                    <label>E-mail:
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>

                    <input type="submit" value={this.props.formType} />
                </form>
            )
        }
    }

    
}