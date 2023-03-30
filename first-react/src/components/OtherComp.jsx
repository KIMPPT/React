import { Component } from "react";
import {PropTypes} from "prop-types";
class OtherComp extends Component{
    render()
    {
        const {name}=this.props;
        return(
            <div>{name}</div>
        );
    }
}
//props이 전달되지 않았을 때 undefined 대신 기본으로 들어갈 값

OtherComp.defaultProps = {
    name:"기본이름"
}
//prop-types 라이브러리 설치 후 사용
//다른 자료형이 ㄷ르어가면 콘소렝 오류로 알려줌
OtherComp.propTypes = {
    name: PropTypes.string
}
export default OtherComp;