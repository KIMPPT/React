//import React, { PureComponent } from 'react';
import { Component } from "react";
class StateComp extends Component{
    //state 컴포넌트 안에서 사용되는 변수
    constructor(props){
        //constructor를 사용하면 props를 따로 연결
        super(props);
        //this.state안에 객체형태로 값을 작성 할 수 있다.
        this.state={
            number:0,
            name:"홍길동"
        }
    }
    //화면에 출력되는 html
    //가상돔을 확면에 출력하기위해 render()를 호출
    //호출을 하게 되면 render안에서 사용한 변수는 초기화가 된다.
    //초기화가 되지않으려면 전역변수 또는 this.state 를 사용
    render(){
        //this.state로 접근해서 값을 비구조화 할당을 통해 사용
        let {number,name}=this.state;
        let count=0;
        //return의 html 안에서 직접 불러와서 사용
        return( 
            <div>
                <h2>{name}</h2>
                <h3>{number}</h3>
                <h3>{this.state.number}</h3>
                <button //React에서는 화살표 함수 사용
                onClick={
                    ()=>{this.setState({number:number+1,name:"성춘향"})
                }}
                >+1</button>
                <button
                onClick={
                    ()=>{
                        count++;
                        console.log(count)
                    }
                }>
                    count+1
                </button>
                {/*버튼을 눌렸을 때 number 값이 1씩 감소 */}
                <button
                onClick={
                    ()=>{
                        this.setState({number:number-1})
                    }
                }>
                    count-1
                </button>
                {/*버튼을 눌렸을 때 number 값이 0으로 됨 */}
                <button
                onClick={()=>{
                    this.setState({number:0})
                }}>
                    count=0
                </button>
                </div>
        );
    }
}
export default StateComp;