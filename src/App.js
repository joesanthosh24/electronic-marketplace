import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import RegistrationAndLogin from './pages/registration-and-login/registration-and-login.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkoutpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/registerandsignin' render={() => 
              this.props.currentUser ?
              (<Redirect to="/" />) : (<RegistrationAndLogin />)
            } />
            <Route exact path="/shop-items" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);