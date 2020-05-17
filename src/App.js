import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import RegistrationAndLogin from './pages/registration-and-login/registration-and-login.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkoutpage.component';
import WishlistPage from './pages/wishlist/wishlistpage.component';

import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
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
            <Route path="/shop-items" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/wishlist" component={WishlistPage} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);