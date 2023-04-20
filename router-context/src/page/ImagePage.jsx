import React from "react";
//src에서 이미지를 들고 오는 방법
import logo from "../logo.svg";
export default function ImagePage() {
  return (
    <div>
      <h3>ImagePage</h3>
      <div>
        <img src="/logo192.png" alt="" />
        <img src="/image/logo192.png" alt="" />
        <p>public에서 가져오는 방법</p>
        <p>build 할 때 그 내용을 함께 가져감</p>
      </div>
      <hr />
      <div>
        <img
          src={require("../logo.svg").default}
          alt=""
          width={100}
          height={100}
        />
        <img src={logo} alt="" />
        <p>src에서 가져오는 방법</p>
        <p>1. src에 require("이미지주소").default를 붙이는 방법</p>
        <p>2. src 폴더에서 가져 올 때 import를 통해서 값을 가져 올 수 있다</p>
      </div>
      <div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: `url("/logo192.png")`,
          }}
        ></div>
        <p>style 백그라운드 이미지 확인 : public에서 들고온 값</p>
      </div>
      <div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: `url(${logo})`,
          }}
        ></div>
        <p>style 백그라운드 이미지 확인 : src에서 들고온 값</p>
      </div>
    </div>
  );
}
