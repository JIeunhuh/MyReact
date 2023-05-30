import { useRef, useState } from "react";
const CntInput = () => {
    const [add, setAdd] = useState(0);
    const ref1 = useRef();
    const showAdd = (e) => {
        e.preventDefault();
        let cnt1 = parseInt(ref1.current.value);
        if (cnt1 >= 0)
            cnt1++;
        else cnt1 = 0;
        setAdd(cnt1);
    }
    const showMinus = (e) => {
        e.preventDefault();
        let cnt1 = parseInt(ref1.current.value);
        if (cnt1 >= 0) cnt1--;
        else cnt1 = 0;
        setAdd(cnt1);

    }
    return (
        <article>
            <form>
                <div className="grid">
                    <div><button onClick={(e) => showMinus(e)}>-</button></div>
                    <div><input type="text" ref={ref1} name="txt1" id="txt1" readOnly value={add} /></div>
                    <div><button onClick={(e) => showAdd(e)}>+</button></div>
                </div>
            </form>
        </article>
    );
}
export default CntInput;