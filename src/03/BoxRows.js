//const BoxRows = (probs) => { //probs 이용해서 box에 있는 data를 boxrows에 속성값으로 data를 전달
const BoxRows = ({ mv }) => { //{} 이용해서 box에 있는 data 바로 가져옴
    //const mvList= [...probs.mv];
    //console.log("boxrows", mv);
    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let inten = parseInt(row.rankInten);
        if (inten === 0) {
            icon='⏺';
        }
        else if (inten > 0) {
            icon='🔼';
        }
        else {
            icon='🔽';
        } //증감 배열에 숫자 대신 아이콘 넣어주기
        trTags.push(
            <tr className="mmytr" key={row.movieCd}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}원</td>
                <td>{icon} {Math.abs(inten)}</td> 

            </tr>);
    }
    console.log(trTags);
    return (
        <>
            {trTags}
        </>
    );
}
export default BoxRows;