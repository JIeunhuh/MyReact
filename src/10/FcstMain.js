import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import data from "./getxy.json";
const FcstMain = () => {

    let category = data.map((item) => <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>);
    console.log(category);

    const[x,setX] = useState();
    const[y,setY] = useState();

    const[date,setDate]=useState();

    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=2cTsIbMSNEakGj3HNSZtwQLbXXeuyM8AuaNHrr3dKA3L5Xi5w%2F0U6Rs3CwSIjl0DbsffGzIToXtTrtThSIlJCw%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_time=0500';
    let xx = setX(data.map((item)=>console.log(item["격자 X"])));
    let yy = setY(data.map((item)=>console.log(item["격자 Y"])));

    // &nx=55
    // &ny=127
   // &base_date=20230517

    return (
        <article className="contaner">
            <header><h1>단기예보 선택</h1></header>
            <form className="grid">
                <input type="date" id="dt1" name="dt1" className="date" />
                <select id="city" required>
                    <option value='' selected>선택</option>
                    {category}
                </select>
            </form>

            <div className="grid">
                <a href="#" role="button" class="outline" ><Link to='/page1'>초단기예보</Link></a>
                <a href="#" role="button" class="outline"><Link to='/page2'>단기예보</Link></a>
            </div>

        </article>);
}
export default FcstMain;