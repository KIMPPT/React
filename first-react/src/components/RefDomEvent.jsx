import React, { Component } from 'react'
//컴포넌트에서 원하는 컴포넌트를 들고와서 사용가능
import EventComp from './EventComp'
export class RefDomEvent extends Component {
  constructor(props){
    super(props);
    //1. input태그가 들어갈 공간(변수)
    this.textInput=null;
    //2. ref 콜백함수를 통해 DOM에 접근
    //  1) ref에 들어갈 함수 작성-화살표함수
    this.setTextInputRef=(element)=>{
        //2) element를 통해서 ref를 통해 DOM 가져옴
        this.textInput=element;
        //3) 저장해서 쓰기 위해 만든 공간에 할당
    };
    //16.3버전 이후 사용가능
    this.myRef=React.createRef();
    //ref 연습
    //1. ref 콜백 함수
    this.inputBackground=null;
    this.setInputBackground=(element)=>{
      this.inputBackground=element;
    }
    //2. createRef 작성해서 받는 방법
    this.inputBackgroundRef=React.createRef();
    
    //직접작성한 컴포넌트도 ref를 통해 들고 올 수 있다.
    this.myComp=React.createRef();
  }

//this.tetInput 접근
  textInputEvent=()=>{
      if(this.textInput)
    {
        //ref를 통해서 DOM을 가져와서 그 안에 있는 내용에 JS에서 id를 통해 가져온 것 처럼 접근 할 수 있다.
        this.textInput.focus();
    }
  }

  //myRef.current 접근
  myRefEvent=()=>{
    if(this.myRef.current){
      this.myRef.current.focus();
    }
  }
    render() {
    return (
      <div>
        <h1> Ref를 통해 input 가져오기</h1>
        <input type="text" 
        //3. ref 속성을 이용해서 this.setTextInputRef를 호출
        ref={this.setTextInputRef}
        />
        {/*input태그가 들고 와졌는지 확인 */}
        <button
        onClick={()=>{console.log(this.textInput)}}>console에 textInput 값 출력</button>
        <button
        onClick={()=>{this.textInputEvent()}}
        >이 버튼을 누르면 input 포커스가 잡힙니다</button>
        <input type="text"
          ref={this.myRef}
        />
        <button
        onClick={()=>{console.log(this.myRef.current)}}>
          myRef의 값 확인
        </button>
        <button
        onClick={this.myRefEvent}>
          myRef 포커스
        </button>
        <hr/>
        <h1>콜백 함수로 받아서 쓰는 방법</h1>
        <input type="text" 
        ref={this.setInputBackground}
        />
        <button
        onClick={
          ()=>{
            this.inputBackground.style.backgroundColor="red";
          }
        }
        >색을 바꿉니다</button>
        <hr/>
        <h1>createRef로 받아서 쓰는 방법</h1>
                <input type="text" 
        ref={this.inputBackgroundRef}
        />
        <button
        onClick={
          ()=>{
            this.inputBackgroundRef.current.style.backgroundColor="red";
          }
        }
        >색을 바꿉니다</button>
        {/*이벤트 컴포넌트 */}
        <hr/>
        <h3>컴포넌트를 불러와서 ref 를 통해 가져 올 수 있다.</h3>
        <EventComp ref={this.myComp}/>
        <button
        //컴포넌트를 ref로 들고오게 되면 그 컴포넌트에 있는 메소드,state,props에 모두 접근 할 수 있다.
        //state와 props의 경우 값을 가져 올 수 있고 메소드의 경우 메소드를 실행 할 수 있다.
        //>부모에서 자식 컴포넌트의 값을 가져오거나, 메소드를 실행하고 싶을 때 사용 가능
        onClick={()=>{console.dir(this.myComp.current)}}
        >
          ref로 들고온 myComp 확인
        </button>
        <hr/>
        <h3>React에서 이벤트를 사용 할 때 화살표함수/익명함수에 넣어서 사용하는 이유</h3>
        <p>JS에서 addEventLister를 사용하는 이유와 동일</p>
        <p>addEventLister를 사용 할 때 함수를 넣을 때 함수이름을 넣어서 실행.</p>
        <p>그래서 함수이름() 실행한 결과를 넣어주면, 이벤트가 실행할때마다 되는것이 아니라,</p>
        <p>화면이 랜더 할 때 실행</p>
      </div>
    )
  }
}

export default RefDomEvent;