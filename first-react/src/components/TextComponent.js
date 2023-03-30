import { Component } from "react";

class TextComponent extends Component{

    render(){
        let {name,children}=this.props;
        let prop=this.props;
        console.log(prop);
        return(
            <div>
                <h1>{children}</h1>
                <p>{name}님</p>
            </div>
        );
    }
}

export default TextComponent;