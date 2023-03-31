import React, { Component } from 'react'

export class EventComp extends Component {
    //state 작성
    constructor(props){
        super(props);
        this.state={
            name:"홍길동",
            address:"부산",
            toggle:true,
            color:"",
            input:"",
            inputNickname:"",
            inputBook:""
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
    //this.setState를 통해 color 값 수정
    changeColor(e){
        //e:이벤트 객체를 들고와서 e.type을 통해서 이벤트 구분가능
        //이벤트의 type에 따라서 setState에 값을 다르게 넣을 수 있다.
        //onMouseLeave에 changeColor를 추가하여
        //onMouseLeave이벤트가 발생했을 때는 color:"" 
        {e.type==="mouseenter"?this.setState({color:"red"}):
        this.setState({color:""})
    }}
        //onChange 공용메소드
        onInputChange=(e)=>{
            //inputNickname을 그대로 사용하면 inputNickname만 값이 들어옴
            //e.target.name:name속성값을 가져와서 사용
            //변수값을 사용할려면 []에 담아서 사용해야함
            this.setState({[e.target.name]: e.target.value});
          }
        //화살표함수를 가지는 메소드
        arrowPrint=()=>{console.log("이벤트 출력");
        console.log(this.state.name)}
    changeName=()=>{
        this.setState({name:"성춘향"})
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
      
      onMouseEnter={this.changeColor} style={{color:this.state.color}}
      onMouseLeave={this.changeColor}
      > p 태그에 마우스를 올리면 글자를 빨간색으로 바꾸기</p>
      {/*화살표함수로 메소드 만들어서 사용하기 */}
      <button
      onClick={()=>{console.log("이벤트 출력");console.log(this.state.name)}}>
        화살표 함수를 사용한 이벤트
      </button>
      <button
      onClick={this.arrowPrint}>
        화살표 함수를 사용한 이벤트
      </button>
      {/*화살표 함수를 이용해서 버튼을 클릭했을 때 name값을 성춘향으로 바꾸기 */}
      <button
      onClick={this.changeName}>
        {name}
      </button>
      {/*form-input 태그의 값 사용하기 */}
      <h3>input 태그에서 값을 가져올 state를 onChange를 사용해서 수정</h3>
      <p>{this.state.input}</p>
      <input type="text" name="" id="" 
      onChange={(e)=>{
        console.log(e.target.value) //이벤트 개체의 타겟의 값을 불러옴
        this.setState({input:e.target.value})
        //setState는 비동기로 움직이므로 바로 state에 접근해서 값을 출력하면 이전 값이 나온다.
        console.log("input",this.state.input)
    }
}
      />
      {/*change 공용함수 만들기 : 사용하지 않아도 무관 */}
      <h3>input 2개에서 값 받아오기</h3>
      <p>inputNickname의 값 : {this.state.inputNickname}</p>

      <input 
      name='inputNickname' //state의 속성이름과 동일
      type="text"
      onChange={this.onInputChange}
      />
            <p>inputBook의 값 : {this.state.inputBook}</p>
    <input 
        name='inputBook'
      type="text"
      onChange={this.onInputChange}
      />
      </div>
    )
  }
}

export default EventComp;