import { Route, Routes, BrowserRouter } from "react-router-dom";
import FcstNav from "./FcstNav";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";
import FcstMain from "./FcstMain";
const Fcst = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <FcstNav/>
                <Routes>
                    <Route path="/" element={<FcstMain />} />
                    <Route path="/page1" element={<UltraSrtFcst />} />
                    <Route path="/page2" element={<VilageFcst />} />
                </Routes>
            </main>
        </BrowserRouter>);
}
export default Fcst;