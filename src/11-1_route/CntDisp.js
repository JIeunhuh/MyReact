import {Link} from 'react-router-dom';
import { useRecoilValue } from 'recoil'; //value / set 값 분리 해놔서 value값만 가져올 수 있음!!
import { CntAtoms,CntAtomsTwice } from './CntAtoms';
const CntDisp = () => {
    const add = useRecoilValue(CntAtoms); //atom 가져옴
    const n2 = useRecoilValue(CntAtomsTwice); //selecor
    return (<article>
        <header className="grid">
            <h2>입력값 : {add}, 입력값 2배 : {n2}</h2>
        </header>
        <footer>
            <Link to='/'>입력화면 이동</Link>
        </footer>
    </article>);
}
export default CntDisp;