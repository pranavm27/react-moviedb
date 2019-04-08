import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <a href="#" className="login-logo">
            <img src="/images/logo.png" alt="logo" />
          </a>
          <div className="card">
            <div className="card-body">
              <h1>Login</h1>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
                  <small id="emailHelp" className="form-text text-muted text-right"><a href="/reset-password">Forgot your password?</a></small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">SIGN IN!</button>
                <button type="buttom" className="btn btn-block btn-outline-primary">
                  <img src="/images/Google_G_Logo.svg" alt="Google" />
                  SIGN IN WITH GOOGLE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
