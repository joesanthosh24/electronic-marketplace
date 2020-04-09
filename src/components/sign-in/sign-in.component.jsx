import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../custom-button/button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(e) {
            console.log('Error: ', e.message);
        }

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in">
                <h2>Already Have an Account?</h2>
                <span>Sign In With Email and Password</span>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <div className="buttons">
                        <Button
                            type="submit"
                        >
                            Sign In
                        </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</Button>
                    </div>
                    
                </form>
            </div>
        )
    }
};

export default SignIn;