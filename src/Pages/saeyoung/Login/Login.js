import React from 'react';
// import ReactDOM from "react-dom";
// import "./Login.css";
import './Login.scss';

class Login extends React.Component {
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
              />
              <input id="pw" type="password" placeholder="비밀번호" />
              <button id="loginBtn" type="button" disabled>
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
