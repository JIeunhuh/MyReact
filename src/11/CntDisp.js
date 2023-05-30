const CntDisp = ({add}) => {
    return (<article>
        <header className="grid">
            <h2>입력값 : {add}, 입력값 2배 : {2 * add}</h2>
        </header>
    </article>);
}
export default CntDisp;