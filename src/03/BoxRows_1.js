import { useState } from "react";
import './box.css';
//const BoxRows = (probs) => { //probs 이용해서 box에 있는 data를 boxrows에 속성값으로 data를 전달
const BoxRows_1 = ({ mv }) => { //{} 이용해서 box에 있는 data 바로 가져옴
    //const mvList= [...probs.mv]; //spread 연산자(받은 배열을 펼쳐 놓는거?)
    //console.log("boxrows", mv);
    let trTags = [];
    const[footTag,setfootTag] = useState('영화를 선택하세요 :');
   //클릭된 자료확인
    const showMv = (row) => {
        console.log(row)
        setfootTag('['+row.movieCd +']'+' '+ row.movieNm+', '+' 개봉일 : '+row.openDt);
    }
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let inten = parseInt(row.rankInten);
        if (inten === 0) {
            icon = '⏺';
        }
        else if (inten > 0) {
            icon = '🔼';
        }
        else {
            icon = '🔽';
        } //증감 배열에 숫자 대신 아이콘 넣어주기
        trTags.push(
            <tr className="mmytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td className="font">{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}won</td>
                <td>{(inten === 0 ? ' ' : icon)} {(inten === 0 ? '' : Math.abs(inten))}</td>

            </tr>);
    }
    console.log(trTags);
    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tr className="tfoot">
                <td colSpan={4} className="font">{footTag}</td>
            </tr>
            
        </>
    );
}//삼항 연산자로 순위 변동 없으면 아이콘, 숫자 둘다 안나오게 함
export default BoxRows_1;