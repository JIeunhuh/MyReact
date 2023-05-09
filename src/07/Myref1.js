import { useState,useRef } from "react";
const Myref = () => {
    let cnt1 = 1;

    console.log(cnt1);
    const showCnt=()=>{
        console.log('cnt1 = ',cnt1++ , 'cnt2 = ',cnt,'cnt3 = ',cnt3.current);
       
    }
    const showCnt1=()=>{
        showCnt();
    }
    const showCnt2=()=>{
        setCnt(cnt+1);
        showCnt();
    }
    const showCnt3=()=>{
        cnt3.current = cnt3.current+1;
        showCnt();
    }
    const[cnt,setCnt]=useState(1);
    //ref변수 설정
    const cnt3= useRef(1);
    return (
        <main className="container">
            <article>
                <header>
                    <div>컴포넌트 변수 : {cnt1}</div>
                    <div>state 변수 : {cnt}</div>
                    <div>ref 변수 : {cnt3.current}</div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>컴포넌트 변수 </button>
                    <button onClick={() => showCnt2()}>state 변수 </button>
                    <button onClick={() => showCnt3()}>ref 변수 </button>
                </div>
            </article>
        </main>);
}
export default Myref;