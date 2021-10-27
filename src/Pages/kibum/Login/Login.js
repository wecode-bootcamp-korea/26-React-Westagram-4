import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      btnActive: false,
    };
  }
  goToMain = e => {
    console.log('go to main function');
    e.preventDefault();
    console.log(this.state.pwInputVal);
    fetch('http://10.58.1.74:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.inputId,
        password: this.state.inputPw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과 : ', result));
  };
  // goToMain = () => {
  //   this.props.history.push('/Main');
  // };
  handleIdInput = e => {
    this.setState({
      inputId: e.target.value,
    });
  };
  handlePwInput = e => {
    this.setState({
      inputPw: e.target.value,
    });
  };

  render() {
    let isId = this.state.inputId.includes('@');
    let isPw = this.state.inputPw.length > 4;
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
              disabled={!(isId && isPw)}
              onClick={this.goToMain}
              id="loginButton"
              style={{
                backgroundColor: isId && isPw ? 'red' : 'white',
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
