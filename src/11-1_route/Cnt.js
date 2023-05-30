import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
const Cnt = () => {

    //<form> 태그 사용하면 계속 page reloading 됨
    return (
        <BrowserRouter>
            <main className="container">
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<CntInput />} />
                        <Route path="/disp" element={<CntDisp />} />
                    </Routes>
                </RecoilRoot>
            </main>
        </BrowserRouter>
    );
}
export default Cnt;