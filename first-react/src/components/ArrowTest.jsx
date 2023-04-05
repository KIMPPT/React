let ArrowTest=(props)=>{
    let {name,check,children}=props;
    return <div>
        <h3>{name}</h3>
        <p>{check?name:""}</p>
        <p>{children}</p>
    </div>
}
export default ArrowTest;