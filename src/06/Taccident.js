import Taccidentdata from './dataTaccident.json';
import Taccident_nav1 from './Taccident_nav1';
import Taccident_nav2 from './Taccident_nav2';
import { useState, useEffect } from "react";
import Taccident_nav3 from './Taccident_nav3';
import style from './Tacci.module.css';

const Taccident = () => {
    const data1 = Taccidentdata['data'];
    let category = data1.map((item) => (item.사고유형_대분류));
    let category2 = data1.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    //.map() 이용
    //for of 이용
    // for (let item of data1) {
    //    let temp =[];
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    //     category2.push(temp);
    // }
    category = new Set(category); //중복 데이터 제거
    category = [...category]; //배열로 바꿔쥼(spread 연산자)
    // console.log(category);
    // console.log(category2);

    const [sel1, setSel1] = useState(0); //대분류 선택
    const [sel2, setSel2] = useState(0); //중분류 선택
    const [selData, setSelData] = useState({});
    // useEffect(() => {
    //     console.log('Taccident sel1 []', sel1);
    // }, []);
    useEffect(() => {
        console.log('Taccident sel1', sel1);
    });
    useEffect(() => {
        console.log('Taccident sel2', sel2);
        let temp = data1.filter((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]);
        setSelData(temp[0]);
    }, [sel2]);
    useEffect(() =>
        console.log('Taccident sel2', selData), [selData]);
    return (
        <main className='container'>
            <article>
                <Taccident_nav1 c1={category} sel1={sel1} setSel1={setSel1} />
                <Taccident_nav2 c2={category2} sel2={sel2} sel1={sel1} setSel1={setSel1} setSel2={setSel2} selData={selData} setSelData3={setSelData} />
                {selData && <Taccident_nav3 selData={selData}/>}
            </article>
            
        </main>

    );
}
export default Taccident;