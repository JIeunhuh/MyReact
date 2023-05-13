import { useState } from "react";
import style from './Gallery.module.css';
const GallaryList = ({ gList }) => {

    //const [lList, setlList] = useState();산
    // const[rList,setrList]=useState();
    let tags = [];
    

    //json data 배열로 받아서 키값 출력하기 
    for (let row of gList) {

        let temp = row.galSearchKeyword.split(','); //keword의 쉼표 삭제
        console.log('row = ' + temp);

        tags.push(
            
            <article >
                <head className="grid"><h1>{row.galTitle}</h1><h4>{row.galPhotographyLocation}</h4></head>
                <body><img src={row.galWebImageUrl}></img></body>
                <footer><div className={style.kwtag}>{temp}</div></footer>
            </article>

        );
             
    }
    // let tags2 =[];
    // for (let i = 0; i < tags.length; i += 2) {
      
        
    // }

    return (

        <article>
            {tags}
        </article>

    );
}
export default GallaryList;