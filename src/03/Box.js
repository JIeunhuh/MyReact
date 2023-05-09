import BoxRows_1 from "./BoxRows_1";
import { useRef, useState, useEffect } from "react";
const Box = () => {
    const [boxlist, setBoxlist] = useState();
    let seldt;
    //창 띄우면 어제날짜가 default로 잡히게 하기
    useEffect(() => {
        let yesterday = new Date(); //date() 사용 : 현재날짜로 잡힘
        yesterday.setDate(yesterday.getDate() - 1); //현재날짜에서 -1

        seldt = yesterday.getFullYear(); //전체 년도 가져오기
        seldt = `${seldt}${(yesterday.getMonth() + 1) < 10 ? '0' + (yesterday.getMonth() + 1) : (yesterday.getMonth() + 1)}`; //월 가져오기(0~11 범위로 돼있어서 +1 해줘야함)
        seldt = `${seldt}${yesterday.getDate() < 10 ? '0' + yesterday.getDate() : yesterday.getDate()}`; //날 가져오기

        getData(seldt);

        console.log('yesterday=' + seldt);
    }, [])
    // console.log(mvList)
    //날짜 입력창
    const dt1 = useRef();
    //날짜선택
    const getDt = () => {
        //console.log("dt1=" + dt1.current.value); //console창에 dt1이 나오는거 확인하기
        seldt = dt1.current.value.replaceAll('-', ''); //date에 '-'빼기
        console.log("dt=" + seldt);

        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + seldt;
        //fetch()
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch((err) => console.log(err));

    }
    //data 가져오기(fetch)
    const getData = (sd) => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + seldt;
        //fetch()
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch((err) => console.log(err));
    }
    return (
        <main >
            <article>
                <h1>Box Office</h1>
                <input type="date" ref={dt1} id="dt1" name="dt1" className="date" onChange={() => getDt()} />
                <table>
                    
                        <tr className="thead">
                            <th scope="col">Rank</th>
                            <th scope="col">Movie</th>
                            <th scope="col" className="font">매출액</th>
                            <th scope="col" className="font">증감</th>
                        </tr>
                    
                    {boxlist && <BoxRows_1 mv={boxlist} />}

                </table>
            </article>
        </main>
    );
}
export default Box;