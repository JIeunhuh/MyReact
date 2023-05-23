import data from './getcode.json';
const FcstTable = ({ tags}) => {
    console.log(tags);
    //console.log(tags1);

    //초단기예보
    let tag1 = [];
    for (let row of tags) {

        tag1.push(
            <tbody>
                <tr>
                    <td>{row.category}</td>
                    <td>{row.fcstDate}</td>
                    <td>{row.fcstTime}</td>
                    <td>{row.fcstValue}</td>
                </tr>
            </tbody>
        )
    }

    //단기예보
    // let tag2 = [];
    // for (let row of tags1) {
    //     tag2.push(
    //         <tbody>
    //             <tr>
    //                 <td>{row.category}</td>
    //                 <td>{row.fcstDate}</td>
    //                 <td>{row.fcstTime}</td>
    //                 <td>{row.fcstValue}</td>
    //             </tr>
    //         </tbody>
    //     )
    // }

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