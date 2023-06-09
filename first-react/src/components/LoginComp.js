import { Component } from "react";

class Login extends Component {
  render() {
    //변수 작성
    //클래스에서 props 값을 가져올 때는 this.props를 통해 들고온다.
    //this.props는 Component에서 상속받아온 속성
    //this.props={login:true name:"홍길동"}
    //비구조화할당[구조 분해] : 배열이나 객체와 같이 값이 여러개인 자료형을 안에 있는 요소를 꺼내에 각각의 변수에 따로 저장하는 방ㅎ식
    let prop = this.props;
    //prop.login 와 같이 속성에 접근할 수 있지만 일일히 넣기에는 번거롭다
    //아래와 같이 자료형 중 필요한것만 꺼낼 수 있다. 객체의 속성이름과 동일하게 적어서 할당가능
    //속성 이름을 동일하게 작성하지 않으면 값을 들고오지 못함
    let { login, name } = this.props;
    let children = this.props.children;
    console.log(prop);
    console.log(login);
    console.log(name);
    console.log(prop.children);
    //let login = true;
    return (
      <div>
        <h1>{name}</h1>
        <p>{children}</p>
        {login ? (
          <LoginText /> //이런식으로 밑에 다른 컴포넌트를 만들어서 해당 컴포넌트 안에 넣을 수 있다.
        ) : (
          <div>
            <h1>로그인이 필요합니다</h1>
            <p>React입니다</p>
          </div>
        )}
      </div>
    );
  }
}
//하나의 컴포넌트 작성 파일 안에 클래스형 또는 함수형 컴포넌트를 여러개 작성 할 수 있다.
//하지만 export를 이용하여 내보내주지 않으면 외부에서 사용 할 수 없다.

class LoginText extends Component {
  render() {
    return (
      <div>
        <h1>로그인에 성공했습다</h1>
        <p>홍길동입니다</p>
      </div>
    );
  }
}
//다른 내용을 export를 통해 내보낼 때
export { LoginText };
//주로 하나의 컴포넌트 작성파일에서 하나의 컴포넌트를 내보낸다
export default Login;
