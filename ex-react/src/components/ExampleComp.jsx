import React, { Component } from 'react';

export class ExampleComp extends Component {
  render() {
    let addNum = (a, b) => {return a + b};
    let orjReturn =()=>{return {id:1, name:"객체"}}
    let array=[1,2,3,4]
    let arrayMap1=array.map((x)=>x*2)
    let arrayMap2=array.map((x)=>String(`"${x}"`))
    let arrayMap3=array.map((x)=>(x%2==0?x*2:x))
    let array1=[1,2,3,4,5,6,7]
    let arrayFilter1=array1.filter((x)=>x%2==0)
    let arrayFilter2=array1.filter((x)=>x<5)
    let arrayFilter3=array1.filter((x)=>x!=6)
    let status={id:1,name:"홍길동",checked:true}
    return (
      <div>
        <p>{addNum(1, 3)}</p>
        <p>{typeof addNum(1, 3)}</p>
        <p>{typeof(orjReturn)}</p>
        <p>{arrayMap1}</p>
        <p>{arrayMap2}</p>
        <p>{arrayMap3}</p>
        <p>{arrayFilter1}</p>
        <p>{arrayFilter2}</p>
        <p>{arrayFilter3}</p>
      </div>
    );
  }
}

export default ExampleComp;
