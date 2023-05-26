import { useState, useEffect } from "react";
import CodeList from "./CodeList";
const CodeGubun = () => {
    const [sel, setSel] = useState();
    const selItem = (e) => {
        // console.log(e.target.value);
        setSel(e.target.value);

    }
    // useEffect(()=>{
    //     console.log(sel);
    // },[sel]) //sel이 바뀔때마다 useEffect 함수가 실행됨 
    return (
        <>
            <h1>code</h1>
            <form>
                <select id="sel" name="sel" onChange={selItem}>
                    <option value="">선택</option>
                    <option value="단기예보">단기예보</option>
                    <option value="초단기예보">초단기예보</option>
                </select>
                {sel && <CodeList sell={sel} />}
            </form>
        </>
    );
}
export default CodeGubun;