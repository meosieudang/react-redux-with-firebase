import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authAction';
import '../../App.css'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
        const { auth, authError } = this.props;

        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form className='white' onSubmit={this.onSubmit}>
                    <h5 className='grey-text text-darken-3'>
                        Sign Up
                    </h5>
                    <div className='red-text center'>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    <div className='input-field'>
                        <label>Email</label>
                        <input type='email' name='email' value={email} onChange={this.onChange} />
                    </div>
                    <div className='input-field'>
                        <label>Password</label>
                        <input type='password' name='password' value={password} onChange={this.onChange} />
                    </div>
                    <div className='input-field'>
                        <label>First Name</label>
                        <input type='text' name='firstName' value={firstName} onChange={this.onChange} />
                    </div>
                    <div className='input-field'>
                        <label>Last Name</label>
                        <input type='text' name='lastName' value={lastName} onChange={this.onChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);