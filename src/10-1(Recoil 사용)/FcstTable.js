//import data from './getcode.json';
//import { useRef } from 'react';
import style from './Fcst.module.css';
const FcstTable = ({ tags, cats }) => {
    console.log(tags);
    // const cate = useRef(cat);
    //console.log(tags1);

    //예보
    let tag1 = [];
    for (let row of tags) {
        let skyc = {
            '1': <span className="material-symbols-outlined" id={style.sky}>
                sunny
            </span>, '3': <span className="material-symbols-outlined" id={style.sky1}>
                partly_cloudy_day
            </span>, '4': <span className="material-symbols-outlined" id={style.sky2}>
                cloudy
            </span>
        };
        console.log(cats);
        tag1.push(
            <tbody>
                <tr key={row.category + row.fcstDate}>
                    <td>{cats.항목명}</td>
                    <td>{row.fcstDate}</td>
                    <td>{row.fcstTime}</td>
                    {(row.category === 'SKY') ? <td>{skyc[row.fcstValue]}</td> : <td>{row.fcstValue}{cats.단위}</td>}
                </tr>
            </tbody>
        )
    }


    return (
        <table>
            <thead>
                <tr>
                    <th scople="col">항목명</th>
                    <th scople="col">예측일자</th>
                    <th scople="col">예측시간</th>
                    <th scople="col">예보값</th>
                </tr>
            </thead>
            {tag1}

        </table>);
}
export default FcstTable;