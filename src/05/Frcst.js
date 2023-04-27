import data from './dataFrcst.json'; //json data import해오기
const Frcst = () => {
    //날짜 순서대로 가져오기(배열로 만듦)
    const dtKey = ['frcstOneDt', 'frcstTwoDt', 'frcstThreeDt', 'frcstFourDt']
    //.map() 이용해서 배열추가
    dtKey.map((item) => console.log(data[item])); 

    return (
        <>
        </>
    );


}
export default Frcst;