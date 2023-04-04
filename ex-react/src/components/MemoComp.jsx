import React, { Component } from 'react';

export class MemoComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [
        { id: 1, memo: '기록', time: new Date() },
        { id: 2, memo: '연습', time: new Date() },
      ],
      inputText: '',
      style: {
        disabled: true,
      },
    };
  }
  addMemo = () => {
    let newMemos = this.state.memoList.concat({
      //id++는 후위연산자로 값을 할당(모든연산)이 끝난 후에 값을 1 증가
      id: this.state.memoList.length + 1,
      memo: this.state.inputText,
      time: new Date(),
    });
    this.setState({ memoList: newMemos });
  };
  //filter를 사용 : 동일한 id를 제외한 나머지 배열을 생성
  //주의할 부분 : 매개변수와 filter에 쓸 bool 식 안의 변수값을 다르게 설정한다.
  //filter((새로 만들 배열이름)=>조건부), 새로 만든 배열이 return됨
  deleteMemo = (id) => {
    let deleteMemos = this.state.memoList.filter((m) => m.id !== id);
    this.setState({ memoList: deleteMemos });
  };
  //시간값을 편하게 출력하기 위한 메소드
  //return 에서 memo.time.getHours로 값이 받아와졌기 때문에 매개변수를 지정해야함
  //가능하면 this.setState 사용하지 않음
  printClock = (time) => {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    //return은 되도록이면 글자나 숫자 같은 문자열로 출력하는걸 추천
    return `${hour}시${minute}분${second}초`
  };
  render() {
    //항상 똑같은 값이나 this.state 같은 값들을 쉽게 쓰고 싶을 때
    //render는 값을 시작하면 항상 초기호가 된다
    return (
      <div>
        <input
          type="text"
          style={{ backgroundColor: 'yellow' }}
          //{placeholder: '입력한 메모를 적으세요'}
          placeholder="메모"
          onChange={(e) => {
            this.setState({ inputText: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.addMemo();
          }}
        >
          메모 추가
        </button>
        <ul>
          {this.state.memoList.map((memo, index) => (
            <li
              key={index}
              onClick={() => {
                this.deleteMemo(memo.id);
              }}
            >
              {memo.id + '번째-' + memo.memo + '-' + this.printClock(memo.time)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MemoComp;
