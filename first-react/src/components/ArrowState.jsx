//16.8 이후로 함수형에서 state 사용 가능
import { useState } from "react";

//화면의 업데이트에 상관없이 사용하는 변수
//현재 컴포넌트에서 전역변수로 쓸 변수
let id2 = 4;

//함수의 컴포넌트의 특징
//1. this를 사용하지 않는다
//2. 안에 값을 넣어 줄 때 변수로 할당하므로 const나 let 사용
let ArrowState = () => {
  //useState는 항상 함수(컴포넌트) 안에 작성
  let [message, setMessage] = useState({
    time: "10:53",
    text: "메세지 입니다",
  });
  //useState는 여러 번 사용 할 수 있다.
  let [number, setNumber] = useState(0);
  let [array, setArray] = useState([1, 2, 3, 4]);
  //map을 이용하여 id 값과 name을 화면에 출력
  let [students, setStudent] = useState([
    { id: 1, name: "홍길동" },
    { id: 2, name: "성춘향" },
    { id: 3, name: "흥부" },
  ]);
  //message에는 useState("")의 "" 값이 들어간다.

  //학생 이름을 받아올 공간
  let [input, setInput] = useState("");

  //화면의 업데이트에 상관없이 사용하는 변수
  //언제 가지고 오느냐
  //클래스형에서는 render()안에 값이 계속 초기화
  //함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화
  let id = 4;
  //메소드 작성 - 익명함수나 화살표함수
  let inputChange = (e) => {
    setInput(e.target.value);
  };

  // 밑에서 작성한 추가하는 메서드를 위로 옮겨서 작성
  let addStudent = () => {
    //값을 받아와서 새로운 배열로 만들기
    //새로운 배열을 student에 할당
    let newStudent = students.concat({
      id: id2,
      name: input,
    });
    //위에 만든 새로운 배열을 student 배열에 추가
    id2++;
    setStudent(newStudent);
    //버튼 클릭 후 input 내용 초기화
    setInput("");
  };
  let deleteStudent = (id) => {
    let newStudent = students.filter((s) => s.id !== id);
    //여기서 주의할 부분 : filter의 students는 useState로 만드는 배열이고 그리고 비교할 부분의 s 는 () 안의 s여야 한다.
    // 즉, 이름을 같게 하면 서로 꼬이기 때문에 다르게 해야 한다.
    setStudent(newStudent);
  };
  return (
    <div>
      <p>
        {message.text},{number}
      </p>
      <button
        //useState로 작성함 함수를 통해서 값을 넣어줄 때 그 값의 자료형이 같지 않아도 넣어준다.
        //작성 할 때 그 값의 자료형을 확인하고 동일한 형태로 할당
        //객체의 일부분만 수정해서 넣을 때 사용하는 연산자 : ...(스프레드 연산자)
        // ... : 객체나 배열 안에 있는 값(요소)를 꺼내서 사용
        onClick={() => {
          setMessage({ ...message, text: "수정된 내용입니다" });
        }}
      >
        글자값 수정
      </button>
      {array.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
      <input type="text" onChange={inputChange} value={input} />
      <button onClick={addStudent}>학생 추가</button>
      {students.map((student, index) => (
        <li
          key={index}
          //클릭했을 때 배열 삭제 > 클래스형 컴포넌트 내용 참고
          onClick={() => deleteStudent(student.id)}
        >
          {student.id},{student.name}
        </li>
      ))}
    </div>
  );
};
export default ArrowState;
