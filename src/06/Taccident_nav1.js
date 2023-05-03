
const Taccident_nav1 = ({ c1, sel1, setSel1 }) => {
   // console.log(c1);
    const bt_tag = c1.map((item) => <li key={item}><button onClick={() => { setSel1(item) }}>{item}</button></li>);
    return (

        <nav>
            <ul>
                <h1><strong>사고유형_대분류</strong></h1>
            </ul>
            <ul>
                {bt_tag}
            </ul>
        </nav>

    );
}
export default Taccident_nav1;