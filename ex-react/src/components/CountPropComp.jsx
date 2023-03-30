import { Component } from 'react'

export class CountPropComp extends Component {
    constructor(props){
        super(props);
        this.state={
            number:0
        }
    }
  render() {
    let {num}=this.props;
    let {number}=this.state;
    return (
        <div>
            <h4>{number}</h4>
            <button
            onClick={
                ()=>{
                    this.setState({number:number+num})
                }}>{num}</button>
        </div>
    )
  }
}

export default CountPropComp