import { useEffect, useState, useRef } from "react";
import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
import data from "./getcode.json";

//초단기 예보
const UltraSrtFcst = () => {

    const [Fcst, setFcst] = useState([]); //초기값을 빈배열로 설정해줌

    const dat = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    const area = useParams().area;

    //입력값을 가져오기 위한 ref 변수
    const cat = useRef();

    //fsct 넣어줄 빈 배열 하나 만듦

    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=2cTsIbMSNEakGj3HNSZtwQLbXXeuyM8AuaNHrr3dKA3L5Xi5w%2F0U6Rs3CwSIjl0DbsffGzIToXtTrtThSIlJCw%3D%3D';
        url = url + '&pageNo=1';
        url = url + '&numOfRows=1000';
        url = url + '&dataType=json';
        url = url + `&base_date=${dat}`;
        url = url + '&base_time=0630';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;


        fetch(url)
            .then((resp) => resp.json())
            .then((data) => { setFcst(data.response.body.items.item) })
            .catch((err) => console.log(err));


    }, []);

    useEffect(() => {

    }, [Fcst])

    let cate = data.map((item) =>
        <option value={item.예보구분} key={item.예보구분}>
            {item.항목명 + '(' + item.항목값 + ')'}
        </option>);


    // for (let row of category) {

    //     tags.push(
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td>{row.category}</td>
    //                     <td>{row.fcstDate}</td>
    //                     <td>{row.fcstTime}</td>
    //                     <td>{row.fcstValue}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     )
    // }
    console.log(Fcst);

    return (<article>
        <div className="grid">
            <h5>{`${area} 초단기예보(${dat})`}</h5>
            <select id="cat" ref={cat} required>
                <option value='' selected>선택</option>
                {cate}
            </select>
        </div>
        <FcstTable />
    </article>);
}
export default UltraSrtFcst;