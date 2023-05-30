import { useState} from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
const Cnt = () => {
    const [add, setAdd] = useState(0);
  
    //<form> 태그 사용하면 계속 page reloading 됨
    return (<main className="container">
        <CntInput add={add} setAdd={setAdd}/>
         <CntDisp add={add}/>
        
    </main>);
}
export default Cnt;