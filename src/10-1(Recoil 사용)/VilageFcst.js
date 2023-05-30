import FcstTable from "./FcstTable";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import data from "./getcode.json";

const VilageFcst = () => {

    const dat = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    const area = useParams().area;

    const [fcst, setFcst] = useState([]);
    const [tags, setTags] = useState([]);
    const [cats,setCats]=useState([]);

    //입력값을 가져오기 위한 ref 변수
    const cat = useRef();

    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=2cTsIbMSNEakGj3HNSZtwQLbXXeuyM8AuaNHrr3dKA3L5Xi5w%2F0U6Rs3CwSIjl0DbsffGzIToXtTrtThSIlJCw%3D%3D&numOfRows=60&pageNo=1';
        url = url + `&base_date=${dat}`;
        url = url + '&base_time=0500';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;
        url = url + '&dataType=json';
        
        console.log(url);
        //fetch url
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => { setFcst(data.response.body.items.item) })
            .catch((err) => console.log(err));

    }, [])

    // useEffect(() => {
    //     console.log(fcst);
    // }, [fcst])

    let temp = data.filter((item) => item.예보구분 === "단기예보");
    let cate = temp.map((item) =>
        <option value={item.항목값} key={item.항목명}>
            {item.항목명 + '(' + item.항목값 + ')'}
        </option>);

    //clickBt() 만들기
    const clickBt = () => {
        console.log(cat.current.value);
        let tagarr = fcst.filter((item) => item.category === cat.current.value);
        let cate = temp.filter((i)=>i.예보구분==="단기예보" && i.항목값===cat.current.value);
        cate = cate[0];
        setCats(cate);
        setTags(tagarr);
        //console.log('tagarr ',tagarr);
    }
    return (
        <article>
            <div className="grid">
                <h5>{`${area} 단기예보(${dat})`}</h5>
                <select id="cat" ref={cat} required defaultValue='' onChange={() => clickBt()}>
                    <option value='' >선택</option>
                    {cate}
                </select>
            </div>
            {tags && <FcstTable tags={tags} cats={cats} />}
        </article>);
}
export default VilageFcst;