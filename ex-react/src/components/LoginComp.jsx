import React, { Component } from 'react';

export class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: '',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.login ? this.state.name : ''}</p>
        <h3>이름을 입력하세요</h3>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            this.setState({
              [this.state.login]: (this.state.login = this.state.name
                ? true
                : false),
            });
            console.log(this.state.name);
            console.log(this.state.login);
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default LoginComp;
