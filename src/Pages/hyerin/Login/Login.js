import React from 'react';
import './Login.scss';
// import '../../Styles/common.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="container-wrap">
        <h2 className="login-title">Westagram</h2>

        <div className="input-container">
          <div className="input-wrap">
            <input
              className="id"
              type="text"
              placeholder="&nbsp전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="password"
              type="password"
              placeholder="&nbsp비밀번호"
            />
          </div>
          <button className="btn" type="button">
            로그인
          </button>
        </div>

        <div className="findPw">
          <a href="https://www.instagram.com/?hl=ko" className="forgetPassword">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
