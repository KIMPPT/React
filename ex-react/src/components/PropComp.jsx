import { Component } from "react";

class PropComp extends Component{
    render(){
        let {color,children}=this.props;
        return(
                <div style={{color:color}}>{children}</div>
        );
    }
}
export default PropComp;