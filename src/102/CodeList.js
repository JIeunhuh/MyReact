import data from "../10/getcode.json";
import { useState, useEffect } from "react";
const CodeList = ({ sell }) => {
    // console.log(sell);
    // console.log(data);
    let temp = [];
    temp = data.filter((item) => item.예보구분 === sell);
    //console.log(temp);
    let category = temp.map((item, idx) => <option value={item.항목값} key={item.항목값 + idx}>{item.항목명 + '(' + item.항목값 + ')'}</option>);
    //console.log(category);
    return (
        <>
            <select id='sel2' name="sel2" defaultValue='' >
                <option value=''>선택</option>
                {category}
            </select>
        </>);
}
export default CodeList;