//16.8 이후로 함수형에서 state 사용 가능
import { useState } from "react";
//CSS 파일 가져오기
import "./arrowState.css";
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
    { id: 1, name: "홍길동", checked: true },
    { id: 2, name: "성춘향", checked: false },
    { id: 3, name: "흥부", checked: true },
  ]);
  //message에는 useState("")의 "" 값이 들어간다.

  //화면의 업데이트에 상관없이 사용하는 변수
  //언제 가지고 오느냐
  //클래스형에서는 render()안에 값이 계속 초기화
  //함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화
  let id = 4;
  //메소드 작성 - 익명함수나 화살표함수
  let inputChange = (e) => {
    setInput(e.target.value);
  };

  //학생 이름을 받아올 공간
  let [input, setInput] = useState("");

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
    // 즉, 이름을 같게 하면 서로 꼬이기 때문에 다르게 해야 한다. 출력부분에 id값 자체를 받아 올 거기 때문에 id로 바로 씀
    setStudent(newStudent); //위 배열을 기존 배열에서 수정함
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
          //해당 student의 checkbox의 값에 따라 스타일 변경[class이름을 추가하거나 제거]
          className={student.checked ? "on" : ""}
        >
          <input
            type="checkbox"
            checked={student.checked} //checked 값을 이미 입력된 배열에서 확인 한 후 대입
            readOnly //콘솔창에 에러 뜨는것에 대비
            onClick={() => {
              //체크박스를 클릭하면, 클릭한 객체의 chekced 값이 바뀜
              //map을 이용하여 작성
              let newStudents = students.map((s) => {
                //s를 통해서 각각의 객체값 확인
                //1) 클릭한 체크박스의 id 값 과 모든 s의 id와 비교
                //2) id값이 같지 않다면 원래 객체
                //3) id 값이 같다면 checked 값을 !을 이용하여 수정한 객체
                if (student.id !== s.id) {
                  return s;
                } else {
                  //원래 객체에서 checked 값만 수정하기 위해서
                  //s 안에 있는 속성을 ...(스프레드 연산자)를 이용해서 추가
                  //수정할  속성인 chekced를 작성해서 수정
                  return { ...s, checked: !s.checked };
                }
              });
              //위에 만든 새 배열인 newStudents를 student에 넣음
              setStudent(newStudents);
              //map() : 배열안의 요소의 값을 return을 통해 새로운 배열로 만듬
              //클릭한 객체를 찾았다면 > 그 객체의 checked 값을 수정해서 return으로 넣어줌
            }}
          />
          {student.id},{student.name}
          <button
            //클릭했을 때 배열 삭제 > 클래스형 컴포넌트 내용 참고
            onClick={() => deleteStudent(student.id)}
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};
export default ArrowState;
