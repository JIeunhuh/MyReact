import style from './Gallery.module.css';
import { useEffect, useRef } from 'react';
/*한국관광공사 관광사진갤러리 키워드 검색, 목록조회*/
const Gallary = () => {
    const txt = useRef();
    //컴포넌트가 맨처음 랜더링 되면
    useEffect(() => {

        txt.current.focus();
    }, [])

    //등록버튼 onclick
    const showImg = (e) => {
        e.preventDefault();
        const kw =encodeURI(txt.current.value); //encodeURI()
        console.log(txt.current.value+' '+kw);
    };

    //취소버튼 onclick 
    const resetItem = () => {

    };
    return (
        <main className="container">
            <article>
                <h1>한국관광공사 관광사진 정보</h1>
                <div className="grid">
                    <input type="text" ref={txt} id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                    <div className={style.but}>
                        <button onClick={(e) => showImg(e)}>등록</button>
                        <button onClick={() => resetItem()}>취소</button>
                    </div>
                </div>
            </article>
        </main>
    );
}
export default Gallary;