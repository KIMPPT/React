import React, { Component } from "react";

export class MapComp extends Component {
  constructor(props) {
    super(props);
    //this .state에 들어가 있는 내용만 this.setState 사용
    this.state = {
      names: ["홍길동", "성춘향"],
      students: [
        { id: 1, name: "홍길동" },
        { id: 2, name: "성춘향" },
        { id: 3, name: "변사또" },
        { id: 4, name: "흥부" },
      ],
      inputText: "", //onChange를 이용해서 input의 value값 가져옴
    };
    //수정될때마다 값이 하면에 표현되지 않고,
    //값이 저장하고 싶을 때
    this.id = 5;
  }
  addstudent = () => {
    //React는 state값이 바뀔 때 마다 화면 업데이트
    //1. state.students에 배열의 요소를 추가하는 방법
    //  1) push : 기존 배열에 추가
    //  2) concat : 새로운 배열에 추가 후 return

    // push를 이용해서 직접접근해서 수정 할 수 있지만 화면에
    // 바로 업데이트 되지 않는다. >>onChange이벤트 발생 시 업데이트
    //button의 click 이벤트 발생 시 업데이트 안됨
    //setState()가 호출되면 화면 업데이트
    // push는 잘 사용하지 않는다.
    // this.state.students.push({id:4,name:this.state.inputText});
    // concat을 이용해서 새로운 배열을 만든 후 setState를 이용하여 추가
    // id값은 중복되지 않게 시용.1씩 증가
    // 1씩 증가 >배열의 길이값이 1씩 증가하기 때문에 이 점을 응용하기
    let newStudents = this.state.students.concat({
      id: this.id,
      name: this.state.inputText,
    });
    this.setState({ students: newStudents });
    // 속성값에 직접 접근해서 1 증가
    this.id++;
    //input태그의 value={} state값으로 연결하면
    //setState를 통해서 값을 수정 할 수 있다
    //접근하는 state의 이름이 다르면 따로 적어도 괜찮다
    //this.setState({students:newStudents, inputText:""})
    this.setState({ inputText: "" });
  };
  //전달해준 값을 사용하기 위해서 매개변수로 받아오기
  deleteStudent = (student) => {
    //1.  배열에서 값을 제거하는 방법
    //  1)pop,splice 등등 > 원래값에 제거하지 않음
    //  2)값을 제거하고 새로운 배열 생성 : filter
    //filter(걸러냄) : (value)=>return 참 일 때
    //value값을 return 배열에 넣어줌
    let newStudents = this.state.students.filter((s) => s.id !== student.id);
    this.setState({ students: newStudents });
  };
  render() {
    //배열의 map 함수 확인
    let array = [1, 2, 3, 4];
    //map 함수의 특징
    //.map((value,index,array)=>{return 값})
    //map에 함수를 넣어서 그 함수의 return 값으로 새로운 배열 작성
    //>return 값에 태그나 컴포넌트를 넣어서 반복 가능
    let arrayMap = array.map((value, index) => <p key={index}>{value * 2}</p>);
    return (
      <div>
        <hr />
        <h3>배열을 바로 출력</h3>
        <p>{array}</p>
        {arrayMap}
        <h3>map으로 만든 배열을 화면에 바로 출력가능</h3>
        {array.map((num, index) => (
          <p key={index}>
            {num * 3}
            {num * 3}
          </p>
        ))}
        {/*state값을 가져와서 출력 */}
        <ul>
          {this.state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        {/*input태그를 이용해서 값을 추가하고 state.students에 추가 
            1. input의 값을 저장할 state.inputText 변수작성
            2. onChange를 통해서 값을 받아옴(state.inputText)
            3. 버튼을 클릭했을 때 state.students에 추가
    */}
        <input
          type="text"
          //inputText에 값을 저장
          onChange={(e) => {
            this.setState({ inputText: e.target.value });
          }}
          value={this.state.inputText}
        />
        <button
          //버튼을 클릭했을 때 state.students에 {id:4, name:""}추가
          onClick={() => {
            this.addstudent();
          }}
        >
          이름 추가
        </button>
        {/*table에 배열의 객체 값 출력 */}
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>이름</td>
            </tr>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td
                  //이름을 눌렸을 때 이름을 가진 객체 삭제
                  //student의 값을 전달하기 위해서 화살표 함수로 감싸기
                  onClick={() => this.deleteStudent(student)}
                >
                  {student.name}
                </td>
              </tr>
            ))}
            {
              //컴포넌트의 props 값을 이용해서 값 전달가능
              this.state.students.map((student) => (
                <TableComp
                  key={student.id}
                  name={student.name}
                  id={student.id}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MapComp;

/* map에서 사용할 컴포넌트 */
class TableComp extends Component {
  //호출하는 컴포넌트(부모)에서 값을 받아서 씀: props
  render() {
    let { id, name } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    );
  }
}
