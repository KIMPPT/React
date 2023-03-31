import React, { Component } from 'react'

export class EventComp extends Component {
    //state 작성
    constructor(props){
        super(props);
        this.state={
            name:"홍길동",
            address:"부산",
            toggle:true,
            color:""
        }
        //메소드에 .bind로 묶어서 this 전달
        //아래 this.메소드명 은 작성한 메소드
        //해당 메소드를 들고와서 .bind(this)를 연결
        this.PrintEvent=this.PrintEvent.bind(this);
        //this.PrintEvent는 이름
        //let num=0; num=num+1; 의 경우 >> num의 결과:1
        this.PrintEvent2=this.PrintEvent2.bind(this);
        this.setToggle=this.setToggle.bind(this);
        this.changeColor=this.changeColor.bind(this);
    }
    //이벤트 안에서 작성한 함수 그대로 들고와서 사용 할 수 있다.
    //render에서 사용한 값을 쓸 수 없다.->this.state를 통해서 접근
    //name 값을 render에서 this.staste 값을 가져와서 this를 연결하지 않아도 사용가능
    //메소드에 바로 bind를 통해서 this를 묶어 줄 수 없다.
    //메소드만 만들어서 바로 사용하면 this를 찾지 못한다.
    //>>constructor에서 bind로 묶어서 사용
    PrintEvent(){
        console.log("이벤트 출력");
        console.log(this.state.name)
    }
    PrintEvent2(e){
        console.log(this.state.address);
        console.log(e.target,"이벤트 완료");
    }
    //this.setState사용해서 값 수정
    setToggle(){
        this.setState({toggle:!this.state.toggle})
    }
    changeColor(){
        this.setState({color:this.state.color="red"})
    }
  render() {
    //render안에서 this=EventComp
    //this.state는 constructor의 속성값
    let {name}=this.state;
    let a =this;
    return (
        //이벤트를 위한 버튼 생성
      <div>
        <h3>버튼을 클릭했을 때 콘솔에 "이벤트 실행" 출력</h3>
        <button
        //실행할 함수 내용이 짧을 때 (하살표 함수를 이용해서 바로 작성)
        //이벤트 객체 사용가능
        //this를 사용했을 때 자기자신(컴포넌트)클래스 호출
        //>클래스컴포넌트에서 사용하는 props과 state 호출 가능
        onClick={
            (e)=>{console.log(e,this)}
        }
        >화살표 함수를 사용해서 이벤트 실행</button>
        <button
        //익명함수를 사용해서 이벤트 객체 사용가능
        //this를 사용하면 연결된 객체가 없으므로 undefined 출력
        //html파일에서 js 익명함수를 들고오면 window객체로 들고 오지만
        //React에서는 익명함수를 들고오면 this의 값이 undefined이다.
        //React에서 익명함수를 사용할려면 함수의 this값을 연결
        //this값을 연결하기 위해 .bind()
        //return 안의 .bind(this)에서 불러오는 this = EventComp
        onClick={
            function(e){console.log(e,this)}.bind(this)
        }
        >
            익명함수를 사용해서 이벤트 실행
        </button>
        <h3>이벤트의 함수(메서드)를 따로 작성하는 방법</h3>
        <p>버튼을 눌렸을 때 콘솔에 출력,state를 생성하여 연결 name:"홍길동" 작성 후 출력
        </p>
        <button
        onClick={function(){
            console.log("이벤트 출력");
            //name 값을 render에서 this.staste 값을 가져와서 this를 연결하지 않아도 사용가능
            console.log(name)
        }.bind(this)
    }
        >메소드로 작성한 이벤트</button>
        <button
        //작성한 메서드를 들고올 때 this를 통해 가져온다
        onClick={this.PrintEvent}
        >메소드로 작성한 이벤트</button>
        {/*이벤트:메소드 만들기 실습 */}
        <p>
            버튼을 누르면 state의 adress:부산 을 출력하고
        콘솔에 이벤트 완료 출력
            </p>
        <button
        onClick={this.PrintEvent2}
        >
            이벤트
        </button>
    {/*this.setState를 사용하는 메소드 */}
    <button
    onClick={function(){
        this.setState({toggle:!this.state.toggle})
    }.bind(this)
    }>{this.state.toggle?"on":"off"}</button>
        <button
    onClick={this.setToggle}>{this.state.toggle?"on":"off"}</button>
      {/*
      state의 color="" 추가
      changeColor메서드 제작, 메서드에서 this.state.color 값을 "red" 로 수정
      */}
      <p
      onMouseEnter={this.changeColor} style={{color:this.state.color}}> p 태그에 마우스를 올리면 글자를 빨간색으로 바꾸기</p>
      </div>
    )
  }
}

export default EventComp;