import React from 'react';

import './registration-and-login.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up-component';

const RegistrationAndLogin = () => (
    <div className="form-container">
        <SignIn />
        <SignUp />
    </div>
);

export default RegistrationAndLogin;