import React from 'react';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main');
  };

  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      btnActive: false,
    };
  }
  handleIdInput = e => {
    this.setState({
      inputId: e.target.value,
    });
    this.isOkayToGo();
  };
  handlePwInput = e => {
    this.setState({
      inputPw: e.target.value,
    });
    this.isOkayToGo();
  };

  isOkayToGo = () => {
    if (this.state.inputId.includes('@') && this.state.inputPw.length > 5) {
      this.state.btnActive = true;
    } else {
      this.state.btnActive = false;
    }
  };

  render() {
    return (
      <main className="loginContainer">
        <div className="loginInner">
          <h1>Westagram</h1>
          <form className="loginForm">
            <input
              onChange={this.handleIdInput}
              name="inputId"
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              name="inputPw"
              id="pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              disabled={this.state.btnActive}
              onClick={this.goToMain}
              id="loginButton"
              style={{
                backgroundColor: this.state.btnActive ? 'red' : 'white',
              }}
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
