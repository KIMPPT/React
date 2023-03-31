import React, { Component } from 'react'

export class EventComp extends Component {
  render() {
    //render안에서 this=EventComp
    //this.state는 constructor의 속성값
    //let {}=this.state;
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
      </div>
    )
  }
}

export default EventComp;