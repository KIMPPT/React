import React from 'react'
import { useState,useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import DataContext from '../context/DataContext';
export default function LoginForm() {
    let [writer,setWriter]=useState();
    //객체의 구조 분해를 통해서 원하는 속성만 가져옴(action)
    let {action}=useContext(DataContext);
    //로그인 메서드
    //변수로 자주 사용하는 이름이라면 헷갈리지 않도록 앞이나 뒤에
    //동사를 붙여서 메서드임을 알림

    let navigate=useNavigate();
    let onLogin=()=>{
        //1. user의 객체를 만듬
        let newUser={
            writer:writer,
            login:true,
        }
        //2. set메서드를 통해서 수정 >>DataContext값 가져옴
        action.setUser(newUser);
        //home 또는 boardlist로 이동
        navigate('/boardlist');
    }
  return (
    <div>
        <h3>LoginForm</h3>
        <label htmlFor="">id를 입력해주세요</label>
        <br />
        <input type="text" name="" id="" 
        onChange={(e)=>{setWriter(e.target.value)}}
        />
        <button
        onClick={onLogin}>로그인</button>
    </div>
  )
}
