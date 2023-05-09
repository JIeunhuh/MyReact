
const Taccident_nav2 = ({ c2, sel1, setSel1, sel2, setSel2, selData, setSelData }) => {
    //console.log(c2);
    let bt_tag2arr = c2.filter((item) => item[0] === sel1);
    const bt_tag2 = bt_tag2arr.map((item) => <li key={item}><button onClick={() => { setSel2(item) }}>{item[1]}</button></li>);
    console.log(selData);




    return (
            <nav>
                <ul>
                    <h1><strong>사고유형_중분류</strong></h1>
                </ul>
                <ul>
                    {bt_tag2}

                </ul>
            </nav>
            

    );
}
export default Taccident_nav2;