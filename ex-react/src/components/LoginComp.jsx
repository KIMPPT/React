import React, { Component } from 'react';
import loginon from './Login.css'
export class LoginComp extends Component {
  //state 생성
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: '',
    };
  }
  //inputChange
  inputChange = (e) => {
    this.setState({ name: e.target.value });
    //loginMethod
  };
  loginMethod = () => {
    this.setState({
      login: true,
    });
  };
  render() {
    let { name, login } = this.state;

    return (
      <div>
        {/*첫번째 방법 : style에 삼항연산자를 넣어 표현 */}
        {/*대부분 className={login?"on":""} 클래스 네임을 이용해서 디자인 추가*/}
        
        <h1 style={login ? { display: 'block' } : { display: 'none' }}>

        
          {login ? name : ''}
        </h1>
        {/*두번째 방법 : display의 값만 삼항연산자를 넣어 표현 */}
        {/*
        
        */}
        
        <div style={{ display: login ? 'none' : 'block' }}>
        {/* <div className={login?"loginon":""}> 를 입력하면 바로 위의 식과 동일하다. import를 만들어야 적용이 되며 위의 import의 색이 연한 색이 되어도 신경 쓰지 않아도 된다*/}
          <h3>이름을 입력하세요</h3>
          <input type="text" onChange={this.inputChange} />
          <button onClick={this.loginMethod}>확인</button>
        </div>
      </div>
    );
  }
}

export default LoginComp;
