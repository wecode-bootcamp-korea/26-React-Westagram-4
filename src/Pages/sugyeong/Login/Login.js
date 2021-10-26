import React from 'react';
import './Login.scss';

class LoginSg extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    return (
      <main className="login">
        <div className="boxWrapper">
          <header>
            <p className="login__logo">Westagram</p>
          </header>
          <section>
            <form className="login__form">
              <input
                type="text"
                id="login__id"
                placeholder="Phone number, username, or email"
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                id="login__pw"
                placeholder="Password"
                onChange={this.handlePwInput}
              />
              <button disabled id="login__btn">
                Log In
              </button>
            </form>
          </section>
          <section>
            <div className="password__reset">
              <a href="https://www.#.com">Forgot password?</a>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default LoginSg;
