import React, { Component } from 'react'

export class MapComp extends Component {
    constructor(props){
        super(props);
        //this .state에 들어가 있는 내용만 this.setState 사용
        this.state={
            names:["홍길동","성춘향"],
            students:[{id:1, name:"홍길동"},{id:2, name:"성춘향"},{id:3, name:"변사또"}]
        };
    }
  render() {
    //배열의 map 함수 확인
    let array=[1,2,3,4];
    //map 함수의 특징
    //.map((value,index,array)=>{return 값})
    //map에 함수를 넣어서 그 함수의 return 값으로 새로운 배열 작성
    //>return 값에 태그나 컴포넌트를 넣어서 반복 가능
    let arrayMap=array.map((value,index)=><p key={index}>{value*2}</p>)
    return (
      <div>
        <hr/>
        <h3>배열을 바로 출력</h3>
        <p>{array}</p>
        {arrayMap}
        <h3>map으로 만든 배열을 화면에 바로 출력가능</h3>
        {array.map((num,index)=><p key={index}>{num*3}{num*3}</p>)}
        {/*state값을 가져와서 출력 */}
        <ul>
        {this.state.names.map((names,index)=>{<li key={index}>{names}</li>})}
        </ul>
      </div>
    )
  }
}

export default MapComp