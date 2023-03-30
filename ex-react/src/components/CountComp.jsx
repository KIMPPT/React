import { Component } from "react";

class CountComp extends Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }
    }

    render(){
        let number=this.state.number;
        let {num}=this.props;
        return(
            <div>
                <h3>{num}</h3>
                <h3>{number}</h3>
                <button
                onClick={
                    ()=>{this.setState({number:number+10});
                }}
                >+10</button>
            </div>
        );
    }
}
export default CountComp;