import React from 'react';
// import ReactDOM from "react-dom";
// import "./Login.css";
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainSy');
  };

  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
    console.log(event.target.value);
  };

  handlepwInput = event => {
    this.setState({
      pw: event.target.value,
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <div id="login-page-sy">
        <div className="container">
          <div className="loginbox">
            <h1>Westagram</h1>
            <form className="loginForm">
              <input
                id="id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
              <input
                id="pw"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlepwInput}
              />
              <button
                className={
                  this.state.id.indexOf('@') !== -1 && this.state.pw.length > 5
                    ? 'changeButtonColor'
                    : 'normalButtonColor'
                }
                onClick={this.goToMain}
                id="loginBtn"
                type="button"
                disabled={
                  this.state.id.indexOf('@') !== -1 && this.state.pw.length > 5
                    ? false
                    : true
                }
              >
                로그인
              </button>
            </form>
            <a href="google.com">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
