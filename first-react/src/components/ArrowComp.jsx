const ArrowComp = (props) => {
    let {text,children}=props;
  return (
    <div>
      <h3>화살표 함수로 만든 컴포넌트입니다</h3>
      <p>다른줄입니다</p>
      <p>text속성으로 가져온 props값 : {text}</p>
      <p>{children}</p>
    </div>
  );
};
export default ArrowComp;
