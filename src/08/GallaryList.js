import style from './Gallery.module.css';
import './Gallary.css';
const GallaryList = ({ gList }) => {

    // console.log(gList);
    //const [lList, setlList] = useState();산
    // const[rList,setrList]=useState();
    let tags = [];


    //json data 배열로 받아서 키값 출력하기 
    for (let row of gList) {

        let temp = row.galSearchKeyword.split(', '); //keword의 쉼표 삭제

        let keyword = temp.map((item) => <span className={style.kwtag} key={item}># {item}</span>); //<span/div>태그로 감싸줘야 키워드마다 content box 하나씩 생김 그래야 배경색 따로 줄 수 있음 !!
        console.log(keyword);

        tags.push(

            <article className={style.gv}>
                <h1 className={style.gv} id="h1">{row.galTitle}</h1>
                <h4 className={style.gv} id="h4">{row.galPhotographyLocation}</h4>
                <body><img src={row.galWebImageUrl}></img></body>
                <footer><div >{keyword}</div></footer>
            </article>

        );

    }
    //tags 화면에 두개씩 출력하게 하기
    //tags2 새로 정의해서 tags.map해서 배열로 가져옴
    const tags2 = tags.map((item, index) => {
        if (index % 2 === 0) { //index가 2로 나누어떨어지면 {item},그 다음{item} 가져옴(index+1번째)
            return (<div className={style.two} key={index}>
            {<span className={style.view}>{item}</span>}
           {<span className={style.view}>{tags[index + 1]}</span>} 
            </div>
            )
        }
        else //2로 나눠서 안나눠 떨어지는거=>홀수번째 index는 어챂 가져올 필요 없어서 null로 하면 홀수번째 게시글은 마지막에 알아서 하나 크게 나옴 !
        return null;
    });

    return (

        <article>
            {tags2}
        </article>

    );
}
export default GallaryList;