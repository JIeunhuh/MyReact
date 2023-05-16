import style from './Gallery.module.css';
import GallaryList from './GallaryList';
import { useEffect, useRef, useState } from 'react';
/*한국관광공사 관광사진갤러리 키워드 검색, 목록조회*/
const Gallary = () => {
    const [gList, setgList] = useState();
    const txt = useRef();
    //컴포넌트가 맨처음 랜더링 되면
    useEffect(() => {

        txt.current.focus();
    }, [])
    useEffect(() => {
        console.log("useEffect",gList);
    }, [gList])

    //등록버튼 onclick
    const showImg = (e) => {
        e.preventDefault();
        const kw = encodeURI(txt.current.value); //encodeURI()
        console.log(txt.current.value + ' ' + kw);
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=2cTsIbMSNEakGj3HNSZtwQLbXXeuyM8AuaNHrr3dKA3L5Xi5w%2F0U6Rs3CwSIjl0DbsffGzIToXtTrtThSIlJCw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=';
        url = url + kw + '&_type=json';
        //let apiservicekey = ' ' ; api가져올때 주소 끊어서 변수 만듬 ,(servicekey)
        //fetch()
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setgList(data.response.body.items.item))
            .catch((err) => console.log(err));
        
        console.log('url =' + url);
    };

    //취소버튼 onclick 
    const resetItem = () => {
        txt.current.value = '';
        txt.current.focus();
    };
    return (
        <main className="container">
            <article>
                <h1 className={style.h1}>한국관광공사 관광사진 정보</h1>
                <div className="grid">
                    <input type="text" ref={txt} id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                    <div>
                        <button onClick={(e) => showImg(e)} className={style.but}>등록</button>
                        <button onClick={() => resetItem()} className={style.but}>취소</button>
                    </div>
                </div>
                {gList && <GallaryList gList={gList} setgList={setgList} />}
            </article>
          
        </main>
    );
}
export default Gallary;