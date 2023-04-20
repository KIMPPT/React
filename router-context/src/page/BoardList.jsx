import React from 'react'
import data from '../data/dummy.json'

import { useState,useContext } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

// json을 이용한 데이터를 들고와서  
// 목록 출력
export default function BoardList() {
  //const [dataList, setDataList] = useState(data);
  //DataContext에서 값을 가져와서 사용하기
  //{state:{boardlist},action:{setBoardlist}}
  let value=useContext(DataContext);
  return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                //dataList 대신 DataContext에 넣은 내용을 씀
                value.state.boardlist.map((data)=>(
                    <li key={data.id}>
                        <span>🤍</span>
                        <span>🧡</span>
                        <Link to={`/boardlist/${data.id}`}>
                            {data.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
