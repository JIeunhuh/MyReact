// const MyDivArticle = (probs) => { // probs
// 매개변수를 probs 사용하지 않고 object에 매개변수 명을 넣어서 사용
import './MyDiv.css'; //전역으로 css 적용
import style from './MyDiv.module.css'; //module.css 적용(컴포넌트에만 적용 ; 확장자 이름 고정)
//state 변수 사용
import { useState } from 'react';
const MyDivArticle = ({ aname }) => {
    // const aname = probs.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1); //삼항연산자 사용
    //console.log(n);
    //let cnt = 0;
    //clict event 처리
    const like = () => {
        //cnt = cnt+1;
        //state 변수 사용 3단계 ; 변수 내용 변경
        setCnt(cnt+1);
        console.log(cnt);
    }
    //state 변수 사용 2단계 ; 선언(배열로 선언 해야함)
    const [cnt,setCnt] =useState(0);
    return (
        <article>
            <header>
                <h1 className={style.mah1}>{aname || 'MyDiv0'}</h1>
            </header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === 0 ? 'MyDiv0' : 'MyDiv' + n}-1</li>
                <li className={style.ali}>{'MyDiv' + n}-2</li>
            </ul>
            {n === '1' ?
                <footer>
                    <h2><span onClick={()=>like()}>💖</span> {cnt} </h2> 
                </footer>
                : ''}
        </article>

    );
}
export default MyDivArticle;