import React, { Component } from "react";

//클래스형 컴포넌트에서 라이프 사이클 작성
export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
    };
    //속성 또는 필드 라고도 이야기
    //현재 컴포넌트에서 전역으로 사용하고 싶을 때
    this.timerID="";
  }
  //라이프 사이클 메서드-마운트 되었을 때 : 시작했을 때
  //컴포넌트가 보이는 한번만 실행
  componentDidMount() {
    console.log("마운트가 되었습니다");
    //처음 한 번 실행하는 내용 작성
    //또는 외부(공공데이터)에서 값을 한번만 가져올 때
    //setInterval(()=>{this.tick},1000)
    setInterval(this.tick, 1000);
  }
  //라이프 사이클 메서드-업데이트 되었을 때,화면이 바뀌었을 때
  //현재 컴포넌트가 업데이트 될 때 마다 실행
  //(New props-props값을 새로 들고 올 때,setState()-값이 바뀔 때,forceUpdate())
  componentDidUpdate() {
    //모든 업데이트 마다 실행할 내용 작성가능
    console.log("업데이트 되었습니다");
  }
  //라이프 사이클 메서드-
  componentWillUnmount() {
    console.log("컴포넌트가 언마운트 되었습니다");
  }
  //화면에 시간 출력 메소드
  printClock = (time) => {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    return `${hour}시${minute}분${second}초`;
  };
  //시간값을 다시 할당 메소드
  tick = () => {
    //setState를 사용 할 때 마다 업데이트발생
    this.setState({ date: new Date() });
  };
  render() {
    return (
      <div>
        <h3>라이프 사이클</h3>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          count+1
        </button>
        <hr />
        <h3>시계: {this.printClock(this.state.date)}</h3>
      </div>
    );
  }
}

export default LifeCycle;
