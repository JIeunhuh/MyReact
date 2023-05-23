import { useEffect, useState, useRef } from "react";
import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
import data from "./getcode.json";

//초단기 예보
const UltraSrtFcst = () => {

    const [Fcst, setFcst] = useState([]); //초기값을 빈배열로 설정해줌
    const [tags, setTags] = useState([]); //filter한 tagarr 배열 

    const dat = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    const area = useParams().area;

    //입력값을 가져오기 위한 ref 변수
    const cat = useRef();

    
    //fetch해서 openAPI 가져오기
    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=2cTsIbMSNEakGj3HNSZtwQLbXXeuyM8AuaNHrr3dKA3L5Xi5w%2F0U6Rs3CwSIjl0DbsffGzIToXtTrtThSIlJCw%3D%3D';
        url = url + '&pageNo=1';
        url = url + '&numOfRows=1000';
        url = url + '&dataType=json';
        url = url + `&base_date=${dat}`;
        url = url + '&base_time=0630';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;


        fetch(url)
            .then((resp) => resp.json())
            .then((data) => { setFcst(data.response.body.items.item) })
            .catch((err) => console.log(err));


    }, []);

    useEffect(() => {

    }, [Fcst])

    //항목명 option category
    let temp = data.filter((item) => item.예보구분 === "초단기예보"); //.filter()
    console.log('temp = ', temp);
    let cate = temp.map((item) =>
        <option value={item.항목값} key={item.항목명}>
            {item.항목명 + '(' + item.항목값 + ')'}
        </option>); //filter해서 가져온 temp array를 map으로 돌려서 해당 값 가져오기
    console.log('cate = ', cate);

    //clickBt() 만들기 
   
    const clickBt = () => {
        //console.log(cat.current.value);
        let tagarr = Fcst.filter((item) => item.category === cat.current.value);
        setTags(tagarr);
        //console.log('tags = ', tags);  
    }

    return (<article>
        <div className="grid">
            <h5>{`${area} 초단기예보(${dat})`}</h5>
            <select id="cat" ref={cat} required defaultValue='' onChange={() => clickBt()}>
                <option value='' >선택</option>
                {cate}
            </select>
        </div>
        {tags && <FcstTable tags={tags} cat={cat}/>}
       
    </article>);
}
export default UltraSrtFcst;