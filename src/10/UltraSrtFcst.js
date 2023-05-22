import { useEffect, useState } from "react";
import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
//import data from "./getxy.json";
const UltraSrtFcst=()=>{
    
    const[Fcst, setFcst]=useState();
    const dat = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;
    
    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=2cTsIbMSNEakGj3HNSZtwQLbXXeuyM8AuaNHrr3dKA3L5Xi5w%2F0U6Rs3CwSIjl0DbsffGzIToXtTrtThSIlJCw%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_time=0630';

        url = url + `&base_date=${dat}`;
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;
        //console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setFcst(data.response.body.items.item))
            .catch((err) => console.log(err));
    }, []);
    useEffect(()=>{
        console.log(Fcst);
    },[Fcst])
    let tags=[];
    // for(let row of Fcst){

    //     tags.push(
    //         <tbody>
    //             <tr>
    //                 <td>{row.</td>
    //             </tr>
    //         </tbody>
    //     )
    // }
 


       
    return(<article>
        <FcstTable/>
        
    </article>);
}
export default UltraSrtFcst;