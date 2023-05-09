const Taccident_nav3 = ({selData}) => {
   
   
    const tagKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

    let detail = tagKey.map((item, idx) => <div key={'k' + idx}>{item} {selData[item]}</div>)
    return (
        <div className="grid">{detail}</div>
    );
}
export default Taccident_nav3;