import { useState, useRef, useEffect } from "react";
import './Myref.css';
const Myref = () => {
    const txtref = useRef(); //input을 제어하는데 쓰임 <input ref={변수명}>
    const addItem = (e) => { //등록 버튼 작성
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        console.log('addItem', itemArr.current );
        let temp = new Set(itemArr.current); //중복 데이터 제거
        temp=[...temp]; //배열 정렬
        setItemTag(temp.map((item,idx)=><span key={idx} className="item">{item}</span>)); 
        resetItem();
    }
    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();
    
    const resetItem = () => { //취소 버튼 작성
        txtref.current.value='';
        txtref.current.focus();
        console.log('resetItem');
    }
    useEffect(() => {
        txtref.current.focus(); //.focus()로 커서 깜빡이게 만듦
    }, []);

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1" className="text">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />

                            </div>
                            <div >
                                <button onClick={(e) => addItem(e)} className="but">등록</button>
                                <button onClick={() => resetItem()} className="but">취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <span className="grid">
                    {itemTag}
                </span>
            </article>
        </main>);
}
export default Myref;