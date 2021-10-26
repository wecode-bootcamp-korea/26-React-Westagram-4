import React from 'react';
import './Login.scss';

class LoginSg extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainSg');
  };

  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      idInput: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInput: e.target.value,
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
              <button
                className={
                  this.state.idInput.includes('@') &&
                  this.state.pwInput.length >= 5
                    ? 'changeButtonColor'
                    : 'normalButtonColor'
                }
                disabled={
                  this.state.idInput.includes('@') &&
                  this.state.pwInput.length >= 5
                    ? false
                    : true
                }
                onClick={this.goToMain}
              >
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
