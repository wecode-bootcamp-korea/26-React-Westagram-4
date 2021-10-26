import React from 'react';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main');
  };

  render() {
    return (
      <main className="loginContainer">
        <div className="loginInner">
          <h1>Westagram</h1>
          <form className="loginForm">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="pw" type="password" placeholder="비밀번호" />
            <button
              onClick={this.goToMain}
              id="loginButton"
              style={{ color: 'white' }}
            >
              로그인
            </button>
          </form>
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </main>
    );
  }
}

export default Login;
