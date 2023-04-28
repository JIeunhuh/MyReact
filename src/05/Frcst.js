import data from './dataFrcst.json'; //json data import해오기
import { useState, useEffect } from 'react';
import style from './Frcst.module.css'; 
const Frcst = () => {
    //날짜 순서대로 가져오기(배열로 만듦)
    const dtKey = ['frcstOneDt', 'frcstTwoDt', 'frcstThreeDt', 'frcstFourDt']
    const cnKey = ['frcstOneCn', 'frcstTwoCn', 'frcstThreeCn', 'frcstFourCn']
    //object 만들기
    let dtcn = {};
    // data[item]을 키값으로 가지고 옴 , 키값에 대응하는 data[cnKey[idx]]을 값으로 가지고 옴
    //.map() 이용해서 배열추가
    dtKey.map((item, idx) => dtcn[data[item]] = data[cnKey[idx]]);
    console.log(dtcn);
    //dtKey.map((date,weather)=>)
    //cnKey.map((item)=>console.log(data[item]));
    const [dt, setDt] = useState('');
    const [cn, setCn] = useState('');

    useEffect(()=>{
        console.log('dt', dt)
    }, [dt])


    //상세정보 보기
    const detail = (k) => {
        //console.log(k,dtcn[k]);
   
        //split으로 쪼개서 배열이 생김
        let dtcnItem = dtcn[k].split(',');
        setDt(k);
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        dtcnItem = dtcnItem.map((item) =>
            <div className='weather' key={item[0]}>
                <div className={style.w1}>{item[0]}</div>
                {item[1].trim() === '낮음'
                    ? <div className={style.w2}>{item[1]}</div>
                    : item[1].trim() === '보통'
                        ? <div className={style.w3}>{item[1]}</div>
                        : <div className={style.w4}>{item[1]}</div>
                }
            </div>)
        console.log(dtcnItem);
        setCn(dtcnItem);
    }
    //onclick event 달아주기1
    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) =>
        // <div className={dt === item ? style.tb1 : style.tb2}
        <div className={dt === item ? style.tb2 : style.tb1}
            key={item+idx}
            onClick={() => detail(item)}>
            {item}</div>
    );
    return (
        <main className='container'>
            <article>
                <h1>초 미세먼지 주간예보 ⛅</h1>
                <div className='grid'>
                    {dtTag}
                </div>
                <div className='grid'>{cn}</div>
            </article>
        </main>
    );


}
export default Frcst;