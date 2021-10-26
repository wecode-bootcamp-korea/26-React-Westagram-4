import React from 'react';
//import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginYs extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainYs');
  };

  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: `${event.target.value}`,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: `${event.target.value}`,
    });
  };

  render() {
    return (
      <body>
        <main className="container">
          <div className="inner">
            <h1>Westargram</h1>
            <form className="loginForm">
              <input
                id="id"
                input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
              <input
                id="password"
                input
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
              <button
                className={
                  this.state.idInputValue.indexOf('@') !== -1 &&
                  this.state.pwInputValue.length >= 5
                    ? 'changeBtnColor'
                    : 'normalBtnColor'
                }
                disabled={
                  this.state.idInputValue.indexOf('@') !== -1 &&
                  this.state.pwInputValue.length >= 5
                    ? false
                    : true
                }
                onClick={this.goToMain}
              >
                로그인
              </button>
            </form>
            <a href="google.com" className="lost">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </main>
      </body>
    );
  }
}
export default LoginYs;
