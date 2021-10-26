import React from 'react';
import './Login.scss';
import '../../Styles/common.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '', //먼저 안에 빈값으로 만들어주기(초기화), 값이 들어오면 그 값이 들어옴
      inputPw: '',
      btnActive: false, //
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
  // - ex. ID - `@` 포함 / PW - 5글자 이상
  // - [삼항 연산자]적용해서 조건에 따라 버튼 색상에 변화를 주시기 바랍니다. 버튼활성화

  render() {
    return (
      <div className="container-wrap">
        <h2 className="login-title">Westagram</h2>

        <div className="input-container">
          <div className="input-wrap">
            <input
              onChange={this.handleIdInput}
              name="inputId"
              className="id"
              type="text"
              placeholder="&nbsp전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              name="inputPw"
              className="password"
              type="password"
              placeholder="&nbsp비밀번호"
            />
          </div>
          <button
            className="btn"
            type="button"
            style={{
              backgroundColor: this.state.btnActive ? 'blue' : 'skyblue',
            }}
          >
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
