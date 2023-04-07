let Down=(props)=>{
    let {num,text,children}=props
    text="하위텍스트입니다"
    return(
    <div>
        <p>상위num:{typeof(num)}</p>
        <p>하위num:{num=4}</p>
        <p>상위text:{text}</p>
        <p>{typeof(children)}</p>
    </div>
    ) 
}
export default Down;