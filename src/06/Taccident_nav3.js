const Taccident_nav3 = ({ c2, sel1, setSel1, sel2, setSel2,setSel3,sel3 }) => {
    //console.log(c2);
    let bt_tag2arr = c2.filter((item)=>item[0]===sel1);
    const bt_tag3 = bt_tag2arr.map((item) =><li key={item}><button onClick={()=>{setSel2(item)}}>{item[1]}</button></li>);





    return (

        <nav>
            <ul>
                {bt_tag3}
            </ul>
        </nav>

    );
}
export default Taccident_nav3;