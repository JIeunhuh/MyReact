import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from "./getxy.json";
const FcstMain = () => {
    // const [fcst1, setFcst1] = useState();
    // const [fcst2, setFcst2] = useState();

    //입력값을 가져오기 위한 ref 변수
    const date = useRef();
    const city = useRef();

    const [dat, setDat] = useState(); //날짜 선택
    
    const [area, setArea] = useState();
    const [x, setX] = useState(); //x좌표
    const [y, setY] = useState(); //y 좌표

    let category = data.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>
            {item["1단계"]}
        </option>);

    useEffect(() => {
        console.log(dat);
        console.log(area);
        console.log(x);
        console.log(y);
    }, [dat,area,x,y]);


    const getDt = () => {
        let dt = date.current.value;
        dt = dt.replaceAll('-', '');
        setDat(dt);
    };

    const getCt = () => {
        let temp = data.filter((item) => item["행정구역코드"] === parseInt(city.current.value));
        console.log(temp);
        setArea(temp[0]["1단계"]);
        setX(temp[0]["격자 X"]);
        setY(temp[0]["격자 Y"]);
        

    };

    return (
        <article className="contaner">
            <header><h1>단기예보 선택</h1></header>
            <form className="grid">
                <input type="date" ref={date} id="dt1" name="dt1" className="date" onChange={() => getDt()} />
                <select id="city" ref={city} onChange={() => getCt()} required defaultValue=''>
                    <option value='' >선택</option>
                    {category}
                </select>
            </form>

            <div className="grid">
                <button><Link to={`/ultra/${dat}/${area}/${x}/${y}`}  dat={dat} area={area} x={x} y={y} >초단기예보</Link></button>
                <button><Link to={`/vilage/${dat}/${area}/${x}/${y}`}>단기예보</Link></button>
            </div>

        </article>);
}
export default FcstMain;